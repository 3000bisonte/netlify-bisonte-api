#!/usr/bin/env node

/**
 * Script para aplicar todas las correcciones de autenticación Google en WebView
 * Ejecutar con: node scripts/fix-webview-auth.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Aplicando correcciones de autenticación Google para WebView...\n');

// Función para escribir archivos de forma segura
function writeFile(filePath, content) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filePath}`);
  } catch (error) {
    console.error(`❌ Error escribiendo ${filePath}:`, error.message);
  }
}

// Función para leer archivos
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`❌ Error leyendo ${filePath}:`, error.message);
    return null;
  }
}

// 1. Configurar middleware.js
console.log('1️⃣ Configurando middleware.js...');
const middlewareContent = `import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/login" },
});

export const config = {
  matcher: ["/home/:path*", "/misenvios/:path*", "/admin/:path*"],
};`;
writeFile('middleware.js', middlewareContent);

// 2. Actualizar src/app/api/auth/[...nextauth]/route.js
console.log('2️⃣ Actualizando configuración de NextAuth...');
const nextauthContent = `import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/libs/prisma'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    // Login con Google - Configurado para WebView
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
    // Login con credenciales contra DB real (tabla \`usuarios\`)
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim()
        const password = credentials?.password || ''
        if (!email || !password) {
          throw new Error('Usuario o contraseña incorrectos')
        }

        // Buscar usuario en la tabla \`usuarios\`
        const user = await prisma.usuarios.findUnique({ where: { email } })
        if (!user || !user.password) {
          throw new Error('Usuario o contraseña incorrectos')
        }

        const ok = await bcrypt.compare(password, user.password)
        if (!ok) {
          throw new Error('Usuario o contraseña incorrectos')
        }

        return {
          id: String(user.id),
          name: user.nombre || null,
          email: user.email,
          image: null,
          role: user.esAdministrador ? 'admin' : 'user',
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  // Configuración específica para WebView
  cookies: {
    sessionToken: {
      name: \`next-auth.session-token\`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    callbackUrl: {
      name: \`next-auth.callback-url\`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    csrfToken: {
      name: \`next-auth.csrf-token\`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Para Google: asegurar consistencia con la tabla \`usuarios\`
      if (account?.provider === 'google') {
        try {
          const email = user?.email?.toLowerCase()
          if (!email) return false
          // Buscar o crear registro en \`usuarios\`
          const existing = await prisma.usuarios.findUnique({ where: { email } })
          if (!existing) {
            await prisma.usuarios.create({
              data: {
                email,
                nombre: user?.name || profile?.name || null,
                password: null,
              },
            })
          }
          return true
        } catch (e) {
          console.error('Google signIn error:', e)
          return false
        }
      }
      // Credentials ya validó en authorize
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.userId = user.id
        token.email = user.email
        token.name = user.name
        token.role = user.role || token.role || 'user'
      }
      if (account) {
        token.provider = account.provider
      }
      return token
    },
    async session({ session, token }) {
      session.user = session.user || {}
      session.user.id = token.userId
      session.user.email = token.email
      session.user.name = token.name
      session.user.role = token.role
      session.provider = token.provider
      return session
    },
    async redirect({ url, baseUrl }) {
      // Forzar redirección al home post-login
      try {
        const u = new URL(url, baseUrl)
        if (u.pathname.startsWith('/api/auth')) return \`\${baseUrl}/home\`
      } catch {}
      if (url.startsWith('/')) return \`\${baseUrl}\${url}\`
      try { if (new URL(url).origin === baseUrl) return url } catch {}
      return \`\${baseUrl}/home\`
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  // Configuración adicional para WebView
  useSecureCookies: process.env.NODE_ENV === 'production',
  events: {
    async signIn(message) {
      console.log('User signed in:', message.user.email)
    },
    async signOut(message) {
      console.log('User signed out:', message.token?.email)
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }`;
writeFile('src/app/api/auth/[...nextauth]/route.js', nextauthContent);

// 3. Actualizar src/components/GoogleSignIn.js
console.log('3️⃣ Actualizando componente GoogleSignIn...');
const googleSignInContent = `"use client";
import { useState, useEffect } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function GoogleSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isWebView, setIsWebView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Detectar si estamos en WebView
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isWebView = /wv|WebView/i.test(userAgent) ||
                     /Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/i.test(userAgent) ||
                     /Android.*Mobile/i.test(userAgent) && !/Chrome/i.test(userAgent);
    setIsWebView(isWebView);
  }, []);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError('');

    try {
      if (isWebView) {
        // Para WebView, usar redireccionamiento en lugar de popup
        await signIn('google', {
          callbackUrl: '/home',
          redirect: true
        });
      } else {
        // Para navegadores normales, usar popup
        const result = await signIn('google', {
          callbackUrl: '/home',
          redirect: false
        });

        if (result?.error) {
          setError('Error al iniciar sesión con Google');
        } else if (result?.ok) {
          // Verificar sesión después del login
          const session = await getSession();
          if (session) {
            router.push('/home');
          }
        }
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Error al iniciar sesión con Google. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className="flex items-center justify-center w-full py-3 px-4 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full mr-3"></div>
            {isWebView ? 'Redirigiendo...' : 'Iniciando sesión...'}
          </>
        ) : (
          <>
            <GoogleIcon />
            <span className="ml-3 font-medium">Continuar con Google</span>
          </>
        )}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
      {isWebView && (
        <p className="mt-2 text-xs text-gray-500 text-center">
          Se abrirá una nueva ventana para iniciar sesión
        </p>
      )}
    </div>
  );
}`;
writeFile('src/components/GoogleSignIn.js', googleSignInContent);

// 4. Actualizar vercel.json
console.log('4️⃣ Actualizando vercel.json...');
const vercelContent = `{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.js": { "maxDuration": 30 }
  },
  "env": {
    "NODE_ENV": "production"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin-allow-popups" },
        { "key": "Cross-Origin-Embedder-Policy", "value": "unsafe-none" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, PUT, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization, X-Requested-With" },
        { "key": "Access-Control-Allow-Credentials", "value": "true" }
      ]
    },
    {
      "source": "/api/auth/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, PUT, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization, X-Requested-With" },
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" }
      ]
    },
    {
      "source": "/login",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Content-Security-Policy", "value": "frame-ancestors 'none'; script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com; connect-src 'self' https://accounts.google.com https://apis.google.com https://oauth2.googleapis.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'" }
      ]
    },
    {
      "source": "/auth/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Content-Security-Policy", "value": "frame-ancestors 'none'; script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com; connect-src 'self' https://accounts.google.com https://apis.google.com https://oauth2.googleapis.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'" }
      ]
    }
  ]
}`;
writeFile('vercel.json', vercelContent);

// 5. Crear configuración de WebView
console.log('5️⃣ Creando configuración de WebView...');
const webviewConfigContent = `// Configuración específica para WebView y OAuth
export const webViewConfig = {
  // Detectar si estamos en WebView
  isWebView: () => {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroidWebView = /wv|WebView/i.test(userAgent) ||
                           /Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/i.test(userAgent) ||
                           /Android.*Mobile/i.test(userAgent) && !/Chrome/i.test(userAgent);

    // Detectar WebView en iOS
    const isIOSWebView = /Mobile\/[\d\w]+ Safari/i.test(userAgent) &&
                        !/Chrome|CriOS|FxiOS|OPiOS|mercury/i.test(userAgent);

    return isAndroidWebView || isIOSWebView;
  },

  // Configuración de cookies para WebView
  cookieOptions: {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false, // Necesario para WebView
  },

  // Headers adicionales para WebView
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json, text/plain, */*',
  },

  // Configuración de OAuth para WebView
  oauth: {
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
    scope: 'openid email profile',
  },
};

export default webViewConfig;`;
writeFile('src/config/webview.config.js', webviewConfigContent);

// 6. Crear script de diagnóstico
console.log('6️⃣ Creando script de diagnóstico...');
const diagnoseContent = `#!/usr/bin/env node

/**
 * Script de diagnóstico para autenticación con Google en WebView
 */

const https = require('https');
const { URL } = require('url');

const BASE_URL = process.env.VERCEL_URL
  ? \`https://\${process.env.VERCEL_URL}\`
  : 'http://localhost:3000';

const endpoints = [
  {
    name: 'Health Check',
    url: \`\${BASE_URL}/api/health\`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Auth Configuration',
    url: \`\${BASE_URL}/api/auth/providers\`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Google OAuth Config',
    url: \`\${BASE_URL}/api/public/config\`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Auth CSRF',
    url: \`\${BASE_URL}/api/auth/csrf\`,
    method: 'GET',
    expectedStatus: 200,
  },
];

function makeRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint.url);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: endpoint.method,
      headers: {
        'User-Agent': 'Bisonte-WebView-Diagnostic/1.0',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = {
            name: endpoint.name,
            url: endpoint.url,
            status: res.statusCode,
            expectedStatus: endpoint.expectedStatus,
            success: res.statusCode === endpoint.expectedStatus,
            headers: res.headers,
            data: data ? JSON.parse(data) : null,
          };
          resolve(result);
        } catch (e) {
          resolve({
            name: endpoint.name,
            url: endpoint.url,
            status: res.statusCode,
            expectedStatus: endpoint.expectedStatus,
            success: res.statusCode === endpoint.expectedStatus,
            error: e.message,
            rawData: data,
          });
        }
      });
    });

    req.on('error', (err) => {
      resolve({
        name: endpoint.name,
        url: endpoint.url,
        success: false,
        error: err.message,
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        name: endpoint.name,
        url: endpoint.url,
        success: false,
        error: 'Timeout after 10 seconds',
      });
    });

    req.end();
  });
}

async function runDiagnostics() {
  console.log('🔍 Diagnóstico de Autenticación Google en WebView');
  console.log('================================================\\n');

  console.log(\`Base URL: \${BASE_URL}\`);
  console.log(\`Environment: \${process.env.NODE_ENV || 'development'}\\n\`);

  const results = [];

  for (const endpoint of endpoints) {
    console.log(\`Testing: \${endpoint.name}\`);
    console.log(\`URL: \${endpoint.url}\`);

    const result = await makeRequest(endpoint);
    results.push(result);

    if (result.success) {
      console.log(\`✅ Status: \${result.status} (Expected: \${result.expectedStatus})\`);
    } else {
      console.log(\`❌ Status: \${result.status || 'N/A'} (Expected: \${result.expectedStatus})\`);
      if (result.error) {
        console.log(\`   Error: \${result.error}\`);
      }
    }

    // Mostrar información adicional para endpoints específicos
    if (result.name === 'Google OAuth Config' && result.data) {
      console.log(\`   Google Client ID: \${result.data.googleClientId ? '✅ Configurado' : '❌ No configurado'}\`);
      console.log(\`   Redirect URI: \${result.data.redirectUri}\`);
      console.log(\`   Environment: \${result.data.environment}\`);
    }

    console.log('');
  }

  // Resumen
  const successful = results.filter(r => r.success).length;
  const total = results.length;

  console.log('📊 Resumen del Diagnóstico');
  console.log('==========================');
  console.log(\`Endpoints probados: \${total}\`);
  console.log(\`Exitosos: \${successful}\`);
  console.log(\`Fallidos: \${total - successful}\`);

  if (successful === total) {
    console.log('\\n🎉 ¡Todos los endpoints están funcionando correctamente!');
    console.log('La autenticación con Google debería funcionar en WebView.');
  } else {
    console.log('\\n⚠️  Algunos endpoints fallaron. Revisa la configuración.');
    console.log('\\nPosibles problemas:');
    console.log('- Variables de entorno no configuradas');
    console.log('- Problemas de CORS');
    console.log('- Configuración de NextAuth incorrecta');
    console.log('- Headers de seguridad bloqueando requests');
  }

  // Verificar configuración específica de WebView
  console.log('\\n🔧 Verificación de configuración WebView');
  console.log('=========================================');

  const authConfig = results.find(r => r.name === 'Auth Configuration');
  if (authConfig?.data) {
    console.log('✅ Configuración de NextAuth encontrada');
    if (authConfig.data.google) {
      console.log('✅ Provider de Google configurado');
    } else {
      console.log('❌ Provider de Google no encontrado');
    }
  } else {
    console.log('❌ No se pudo obtener configuración de NextAuth');
  }
}

if (require.main === module) {
  runDiagnostics().catch(console.error);
}

module.exports = { runDiagnostics, makeRequest };`;
writeFile('scripts/diagnose-auth.js', diagnoseContent);

// 7. Actualizar package.json
console.log('7️⃣ Actualizando package.json...');
const packagePath = 'package.json';
let packageJson = readFile(packagePath);

if (packageJson) {
  try {
    const packageData = JSON.parse(packageJson);

    // Agregar script de diagnóstico
    if (!packageData.scripts) {
      packageData.scripts = {};
    }
    packageData.scripts['diagnose:auth'] = 'node scripts/diagnose-auth.js';

    // Agregar dependencias necesarias
    if (!packageData.dependencies) {
      packageData.dependencies = {};
    }

    // Escribir el archivo actualizado
    writeFile(packagePath, JSON.stringify(packageData, null, 2));
  } catch (error) {
    console.error('❌ Error actualizando package.json:', error.message);
  }
}

// 8. Crear archivo de variables de entorno de ejemplo
console.log('8️⃣ Creando archivo de variables de entorno...');
const envExampleContent = `# Variables de entorno para desarrollo local

# NextAuth Configuration
NEXTAUTH_SECRET=development-secret-key-for-nextauth
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (Development)
GOOGLE_CLIENT_ID=831420252741-4191330gjs69hkm4jr55rig3d8ouas0f.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-development-google-client-secret-here

# Database (Development)
DATABASE_URL=your-development-database-url-here

# API URLs (Development)
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_BISONTE_API_URL=http://localhost:8080

# Environment
NODE_ENV=development`;
writeFile('.env.example', envExampleContent);

// 9. Crear archivo de producción
console.log('9️⃣ Creando archivo de producción...');
const envProdContent = `# Variables de entorno para producción

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app

# Google OAuth
GOOGLE_CLIENT_ID=108242889910-n3ptem16orktkl0klv8onlttfl83r1ul.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Database
DATABASE_URL=your-database-url-here

# AdMob Production IDs - REALES
NEXT_PUBLIC_ADMOB_APP_ID=ca-app-pub-1352045169606160~5443732431
NEXT_PUBLIC_ADMOB_REWARDED_ID=ca-app-pub-1352045169606160/7908962294
NEXT_PUBLIC_ADMOB_BANNER_ID=ca-app-pub-1352045169606160/7029983134

# Bisonte API URLs
NEXT_PUBLIC_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions
NEXT_PUBLIC_BISONTE_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions

# Environment
NODE_ENV=production
NEXT_PUBLIC_VERCEL_ENV=production`;
writeFile('.env.production', envProdContent);

console.log('\\n🎉 ¡Todas las correcciones han sido aplicadas!');
console.log('\\n📋 Próximos pasos:');
console.log('1. Configura las variables de entorno en Vercel');
console.log('2. Ejecuta: npm run diagnose:auth');
console.log('3. Prueba la autenticación en WebView');
console.log('4. Si hay problemas, revisa los logs de Vercel');

console.log('\\n🔧 Variables requeridas en Vercel:');
console.log('- NEXTAUTH_SECRET');
console.log('- NEXTAUTH_URL');
console.log('- GOOGLE_CLIENT_ID');
console.log('- GOOGLE_CLIENT_SECRET');
console.log('- DATABASE_URL');
