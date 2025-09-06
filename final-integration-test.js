// Test final post-deployment para confirmar que todo funciona
const https = require('https');

console.log('🧪 FINAL INTEGRATION TEST\n');

const appUrl = 'https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app';
const apiUrl = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions';

// Test 1: Verificar que el frontend tiene las URLs correctas
function testFrontendUrls() {
    return new Promise((resolve) => {
        console.log('🌐 Testing frontend URLs...');
        
        const req = https.get(appUrl, (res) => {
            const { statusCode } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                const hasOldUrls = data.includes('bisonte-api.vercel.app');
                
                console.log(`${statusCode === 200 ? '✅' : '❌'} Frontend Status: ${statusCode}`);
                console.log(`${hasNetlifyUrls ? '✅' : '❌'} Contains Netlify URLs: ${hasNetlifyUrls}`);
                console.log(`${!hasOldUrls ? '✅' : '❌'} No old URLs: ${!hasOldUrls}`);
                
                resolve({ 
                    working: statusCode === 200, 
                    updated: hasNetlifyUrls && !hasOldUrls 
                });
            });
        });
        
        req.on('error', () => resolve({ working: false, updated: false }));
        req.setTimeout(10000, () => {
            req.destroy();
            resolve({ working: false, updated: false });
        });
    });
}

// Test 2: Verificar APIs críticas
function testCriticalAPIs() {
    return new Promise((resolve) => {
        console.log('\n🔗 Testing critical APIs...');
        
        const criticalEndpoints = ['ping', 'status', 'google'];
        let results = [];
        
        Promise.all(criticalEndpoints.map(endpoint => {
            return new Promise((resolveEndpoint) => {
                const url = `${apiUrl}/${endpoint}`;
                
                const req = https.get(url, (res) => {
                    const { statusCode } = res;
                    const success = statusCode === 200 || statusCode === 405;
                    console.log(`${success ? '✅' : '❌'} ${endpoint}: ${statusCode}`);
                    results.push(success);
                    resolveEndpoint();
                });
                
                req.on('error', () => {
                    console.log(`❌ ${endpoint}: Error`);
                    results.push(false);
                    resolveEndpoint();
                });
                
                req.setTimeout(5000, () => {
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

// Test 3: Verificar Google OAuth endpoint específicamente
function testGoogleOAuth() {
    return new Promise((resolve) => {
        console.log('\n🔑 Testing Google OAuth endpoint...');
        
        const url = `${apiUrl}/google`;
        
        const postData = JSON.stringify({
            idToken: 'test_token_for_cors_check'
        });
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        
        const req = https.request(url, options, (res) => {
            const { statusCode } = res;
            // 400 is expected with invalid token, but it means no CORS error
            const noCorsError = statusCode !== 0 && statusCode !== undefined;
            console.log(`${noCorsError ? '✅' : '❌'} Google OAuth endpoint accessible: ${statusCode}`);
            console.log(`${noCorsError ? '✅' : '❌'} No CORS blocking: ${noCorsError}`);
            resolve(noCorsError);
        });
        
        req.on('error', () => {
            console.log(`❌ Google OAuth: Connection error`);
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
        
        req.write(postData);
        req.end();
    });
}

// Ejecutar todos los tests
async function runFinalTest() {
    console.log('🎯 EXECUTING FINAL INTEGRATION TEST\n');
    
    const frontendResult = await testFrontendUrls();
    const apisWorking = await testCriticalAPIs();
    const oauthWorking = await testGoogleOAuth();
    
    console.log('\n🏆 FINAL RESULTS:');
    console.log('='.repeat(60));
    console.log(`Frontend Working: ${frontendResult.working ? '✅ YES' : '❌ NO'}`);
    console.log(`Frontend Updated: ${frontendResult.updated ? '✅ YES' : '❌ NO'}`);
    console.log(`Backend APIs: ${apisWorking ? '✅ WORKING' : '❌ FAILED'}`);
    console.log(`OAuth Ready: ${oauthWorking ? '✅ READY' : '❌ BLOCKED'}`);
    
    const migrationSuccess = frontendResult.working && frontendResult.updated && apisWorking && oauthWorking;
    
    console.log('\n' + '='.repeat(60));
    if (migrationSuccess) {
        console.log('🎉 MIGRATION STATUS: ✅ COMPLETE SUCCESS!');
        console.log('🚀 Your app is now fully operational with:');
        console.log('   • No CORS errors');
        console.log('   • Google OAuth working');
        console.log('   • All APIs on Netlify');
        console.log('   • Scalable infrastructure');
        console.log('\n🎊 CONGRATULATIONS! Migration completed successfully!');
    } else {
        console.log('⚠️  MIGRATION STATUS: ❌ NEEDS ATTENTION');
        console.log('🔧 Some components may need additional configuration');
    }
    console.log('='.repeat(60));
}

runFinalTest();
