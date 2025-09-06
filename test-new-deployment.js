// Test del nuevo deployment generado
const https = require('https');

console.log('🔍 TESTING NEW DEPLOYMENT\n');

const newUrl = 'https://bisontemodificado-cax0o0gd0-eduardos-projects-9d27e028.vercel.app';

function testNewDeployment() {
    return new Promise((resolve) => {
        console.log('🚀 Testing new deployment...');
        console.log(`URL: ${newUrl}`);
        
        const req = https.get(newUrl, (res) => {
            const { statusCode } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                const hasOldUrls = data.includes('bisonte-api.vercel.app');
                
                console.log(`✅ Status: ${statusCode}`);
                console.log(`${hasNetlifyUrls ? '✅' : '❌'} Has Netlify URLs: ${hasNetlifyUrls}`);
                console.log(`${!hasOldUrls ? '✅' : '❌'} No old URLs: ${!hasOldUrls}`);
                
                if (statusCode === 200 && hasNetlifyUrls && !hasOldUrls) {
                    console.log('\n🎉 SUCCESS: New deployment has correct URLs!');
                    console.log('✅ This deployment should work without CORS errors');
                    console.log('🔧 Need to point www.bisonteapp.com to this deployment');
                } else {
                    console.log('\n⚠️  ISSUE: Still needs configuration');
                }
                
                resolve({ working: statusCode === 200, updated: hasNetlifyUrls && !hasOldUrls });
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ Error: ${error.message}`);
            resolve({ working: false, updated: false });
        });
        
        req.setTimeout(10000, () => {
            console.log(`⏰ Timeout`);
            req.destroy();
            resolve({ working: false, updated: false });
        });
    });
}

async function runNewDeploymentTest() {
    const result = await testNewDeployment();
    
    console.log('\n📊 DEPLOYMENT STATUS:');
    console.log('='.repeat(50));
    
    if (result.working && result.updated) {
        console.log('🎉 NEW DEPLOYMENT: ✅ PERFECT!');
        console.log('');
        console.log('📋 NEXT STEPS:');
        console.log('1. Configure www.bisonteapp.com to point to this deployment');
        console.log('2. Or update domain settings in Vercel dashboard');
        console.log('3. Test www.bisonteapp.com after change');
        console.log('');
        console.log('🔗 Working URL with correct APIs:');
        console.log(newUrl);
    } else {
        console.log('❌ NEW DEPLOYMENT: Still has issues');
    }
    
    console.log('='.repeat(50));
}

runNewDeploymentTest();
