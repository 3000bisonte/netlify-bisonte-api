#!/usr/bin/env node

/**
 * Script para revisar y corregir completamente la autenticación Google
 * Ejecutar con: node scripts/review-auth.js
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('🔍 REVISIÓN COMPLETA DE AUTENTICACIÓN GOOGLE');
console.log('============================================\n');

// Función para hacer requests HTTP simples
function makeRequest(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(data),
            success: res.statusCode === 200
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: data,
            success: res.statusCode === 200,
            error: e.message
          });
        }
      });
    });
    
    req.on('error', (err) => {
      resolve({
        success: false,
        error: err.message
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        success: false,
        error: 'Timeout'
      });
    });
  });
}

async function reviewAuthentication() {
  console.log('1️⃣ Probando endpoints de autenticación...\n');
  
  const endpoints = [
    { name: 'Health Check', url: 'http://localhost:3001/api/health' },
    { name: 'NextAuth Providers', url: 'http://localhost:3001/api/auth/providers' },
    { name: 'NextAuth CSRF', url: 'http://localhost:3001/api/auth/csrf' },
    { name: 'Public Config', url: 'http://localhost:3001/api/public/config' }
  ];

  for (const endpoint of endpoints) {
    console.log(`Testing: ${endpoint.name}`);
    const result = await makeRequest(endpoint.url);
    
    if (result.success) {
      console.log(`✅ ${endpoint.name}: OK (${result.status})`);
      if (endpoint.name === 'Public Config' && result.data) {
        console.log(`   Google Client ID: ${result.data.googleClientId ? '✅ Configurado' : '❌ Faltante'}`);
      }
      if (endpoint.name === 'NextAuth Providers' && result.data) {
        console.log(`   Google Provider: ${result.data.google ? '✅ Disponible' : '❌ No encontrado'}`);
        console.log(`   Credentials Provider: ${result.data.credentials ? '✅ Disponible' : '❌ No encontrado'}`);
      }
    } else {
      console.log(`❌ ${endpoint.name}: FALLO`);
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }
    console.log('');
  }

  // Revisar archivos clave
  console.log('2️⃣ Revisando archivos de configuración...\n');
  
  const criticalFiles = [
    '.env.local',
    'src/app/api/auth/[...nextauth]/route.js',
    'src/components/GoogleSignIn.js',
    'src/components/GoogleSignInSimplified.js',
    'src/components/LoginForm.js',
    'middleware.js',
    'vercel.json'
  ];

  for (const file of criticalFiles) {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}: Existe`);
      
      // Verificaciones específicas
      if (file === '.env.local') {
        const content = fs.readFileSync(file, 'utf8');
        console.log(`   NEXTAUTH_SECRET: ${content.includes('NEXTAUTH_SECRET') ? '✅' : '❌'}`);
        console.log(`   GOOGLE_CLIENT_ID: ${content.includes('GOOGLE_CLIENT_ID') ? '✅' : '❌'}`);
        console.log(`   NEXTAUTH_URL: ${content.includes('NEXTAUTH_URL') ? '✅' : '❌'}`);
      }
      
      if (file === 'src/app/api/auth/[...nextauth]/route.js') {
        const content = fs.readFileSync(file, 'utf8');
        console.log(`   GoogleProvider: ${content.includes('GoogleProvider') ? '✅' : '❌'}`);
        console.log(`   CredentialsProvider: ${content.includes('CredentialsProvider') ? '✅' : '❌'}`);
        console.log(`   WebView config: ${content.includes('sameSite') ? '✅' : '❌'}`);
      }
    } else {
      console.log(`❌ ${file}: No existe`);
    }
  }

  console.log('\n3️⃣ Analizando componentes de Google Sign-In...\n');
  
  // Verificar qué componentes están siendo usados
  const loginFormPath = 'src/components/LoginForm.js';
  if (fs.existsSync(loginFormPath)) {
    const loginContent = fs.readFileSync(loginFormPath, 'utf8');
    console.log('Componentes importados en LoginForm:');
    console.log(`   GoogleSignIn: ${loginContent.includes('GoogleSignIn') && !loginContent.includes('GoogleSignInSimplified') ? '✅' : '❌'}`);
    console.log(`   GoogleSignInSimplified: ${loginContent.includes('GoogleSignInSimplified') ? '✅' : '❌'}`);
    console.log(`   Otros Google components: ${loginContent.includes('GoogleSignInButton') ? '⚠️ Legacy' : '✅ Limpio'}`);
  }

  console.log('\n4️⃣ Identificando problemas comunes...\n');
  
  const problems = [];
  
  // Check 1: Multiple Google components
  const componentFiles = [
    'src/components/GoogleSignIn.js',
    'src/components/GoogleSignInSimplified.js',
    'src/components/GoogleSignInButton.js',
    'src/components/GoogleSignInButtonNative.js',
    'src/components/GoogleSignInButton.original.js'
  ];
  
  const existingComponents = componentFiles.filter(file => fs.existsSync(file));
  if (existingComponents.length > 2) {
    problems.push('Múltiples componentes de Google Sign-In pueden causar conflictos');
  }
  
  // Check 2: Environment variables
  const envPath = '.env.local';
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    if (!envContent.includes('GOOGLE_CLIENT_SECRET=') || envContent.includes('your-development-google-client-secret-here')) {
      problems.push('GOOGLE_CLIENT_SECRET no está configurado');
    }
    if (!envContent.includes('DATABASE_URL=') || envContent.includes('your-development-database-url-here')) {
      problems.push('DATABASE_URL no está configurado');
    }
  } else {
    problems.push('Archivo .env.local no existe');
  }
  
  // Check 3: Next.js config
  const nextConfigPath = 'next.config.js';
  if (fs.existsSync(nextConfigPath)) {
    const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    if (nextConfig.includes("output: 'export'") && !nextConfig.includes('// output:')) {
      problems.push('next.config.js tiene output: export activo, incompatible con NextAuth');
    }
  }

  if (problems.length > 0) {
    console.log('❌ Problemas encontrados:');
    problems.forEach((problem, index) => {
      console.log(`   ${index + 1}. ${problem}`);
    });
  } else {
    console.log('✅ No se encontraron problemas graves');
  }

  console.log('\n5️⃣ Recomendaciones...\n');
  
  console.log('Para una autenticación Google robusta:');
  console.log('✅ Usar un solo componente: GoogleSignIn.js (con NextAuth)');
  console.log('✅ Configurar variables de entorno completas');
  console.log('✅ Asegurar que next.config.js no tenga output: export');
  console.log('✅ Verificar que middleware.js proteja rutas correctamente');
  console.log('✅ Probar en navegador y WebView');
}

if (require.main === module) {
  reviewAuthentication().catch(console.error);
}

module.exports = { reviewAuthentication };
