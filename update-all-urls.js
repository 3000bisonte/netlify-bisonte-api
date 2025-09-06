const fs = require('fs');
const path = require('path');

// Configuración de reemplazos
const replacements = [
  {
    from: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions',
    to: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions'
  },
  {
    from: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions',
    to: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions'
  },
  {
    from: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions',
    to: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions'
  },
  {
    from: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions',
    to: 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions'
  }
];

// Archivos a excluir (no modificar)
const excludeFiles = [
  'node_modules',
  '.git',
  '.next',
  'out',
  'dist',
  'build',
  'android',
  'ios',
  'netlify-bisonte-api',
  'REVISION-COMPLETA.md',
  'INTEGRACION-NETLIFY.md'
];

// Extensiones de archivo a procesar
const includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt', '.env', '.sh', '.bat'];

function shouldProcessFile(filePath) {
  // Excluir archivos/carpetas específicos
  for (const exclude of excludeFiles) {
    if (filePath.includes(exclude)) {
      return false;
    }
  }
  
  // Solo procesar extensiones permitidas
  const ext = path.extname(filePath);
  return includeExtensions.includes(ext) || path.basename(filePath).startsWith('.env');
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const replacement of replacements) {
      const originalContent = content;
      content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
      if (content !== originalContent) {
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Actualizado: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error procesando ${filePath}: ${error.message}`);
  }
  
  return false;
}

function processDirectory(dirPath) {
  let totalUpdated = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (shouldProcessFile(fullPath)) {
          totalUpdated += processDirectory(fullPath);
        }
      } else if (stat.isFile() && shouldProcessFile(fullPath)) {
        if (processFile(fullPath)) {
          totalUpdated++;
        }
      }
    }
  } catch (error) {
    console.log(`❌ Error procesando directorio ${dirPath}: ${error.message}`);
  }
  
  return totalUpdated;
}

console.log('🔄 Actualizando URLs de Vercel a Netlify en todo el proyecto...\n');

const startTime = Date.now();
const totalUpdated = processDirectory(process.cwd());
const endTime = Date.now();

console.log(`\n✅ Actualización completada!`);
console.log(`📊 Archivos modificados: ${totalUpdated}`);
console.log(`⏱️  Tiempo transcurrido: ${endTime - startTime}ms`);
console.log(`\n🔗 Nueva URL base: https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions`);
