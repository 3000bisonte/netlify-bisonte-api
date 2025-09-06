// Script para LIMPIAR COMPLETAMENTE todas las URLs viejas de Vercel
const fs = require('fs');
const path = require('path');

const OLD_URL = 'https://bisonte-api.vercel.app';
const NEW_URL = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions';

console.log('🧹 LIMPIANDO URLs VIEJAS DE VERCEL...\n');

// Archivos que necesitan ser actualizados
const filesToUpdate = [
    'scripts/fix-webview-auth.js',
    'scripts/probe-api.js', 
    'scripts/check-endpoints.js',
    'scripts/pre-apk-check.js'
];

let totalUpdated = 0;

filesToUpdate.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        
        // Reemplazar todas las ocurrencias
        content = content.replace(new RegExp(OLD_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), NEW_URL);
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Updated: ${filePath}`);
            totalUpdated++;
        } else {
            console.log(`⚪ No changes: ${filePath}`);
        }
    } else {
        console.log(`❌ Not found: ${filePath}`);
    }
});

console.log(`\n📊 Total files updated: ${totalUpdated}`);
console.log('✅ URL cleanup completed!');
console.log(`🔗 Old URL: ${OLD_URL}`);
console.log(`🔗 New URL: ${NEW_URL}`);
