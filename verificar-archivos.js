const fs = require('fs');
const path = require('path');

console.log('🔍 VERIFICACIÓN DE ARCHIVOS CRÍTICOS');
console.log('====================================');

const criticalFiles = [
  'frontend/src/app/layout.js',
  'frontend/src/app/Providers.js', 
  'frontend/src/context/AuthContext.js',
  'frontend/src/hooks/useMobileSession.js',
  'frontend/src/app/page.js'
];

criticalFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  console.log(`\n📁 Verificando: ${file}`);
  
  if (fs.existsSync(fullPath)) {
    console.log('✅ Archivo existe');
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Verificar problemas comunes
    if (content.includes('undefined')) {
      console.log('⚠️ Contiene "undefined" - posible problema');
    }
    if (content.includes('null')) {
      console.log('⚠️ Contiene "null" - revisar manejo');  
    }
    if (content.includes('console.log')) {
      console.log('🔍 Contiene console.log - puede afectar performance');
    }
    if (content.includes('useContext') && !content.includes('createContext')) {
      console.log('🎯 Usa useContext - verificar Provider');
    }
  } else {
    console.log('❌ Archivo NO EXISTE');
  }
});

console.log('\n🏁 VERIFICACIÓN COMPLETA');
