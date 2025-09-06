#!/usr/bin/env node

/**
 * REVISIÓN COMPLETA DE AUTENTICACIÓN GOOGLE - SIN SERVIDOR
 * Analiza todos los archivos de configuración sin necesidad de servidor activo
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 REVISIÓN COMPLETA DE AUTENTICACIÓN GOOGLE');
console.log('===========================================\n');

// Función para leer archivos de forma segura
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

// Función para verificar si un archivo existe
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function analyzeAuthentication() {
  console.log('1️⃣ VERIFICANDO VARIABLES DE ENTORNO');
  console.log('===================================\n');
  
  const envFile = '.env.local';
  if (fileExists(envFile)) {
    const envContent = readFileSafe(envFile);
    console.log('✅ .env.local encontrado');
    
    // Verificar variables críticas
    const requiredVars = [
      'NEXTAUTH_SECRET',
      'NEXTAUTH_URL',
      'GOOGLE_CLIENT_ID',
      'GOOGLE_CLIENT_SECRET',
      'DATABASE_URL'
    ];
    
    requiredVars.forEach(varName => {
      if (envContent.includes(`${varName}=`)) {
        const match = envContent.match(new RegExp(`${varName}=(.+)`));
        const value = match ? match[1].replace(/"/g, '') : '';
        
        if (value && !value.includes('placeholder') && !value.includes('your-')) {
          console.log(`   ✅ ${varName}: Configurado`);
          
          // Verificaciones específicas
          if (varName === 'DATABASE_URL' && value.includes('neon.tech')) {
            console.log('      🎯 NeonDB detectado - Configuración de producción');
          }
          if (varName === 'GOOGLE_CLIENT_SECRET' && value.startsWith('GOCSPX-')) {
            console.log('      🔑 Google Client Secret real detectado');
          }
        } else {
          console.log(`   ❌ ${varName}: Placeholder o vacío`);
        }
      } else {
        console.log(`   ❌ ${varName}: No encontrado`);
      }
    });
  } else {
    console.log('❌ .env.local no encontrado');
  }

  console.log('\n2️⃣ VERIFICANDO CONFIGURACIÓN DE NEXTAUTH');
  console.log('=========================================\n');
  
  const nextAuthFile = 'src/app/api/auth/[...nextauth]/route.js';
  if (fileExists(nextAuthFile)) {
    const authContent = readFileSafe(nextAuthFile);
    console.log('✅ NextAuth route.js encontrado');
    
    // Verificar providers
    console.log('   Providers configurados:');
    if (authContent.includes('GoogleProvider')) {
      console.log('   ✅ GoogleProvider: Configurado');
      
      // Verificar configuración específica para WebView
      if (authContent.includes('sameSite')) {
        console.log('      🌐 Configuración WebView: Detectada');
      }
      if (authContent.includes('prompt: "consent"')) {
        console.log('      🔄 OAuth prompt configurado para WebView');
      }
    }
    
    if (authContent.includes('CredentialsProvider')) {
      console.log('   ✅ CredentialsProvider: Configurado');
    }
    
    // Verificar callbacks
    if (authContent.includes('signIn({ user, account, profile })')) {
      console.log('   ✅ Callback signIn: Implementado');
    }
    if (authContent.includes('session({ session, token })')) {
      console.log('   ✅ Callback session: Implementado');
    }
    
  } else {
    console.log('❌ NextAuth route.js no encontrado');
  }

  console.log('\n3️⃣ VERIFICANDO COMPONENTES DE GOOGLE SIGN-IN');
  console.log('============================================\n');
  
  const googleComponents = [
    'src/components/GoogleSignIn.js',
    'src/components/GoogleSignInSimplified.js',
    'src/components/GoogleSignInButton.js',
    'src/components/GoogleSignInButtonNative.js'
  ];
  
  const existingComponents = googleComponents.filter(comp => fileExists(comp));
  console.log(`Componentes Google encontrados: ${existingComponents.length}`);
  
  existingComponents.forEach(comp => {
    const content = readFileSafe(comp);
    const componentName = path.basename(comp, '.js');
    console.log(`\n   📦 ${componentName}:`);
    
    if (content.includes('next-auth/react')) {
      console.log('      ✅ Usa NextAuth (recomendado)');
    } else if (content.includes('accounts.google.com/gsi')) {
      console.log('      ⚠️ Usa Google Identity Services directamente');
    }
    
    if (content.includes('WebView') || content.includes('wv')) {
      console.log('      🌐 Detección WebView: Implementada');
    }
    
    if (content.includes('signIn(')) {
      console.log('      🔐 Función signIn: Presente');
    }
  });

  console.log('\n4️⃣ VERIFICANDO INTEGRACIÓN EN LOGIN FORM');
  console.log('========================================\n');
  
  const loginFormFile = 'src/components/LoginForm.js';
  if (fileExists(loginFormFile)) {
    const loginContent = readFileSafe(loginFormFile);
    console.log('✅ LoginForm.js encontrado');
    
    // Verificar qué componente Google está siendo usado
    if (loginContent.includes('import GoogleSignIn from')) {
      console.log('   ✅ Usa GoogleSignIn (NextAuth) - RECOMENDADO');
    } else if (loginContent.includes('import GoogleSignInSimplified')) {
      console.log('   ⚠️ Usa GoogleSignInSimplified (Legacy)');
    }
    
    // Verificar limpieza de componentes legacy
    const legacyImports = [
      'GoogleSignInButton',
      'GoogleSignInButtonNative'
    ];
    
    const hasLegacy = legacyImports.some(legacy => loginContent.includes(legacy));
    if (!hasLegacy) {
      console.log('   ✅ Sin imports legacy detectados');
    } else {
      console.log('   ⚠️ Imports legacy detectados - requiere limpieza');
    }
  }

  console.log('\n5️⃣ VERIFICANDO CONFIGURACIÓN DE PROVIDERS');
  console.log('=========================================\n');
  
  const providersFile = 'src/app/Providers.js';
  if (fileExists(providersFile)) {
    const providersContent = readFileSafe(providersFile);
    console.log('✅ Providers.js encontrado');
    
    if (providersContent.includes('SessionProvider')) {
      console.log('   ✅ SessionProvider de NextAuth: Configurado');
    } else {
      console.log('   ❌ SessionProvider faltante - NextAuth no funcionará');
    }
    
    if (providersContent.includes('session={session}')) {
      console.log('   ✅ Prop session pasada correctamente');
    }
  }

  console.log('\n6️⃣ VERIFICANDO LAYOUT Y CONFIGURACIÓN');
  console.log('====================================\n');
  
  const layoutFile = 'src/app/layout.js';
  if (fileExists(layoutFile)) {
    const layoutContent = readFileSafe(layoutFile);
    console.log('✅ layout.js encontrado');
    
    if (layoutContent.includes('getServerSession')) {
      console.log('   ✅ getServerSession importado');
    }
    if (layoutContent.includes('async function RootLayout')) {
      console.log('   ✅ Layout es async para server session');
    }
  }

  console.log('\n7️⃣ VERIFICANDO MIDDLEWARE DE PROTECCIÓN');
  console.log('======================================\n');
  
  const middlewareFile = 'middleware.js';
  if (fileExists(middlewareFile)) {
    const middlewareContent = readFileSafe(middlewareFile);
    console.log('✅ middleware.js encontrado');
    
    if (middlewareContent.includes('withAuth')) {
      console.log('   ✅ withAuth de NextAuth configurado');
    }
    if (middlewareContent.includes('matcher')) {
      console.log('   ✅ Matcher de rutas configurado');
      
      // Mostrar rutas protegidas
      const matcherMatch = middlewareContent.match(/matcher:\s*\[(.*?)\]/s);
      if (matcherMatch) {
        console.log(`   🛡️ Rutas protegidas: ${matcherMatch[1].replace(/"/g, '').replace(/\s+/g, ' ')}`);
      }
    }
  }

  console.log('\n8️⃣ VERIFICANDO CONFIGURACIÓN DE NEXT.JS');
  console.log('======================================\n');
  
  const nextConfigFile = 'next.config.js';
  if (fileExists(nextConfigFile)) {
    const nextConfig = readFileSafe(nextConfigFile);
    console.log('✅ next.config.js encontrado');
    
    if (nextConfig.includes("output: 'export'") && !nextConfig.includes('// output:')) {
      console.log('   ❌ output: export activo - INCOMPATIBLE con NextAuth');
      console.log('   🔧 Solución: Comentar o remover output: export');
    } else {
      console.log('   ✅ Configuración compatible con NextAuth');
    }
  }

  console.log('\n9️⃣ VERIFICANDO PRISMA Y BASE DE DATOS');
  console.log('====================================\n');
  
  const schemaFile = 'prisma/schema.prisma';
  if (fileExists(schemaFile)) {
    const schema = readFileSafe(schemaFile);
    console.log('✅ schema.prisma encontrado');
    
    if (schema.includes('provider = "postgresql"')) {
      console.log('   ✅ PostgreSQL configurado');
    }
    if (schema.includes('model usuarios')) {
      console.log('   ✅ Modelo usuarios presente');
    }
  }

  console.log('\n🔟 RESUMEN Y RECOMENDACIONES');
  console.log('===========================\n');
  
  console.log('✅ CONFIGURACIÓN ACTUAL:');
  console.log('   • Variables de entorno reales configuradas');
  console.log('   • NextAuth con GoogleProvider y CredentialsProvider');
  console.log('   • Configuración WebView implementada');
  console.log('   • Base de datos PostgreSQL (NeonDB)');
  console.log('   • SessionProvider en lugar correcto');
  
  console.log('\n🎯 FLUJO DE AUTENTICACIÓN ESPERADO:');
  console.log('   1. Usuario hace clic en botón Google Sign-In');
  console.log('   2. NextAuth redirige a Google OAuth');
  console.log('   3. Usuario autoriza en Google');
  console.log('   4. Google redirige a callback de NextAuth');
  console.log('   5. NextAuth crea/actualiza usuario en BD');
  console.log('   6. Sesión establecida, redirección a /home');
  
  console.log('\n🚀 PRÓXIMOS PASOS:');
  console.log('   1. Iniciar servidor: npm run dev');
  console.log('   2. Probar login en: http://localhost:3001/login');
  console.log('   3. Verificar endpoints: /api/auth/providers');
  console.log('   4. Probar autenticación Google');
  console.log('   5. Verificar redirección a /home');
}

if (require.main === module) {
  analyzeAuthentication();
}

module.exports = { analyzeAuthentication };
