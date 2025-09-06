// Test específico para la URL original del deployment
const https = require('https');

console.log('🔍 TESTING ORIGINAL DEPLOYMENT URL\n');

// URL original que mencionaste
const originalUrl = 'https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app';

function testOriginalUrl() {
    return new Promise((resolve) => {
        console.log('🎯 Testing original deployment URL...');
        console.log('URL:', originalUrl);
        
        const req = https.get(originalUrl, (res) => {
            const { statusCode, statusMessage } = res;
            console.log(`${statusCode === 200 ? '✅' : '❌'} Original URL: ${statusCode} ${statusMessage}`);
            
            // Leer el contenido para verificar que es la nueva versión
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                // Verificar si contiene las URLs de Netlify (indicaría que es la nueva versión)
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                console.log(`${hasNetlifyUrls ? '✅' : '❌'} Contains new Netlify URLs: ${hasNetlifyUrls}`);
                
                if (statusCode === 200 && hasNetlifyUrls) {
                    console.log('\n🎉 SUCCESS: Original URL is serving updated code!');
                    console.log('✅ CORS errors should be resolved');
                    console.log('✅ APIs point to Netlify Functions');
                } else if (statusCode === 200 && !hasNetlifyUrls) {
                    console.log('\n⚠️  WARNING: Original URL is still serving old code');
                    console.log('❌ May still have CORS errors');
                    console.log('🔄 Try triggering a redeploy');
                } else {
                    console.log('\n❌ ERROR: Original URL is not accessible');
                }
                
                resolve({ working: statusCode === 200, updated: hasNetlifyUrls });
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ Original URL: Error - ${error.message}`);
            resolve({ working: false, updated: false });
        });
        
        req.setTimeout(15000, () => {
            console.log(`⏰ Original URL: Timeout`);
            req.destroy();
            resolve({ working: false, updated: false });
        });
    });
}

// Test Netlify APIs también
function testNetlifyQuick() {
    return new Promise((resolve) => {
        console.log('\n📡 Quick Netlify API test...');
        
        const url = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/ping';
        
        const req = https.get(url, (res) => {
            const { statusCode } = res;
            console.log(`${statusCode === 200 ? '✅' : '❌'} Netlify ping: ${statusCode}`);
            resolve(statusCode === 200);
        });
        
        req.on('error', () => {
            console.log(`❌ Netlify ping: Error`);
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

async function runUrlTest() {
    const urlResult = await testOriginalUrl();
    const netlifyWorking = await testNetlifyQuick();
    
    console.log('\n📊 MIGRATION STATUS SUMMARY:');
    console.log('='.repeat(60));
    console.log(`Frontend (Original URL): ${urlResult.working ? '✅ Working' : '❌ Failed'}`);
    console.log(`Frontend (Updated Code): ${urlResult.updated ? '✅ New URLs' : '❌ Old URLs'}`);
    console.log(`Backend (Netlify APIs): ${netlifyWorking ? '✅ Working' : '❌ Failed'}`);
    
    if (urlResult.working && urlResult.updated && netlifyWorking) {
        console.log('\n🎉 COMPLETE SUCCESS! Migration is fully functional!');
    } else if (urlResult.working && netlifyWorking) {
        console.log('\n⚠️  PARTIAL SUCCESS: May need redeploy to get latest code');
    } else {
        console.log('\n❌ ISSUES DETECTED: Check deployment status');
    }
    console.log('='.repeat(60));
}

runUrlTest();
