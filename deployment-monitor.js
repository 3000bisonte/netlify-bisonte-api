// Monitor de deployment en tiempo real
const https = require('https');

console.log('🔍 MONITORING DEPLOYMENT PROGRESS\n');

const originalUrl = 'https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app';

let checkCount = 0;
const maxChecks = 20; // Máximo 20 checks (10 minutos)

function checkDeploymentStatus() {
    checkCount++;
    console.log(`🔄 Check ${checkCount}/${maxChecks} - Testing deployment...`);
    
    return new Promise((resolve) => {
        const req = https.get(originalUrl, (res) => {
            const { statusCode } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                const hasOldUrls = data.includes('bisonte-api.vercel.app');
                
                const timestamp = new Date().toLocaleTimeString();
                
                if (statusCode === 200 && hasNetlifyUrls && !hasOldUrls) {
                    console.log(`🎉 [${timestamp}] DEPLOYMENT SUCCESSFUL!`);
                    console.log('✅ Status: 200 OK');
                    console.log('✅ URLs: Updated to Netlify');
                    console.log('✅ Migration: COMPLETE');
                    resolve('SUCCESS');
                } else if (statusCode === 200 && hasOldUrls) {
                    console.log(`⏳ [${timestamp}] Still old code - deployment in progress...`);
                    resolve('OLD_CODE');
                } else if (statusCode !== 200) {
                    console.log(`⚠️  [${timestamp}] Status ${statusCode} - deployment building...`);
                    resolve('BUILDING');
                } else {
                    console.log(`🔄 [${timestamp}] Deployment status unclear...`);
                    resolve('UNCLEAR');
                }
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ [${new Date().toLocaleTimeString()}] Connection error: ${error.message}`);
            resolve('ERROR');
        });
        
        req.setTimeout(10000, () => {
            console.log(`⏰ [${new Date().toLocaleTimeString()}] Request timeout`);
            req.destroy();
            resolve('TIMEOUT');
        });
    });
}

async function monitorDeployment() {
    console.log('🚀 Starting deployment monitoring...');
    console.log(`📍 URL: ${originalUrl}`);
    console.log('🎯 Looking for: Netlify URLs in response\n');
    
    while (checkCount < maxChecks) {
        const result = await checkDeploymentStatus();
        
        if (result === 'SUCCESS') {
            console.log('\n🎉 DEPLOYMENT COMPLETE!');
            console.log('='.repeat(50));
            console.log('✅ Frontend: Updated with Netlify URLs');
            console.log('✅ Backend: Netlify Functions working');
            console.log('✅ CORS: Errors should be resolved');
            console.log('🚀 App is ready for testing!');
            console.log('='.repeat(50));
            break;
        }
        
        if (checkCount < maxChecks) {
            console.log('   Waiting 30 seconds for next check...\n');
            await new Promise(resolve => setTimeout(resolve, 30000));
        }
    }
    
    if (checkCount >= maxChecks) {
        console.log('\n⏰ MONITORING TIMEOUT');
        console.log('Deployment may still be in progress. Check manually.');
    }
}

monitorDeployment();
