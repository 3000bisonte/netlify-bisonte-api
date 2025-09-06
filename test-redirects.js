/**
 * 🎯 TEST ESPECÍFICO DE REDIRECCIONES
 * 
 * Verifica si las redirecciones 308 son normales o problemáticas
 */

const https = require('https');

async function testRedirects() {
    const tests = [
        'https://www.bisonteapp.com/login',
        'https://bisonteapp.com/login',
        'http://www.bisonteapp.com/login',
        'https://www.bisonteapp.com/api/auth/session'
    ];
    
    console.log('🔍 ANALIZANDO REDIRECCIONES');
    console.log('=' .repeat(50));
    
    for (const url of tests) {
        try {
            await new Promise((resolve, reject) => {
                const req = https.get(url, { timeout: 10000 }, (res) => {
                    console.log(`📡 ${url}`);
                    console.log(`   Status: ${res.statusCode}`);
                    console.log(`   Location: ${res.headers.location || 'N/A'}`);
                    console.log('');
                    resolve();
                });
                
                req.on('error', (error) => {
                    console.log(`❌ ${url}: ${error.message}`);
                    resolve();
                });
                
                req.on('timeout', () => {
                    req.destroy();
                    console.log(`⏰ ${url}: Timeout`);
                    resolve();
                });
            });
        } catch (error) {
            console.log(`💥 ${url}: ${error.message}`);
        }
    }
}

testRedirects();
