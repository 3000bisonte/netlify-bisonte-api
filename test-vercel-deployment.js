// Test para verificar que el deployment de Vercel funciona con APIs de Netlify
const https = require('https');

console.log('🔍 VERIFICANDO DEPLOYMENT DE VERCEL CON APIS DE NETLIFY\n');

const vercelUrl = 'https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app';
const netlifyApiUrl = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions';

// Test 1: Verificar que el sitio de Vercel responde
function testVercelSite() {
    return new Promise((resolve) => {
        console.log('📍 Testing Vercel deployment...');
        
        const req = https.get(vercelUrl, (res) => {
            const { statusCode, statusMessage } = res;
            console.log(`✅ Vercel Site: ${statusCode} ${statusMessage}`);
            resolve(statusCode === 200);
        });
        
        req.on('error', (error) => {
            console.log(`❌ Vercel Site: Error - ${error.message}`);
            resolve(false);
        });
        
        req.setTimeout(10000, () => {
            console.log(`⏰ Vercel Site: Timeout`);
            req.destroy();
            resolve(false);
        });
    });
}

// Test 2: Verificar que las APIs de Netlify responden
function testNetlifyApis() {
    return new Promise((resolve) => {
        console.log('\n📡 Testing Netlify APIs...');
        
        const testEndpoints = ['ping', 'status', 'auth-session'];
        let results = [];
        
        Promise.all(testEndpoints.map(endpoint => {
            return new Promise((resolveEndpoint) => {
                const url = `${netlifyApiUrl}/${endpoint}`;
                
                const req = https.get(url, (res) => {
                    const { statusCode, statusMessage } = res;
                    const success = statusCode === 200 || statusCode === 405;
                    console.log(`${success ? '✅' : '❌'} ${endpoint}: ${statusCode} ${statusMessage}`);
                    results.push(success);
                    resolveEndpoint();
                });
                
                req.on('error', (error) => {
                    console.log(`❌ ${endpoint}: Error - ${error.message}`);
                    results.push(false);
                    resolveEndpoint();
                });
                
                req.setTimeout(5000, () => {
                    console.log(`⏰ ${endpoint}: Timeout`);
                    req.destroy();
                    results.push(false);
                    resolveEndpoint();
                });
            });
        })).then(() => {
            const allWorking = results.every(r => r === true);
            resolve(allWorking);
        });
    });
}

// Test 3: Verificar configuración de config API desde Vercel
function testVercelConfig() {
    return new Promise((resolve) => {
        console.log('\n⚙️ Testing Vercel config endpoint...');
        
        const configUrl = `${vercelUrl}/api/public/config`;
        
        const req = https.get(configUrl, (res) => {
            const { statusCode, statusMessage } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (statusCode === 200) {
                    try {
                        const config = JSON.parse(data);
                        const hasNetlifyUrl = data.includes('nimble-vacherin-7a32d0.netlify.app');
                        
                        console.log(`✅ Config endpoint: ${statusCode} ${statusMessage}`);
                        console.log(`${hasNetlifyUrl ? '✅' : '❌'} Contains Netlify URLs: ${hasNetlifyUrl}`);
                        
                        resolve(hasNetlifyUrl);
                    } catch (error) {
                        console.log(`❌ Config endpoint: JSON parse error`);
                        resolve(false);
                    }
                } else {
                    console.log(`❌ Config endpoint: ${statusCode} ${statusMessage}`);
                    resolve(false);
                }
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ Config endpoint: Error - ${error.message}`);
            resolve(false);
        });
        
        req.setTimeout(10000, () => {
            console.log(`⏰ Config endpoint: Timeout`);
            req.destroy();
            resolve(false);
        });
    });
}

// Ejecutar todos los tests
async function runDeploymentTest() {
    console.log('🚀 INICIANDO TESTS DE DEPLOYMENT...\n');
    
    const vercelWorking = await testVercelSite();
    const netlifyWorking = await testNetlifyApis();
    const configWorking = await testVercelConfig();
    
    console.log('\n📊 RESULTADOS FINALES:');
    console.log('='.repeat(50));
    console.log(`${vercelWorking ? '✅' : '❌'} Vercel Deployment: ${vercelWorking ? 'WORKING' : 'FAILED'}`);
    console.log(`${netlifyWorking ? '✅' : '❌'} Netlify APIs: ${netlifyWorking ? 'WORKING' : 'FAILED'}`);
    console.log(`${configWorking ? '✅' : '❌'} Config Integration: ${configWorking ? 'WORKING' : 'FAILED'}`);
    
    const allWorking = vercelWorking && netlifyWorking && configWorking;
    
    console.log('\n' + '='.repeat(50));
    if (allWorking) {
        console.log('🎉 DEPLOYMENT STATUS: ✅ FULLY FUNCTIONAL');
        console.log('📍 Vercel site is working with Netlify APIs');
        console.log('🔗 App URL: ' + vercelUrl);
        console.log('🔗 API URL: ' + netlifyApiUrl);
    } else {
        console.log('⚠️  DEPLOYMENT STATUS: ❌ NEEDS ATTENTION');
        console.log('🔧 Some components need fixing');
    }
    console.log('='.repeat(50));
}

runDeploymentTest();
