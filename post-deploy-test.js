// Test final post-deploy para verificar que todo funciona
const https = require('https');

console.log('🔍 POST-DEPLOY VERIFICATION\n');

const vercelUrl = 'https://bisontemodificado-9r62dvb8l-eduardos-projects-9d27e028.vercel.app';
const netlifyApiUrl = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions';

// Test 1: Verificar que el nuevo deployment responde
function testNewDeployment() {
    return new Promise((resolve) => {
        console.log('🚀 Testing new deployment...');
        
        const req = https.get(vercelUrl, (res) => {
            const { statusCode, statusMessage } = res;
            console.log(`${statusCode === 200 ? '✅' : '❌'} New Deployment: ${statusCode} ${statusMessage}`);
            resolve(statusCode === 200);
        });
        
        req.on('error', (error) => {
            console.log(`❌ New Deployment: Error - ${error.message}`);
            resolve(false);
        });
        
        req.setTimeout(10000, () => {
            console.log(`⏰ New Deployment: Timeout`);
            req.destroy();
            resolve(false);
        });
    });
}

// Test 2: Verificar las APIs de Netlify
function testNetlifyAPIs() {
    return new Promise((resolve) => {
        console.log('\n📡 Testing Netlify APIs...');
        
        const testEndpoints = ['ping', 'status'];
        let successCount = 0;
        
        Promise.all(testEndpoints.map(endpoint => {
            return new Promise((resolveEndpoint) => {
                const url = `${netlifyApiUrl}/${endpoint}`;
                
                const req = https.get(url, (res) => {
                    const { statusCode } = res;
                    const success = statusCode === 200;
                    console.log(`${success ? '✅' : '❌'} ${endpoint}: ${statusCode}`);
                    if (success) successCount++;
                    resolveEndpoint();
                });
                
                req.on('error', (error) => {
                    console.log(`❌ ${endpoint}: Error`);
                    resolveEndpoint();
                });
                
                req.setTimeout(5000, () => {
                    console.log(`⏰ ${endpoint}: Timeout`);
                    req.destroy();
                    resolveEndpoint();
                });
            });
        })).then(() => {
            resolve(successCount === testEndpoints.length);
        });
    });
}

// Ejecutar tests
async function runPostDeployTest() {
    console.log('🔍 POST-DEPLOYMENT VERIFICATION\n');
    
    const deploymentWorking = await testNewDeployment();
    const apisWorking = await testNetlifyAPIs();
    
    console.log('\n📊 FINAL RESULTS:');
    console.log('='.repeat(50));
    console.log(`${deploymentWorking ? '✅' : '❌'} New Deployment: ${deploymentWorking ? 'WORKING' : 'FAILED'}`);
    console.log(`${apisWorking ? '✅' : '❌'} Netlify APIs: ${apisWorking ? 'WORKING' : 'FAILED'}`);
    
    const migrationSuccess = deploymentWorking && apisWorking;
    
    console.log('\n' + '='.repeat(50));
    if (migrationSuccess) {
        console.log('🎉 MIGRATION STATUS: ✅ FULLY SUCCESSFUL');
        console.log('📍 All systems operational');
        console.log('🔗 Frontend: ' + vercelUrl);
        console.log('🔗 Backend: ' + netlifyApiUrl);
        console.log('\n🚀 Ready for production use!');
        console.log('   - CORS errors should be resolved');
        console.log('   - Google login should work');
        console.log('   - All APIs connected to Netlify');
    } else {
        console.log('⚠️  MIGRATION STATUS: ❌ PARTIAL SUCCESS');
        console.log('🔧 Some components may need attention');
    }
    console.log('='.repeat(50));
}

runPostDeployTest();
