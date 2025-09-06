const https = require('https');

console.log('🔍 DIAGNÓSTICO DETALLADO DEL SITIO');
console.log('====================================');

function testUrl(url, description) {
    return new Promise((resolve) => {
        const req = https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                console.log(`\n📋 ${description}`);
                console.log(`URL: ${url}`);
                console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
                console.log(`Content-Type: ${res.headers['content-type']}`);
                
                if (res.statusCode >= 400) {
                    console.log(`❌ ERROR DETECTADO`);
                    console.log(`Response Body (first 500 chars):`);
                    console.log(data.substring(0, 500));
                } else {
                    console.log(`✅ Status OK`);
                    if (data.includes('Application error')) {
                        console.log('🚨 ALERTA: "Application error" encontrado en el HTML');
                    }
                    if (data.includes('window.__NEXT_DATA__')) {
                        console.log('✅ Next.js hidratado correctamente');
                    }
                    if (data.includes('Internal Server Error')) {
                        console.log('🚨 ALERTA: Internal Server Error detectado');
                    }
                }
                resolve();
            });
        });
        
        req.on('error', (error) => {
            console.log(`\n📋 ${description}`);
            console.log(`URL: ${url}`);
            console.log(`❌ REQUEST ERROR: ${error.message}`);
            resolve();
        });
        
        req.setTimeout(10000, () => {
            console.log(`\n📋 ${description}`);
            console.log(`URL: ${url}`);
            console.log(`⏱️ TIMEOUT: Request timed out`);
            req.destroy();
            resolve();
        });
    });
}

async function runDiagnostics() {
    await testUrl('https://www.bisonteapp.com', 'Home Page (HTML Content)');
    await testUrl('https://www.bisonteapp.com/api/auth/session', 'NextAuth Session API');
    await testUrl('https://www.bisonteapp.com/_next/static/chunks/main.js', 'Next.js Main Bundle');
    
    console.log('\n🏁 DIAGNÓSTICO COMPLETO');
    console.log('========================');
}
