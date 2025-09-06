// Test específico para la URL de producción real
const https = require('https');

console.log('🔍 TESTING PRODUCTION URL: www.bisonteapp.com\n');

const productionUrl = 'https://www.bisonteapp.com';
const netlifyApiUrl = 'https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions';

function testProductionSite() {
    return new Promise((resolve) => {
        console.log('🌐 Testing production site...');
        console.log(`URL: ${productionUrl}`);
        
        const req = https.get(productionUrl, (res) => {
            const { statusCode, headers } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`✅ Status: ${statusCode}`);
                console.log(`📅 Last-Modified: ${headers['last-modified'] || 'Unknown'}`);
                
                // Analizar el contenido
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                const hasOldUrls = data.includes('bisonte-api.vercel.app');
                const hasTitle = data.includes('Bisonte') || data.includes('bisonte');
                
                console.log('\n📊 PRODUCTION ANALYSIS:');
                console.log(`${statusCode === 200 ? '✅' : '❌'} Site accessible: ${statusCode === 200}`);
                console.log(`${hasNetlifyUrls ? '✅' : '❌'} Has new Netlify URLs: ${hasNetlifyUrls}`);
                console.log(`${!hasOldUrls ? '✅' : '❌'} No old Vercel URLs: ${!hasOldUrls}`);
                console.log(`${hasTitle ? '✅' : '❌'} Bisonte app detected: ${hasTitle}`);
                
                // Buscar patrones específicos de API
                const apiUrls = data.match(/https:\/\/[^"'\s]+\.(?:vercel|netlify)\.app[^"'\s]*/gi) || [];
                if (apiUrls.length > 0) {
                    console.log('\n🔗 Found API URLs:');
                    apiUrls.forEach(url => console.log(`  - ${url}`));
                }
                
                resolve({
                    working: statusCode === 200,
                    updated: hasNetlifyUrls && !hasOldUrls,
                    hasOldUrls: hasOldUrls,
                    apiUrls: apiUrls
                });
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ Error: ${error.message}`);
            resolve({ working: false, updated: false, hasOldUrls: false, apiUrls: [] });
        });
        
        req.setTimeout(15000, () => {
            console.log(`⏰ Timeout`);
            req.destroy();
            resolve({ working: false, updated: false, hasOldUrls: false, apiUrls: [] });
        });
    });
}

function testProductionLogin() {
    return new Promise((resolve) => {
        console.log('\n🔐 Testing production login functionality...');
        
        // Test si el endpoint de login está accesible
        const loginUrl = `${productionUrl}/login`;
        
        const req = https.get(loginUrl, (res) => {
            const { statusCode } = res;
            console.log(`${statusCode === 200 ? '✅' : '❌'} Login page: ${statusCode}`);
            resolve(statusCode === 200);
        });
        
        req.on('error', () => {
            console.log(`❌ Login page: Error`);
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

function testCorsWithProduction() {
    return new Promise((resolve) => {
        console.log('\n🌐 Testing CORS with production domain...');
        
        // Simular lo que haría el frontend
        const url = `${netlifyApiUrl}/ping`;
        
        const req = https.get(url, (res) => {
            const { statusCode, headers } = res;
            
            // Verificar headers CORS
            const corsHeaders = {
                'access-control-allow-origin': headers['access-control-allow-origin'],
                'access-control-allow-methods': headers['access-control-allow-methods'],
                'access-control-allow-headers': headers['access-control-allow-headers']
            };
            
            console.log(`✅ API Status: ${statusCode}`);
            console.log(`CORS Headers:`, corsHeaders);
            
            const hasCors = corsHeaders['access-control-allow-origin'] !== undefined;
            const allowsOrigin = corsHeaders['access-control-allow-origin'] === '*' || 
                                 corsHeaders['access-control-allow-origin']?.includes('bisonteapp.com');
            
            console.log(`${hasCors ? '✅' : '❌'} Has CORS headers: ${hasCors}`);
            console.log(`${allowsOrigin ? '✅' : '❌'} Allows bisonteapp.com: ${allowsOrigin}`);
            
            resolve(statusCode === 200 && hasCors);
        });
        
        req.on('error', () => {
            console.log(`❌ CORS test failed`);
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

async function runProductionTest() {
    console.log('🎯 PRODUCTION DEPLOYMENT TEST\n');
    
    const siteResult = await testProductionSite();
    const loginWorking = await testProductionLogin();
    const corsWorking = await testCorsWithProduction();
    
    console.log('\n🏆 PRODUCTION RESULTS:');
    console.log('='.repeat(60));
    console.log(`Production Site: ${siteResult.working ? '✅ Working' : '❌ Down'}`);
    console.log(`URLs Updated: ${siteResult.updated ? '✅ Netlify URLs' : '❌ Old URLs'}`);
    console.log(`Login Page: ${loginWorking ? '✅ Accessible' : '❌ Failed'}`);
    console.log(`CORS Setup: ${corsWorking ? '✅ Working' : '❌ Blocked'}`);
    
    if (siteResult.hasOldUrls) {
        console.log('\n⚠️  CRITICAL: Production still has OLD Vercel URLs!');
        console.log('🚨 This means CORS errors will persist');
        console.log('💡 Need to update production deployment');
    }
    
    if (siteResult.apiUrls.length > 0) {
        console.log('\n🔗 API URLs found in production:');
        siteResult.apiUrls.forEach(url => {
            const isOld = url.includes('vercel.app');
            console.log(`${isOld ? '❌' : '✅'} ${url}`);
        });
    }
    
    const allGood = siteResult.working && siteResult.updated && loginWorking && corsWorking;
    
    console.log('\n' + '='.repeat(60));
    if (allGood) {
        console.log('🎉 PRODUCTION STATUS: ✅ FULLY FUNCTIONAL');
        console.log('🚀 www.bisonteapp.com is ready with Netlify APIs!');
    } else {
        console.log('⚠️  PRODUCTION STATUS: ❌ NEEDS UPDATE');
        console.log('🔧 Production deployment needs to be updated with new URLs');
    }
    console.log('='.repeat(60));
}

runProductionTest();
