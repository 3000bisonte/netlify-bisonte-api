const fs = require('fs');
const path = require('path');

console.log('🔍 DIAGNÓSTICO COMPLETO DE LA APLICACIÓN BISONTE');
console.log('='.repeat(60));

// 1. Verificar estructura de archivos críticos
console.log('\n📁 VERIFICANDO ARCHIVOS CRÍTICOS:');

const criticalFiles = [
  'frontend/src/app/api/auth/[...nextauth]/route.js',
  'frontend/src/context/AuthContext.js', 
  'frontend/src/hooks/useMobileSession.js',
  'frontend/src/app/layout.js',
  'frontend/src/app/Providers.js',
  'frontend/.env.local',
  'frontend/next.config.js',
  'frontend/package.json'
];

criticalFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  
  if (exists && file.endsWith('.js')) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar problemas comunes
    if (content.includes('console.log(') && file.includes('useMobileSession')) {
      console.log(`    ⚠️ Contiene console.log - puede causar problemas en producción`);
    }
    
    if (content.includes('window.') && !content.includes('typeof window')) {
      console.log(`    ⚠️ Uso de window sin verificación SSR`);
    }
    
    if (content.includes('localStorage') && !content.includes('typeof window')) {
      console.log(`    ⚠️ Uso de localStorage sin verificación SSR`);
    }
  }
});

// 2. Verificar variables de entorno
console.log('\n🔑 VERIFICANDO VARIABLES DE ENTORNO:');
const envPath = path.join(__dirname, 'frontend/.env.local');
if (fs.existsSync(envPath)) {
  console.log('  ✅ .env.local existe');
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  const hasNextAuthUrl = envContent.includes('NEXTAUTH_URL');
  const hasNextAuthSecret = envContent.includes('NEXTAUTH_SECRET');
  const hasApiUrl = envContent.includes('NEXT_PUBLIC_API_URL');
  
  console.log(`  ${hasNextAuthUrl ? '✅' : '❌'} NEXTAUTH_URL configurado`);
  console.log(`  ${hasNextAuthSecret ? '✅' : '❌'} NEXTAUTH_SECRET configurado`);
  console.log(`  ${hasApiUrl ? '✅' : '❌'} NEXT_PUBLIC_API_URL configurado`);
} else {
  console.log('  ❌ .env.local NO EXISTE');
}

// 3. Analizar páginas
console.log('\n📄 ANALIZANDO PÁGINAS:');
const pagesDir = path.join(__dirname, 'frontend/src/app');

function scanPages(dir, prefix = '') {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      if (fs.statSync(filePath).isDirectory() && !file.startsWith('_') && !file.startsWith('.') && file !== 'api') {
        const pageJsPath = path.join(filePath, 'page.js');
        const pageJsxPath = path.join(filePath, 'page.jsx');
        
        if (fs.existsSync(pageJsPath) || fs.existsSync(pageJsxPath)) {
          const pagePath = prefix ? `${prefix}/${file}` : `/${file}`;
          console.log(`  📄 ${pagePath}`);
          
          // Verificar si necesita autenticación
          const protectedPages = ['home', 'admin', 'cotizador', 'misenvios', 'perfilCard'];
          if (protectedPages.includes(file)) {
            const pageContent = fs.readFileSync(pageJsPath, 'utf8');
            if (!pageContent.includes('useAuth') && !pageContent.includes('useSession')) {
              console.log(`    ⚠️ Página protegida sin verificación de autenticación`);
            }
          }
        }
        
        // Recursivo
        scanPages(filePath, prefix ? `${prefix}/${file}` : file);
      }
    });
  } catch (error) {
    console.log(`    ❌ Error escaneando ${dir}: ${error.message}`);
  }
}

if (fs.existsSync(pagesDir)) {
  scanPages(pagesDir);
} else {
  console.log('  ❌ Directorio de páginas no encontrado');
}

// 4. Verificar APIs
console.log('\n🔌 VERIFICANDO APIs:');
const apiDir = path.join(__dirname, 'frontend/src/app/api');
if (fs.existsSync(apiDir)) {
  const authDir = path.join(apiDir, 'auth/[...nextauth]');
  if (fs.existsSync(authDir)) {
    console.log('  ✅ NextAuth API route configurado');
  } else {
    console.log('  ❌ NextAuth API route NO configurado');
  }
} else {
  console.log('  ❌ Directorio API no encontrado');
}

console.log('\n' + '='.repeat(60));
console.log('📊 DIAGNÓSTICO COMPLETADO');
console.log('='.repeat(60));
