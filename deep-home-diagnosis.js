// Diagnóstico específico del estado del deployment
const https = require('https');

console.log('🔍 DEPLOYMENT DIAGNOSTIC\n');

const appUrl = 'https://bisonte-modificado-git-main-eduardos-projects-9d27e028.vercel.app';

function analyzeDeploymentStatus() {
    return new Promise((resolve) => {
        console.log('🎯 Analyzing current deployment status...');
        
        const req = https.get(appUrl, (res) => {
            const { statusCode, headers } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`✅ Status: ${statusCode}`);
                console.log(`📅 Last-Modified: ${headers['last-modified'] || 'Unknown'}`);
                console.log(`🔄 ETag: ${headers.etag || 'Unknown'}`);
                
                // Buscar indicadores específicos
                const hasNetlifyUrls = data.includes('nimble-vacherin-7a32d0.netlify.app');
                const hasOldUrls = data.includes('bisonte-api.vercel.app');
                const hasNextJs = data.includes('_next');
                const hasReactDom = data.includes('react-dom');
                
                console.log('\n📊 CODE ANALYSIS:');
                console.log(`${hasNetlifyUrls ? '✅' : '❌'} Contains Netlify URLs: ${hasNetlifyUrls}`);
                console.log(`${!hasOldUrls ? '✅' : '❌'} No old Vercel URLs: ${!hasOldUrls}`);
                console.log(`${hasNextJs ? '✅' : '❌'} Has Next.js assets: ${hasNextJs}`);
                console.log(`${hasReactDom ? '✅' : '❌'} Has React components: ${hasReactDom}`);
                
                // Buscar específicamente las configuraciones de API
                const apiConfigPattern = /api\.vercel\.app|netlify\.app/gi;
                const matches = data.match(apiConfigPattern) || [];
                
                console.log('\n🔗 API URL ANALYSIS:');
                if (matches.length > 0) {
                    console.log('Found API references:');
                    matches.forEach((match, i) => {
                        console.log(`  ${i + 1}. ${match}`);
                    });
                } else {
                    console.log('❌ No API URLs found in page source');
                }
                
                // Determinar el estado
                if (hasNetlifyUrls && !hasOldUrls) {
                    console.log('\n🎉 RESULT: Code is UPDATED with Netlify URLs');
                    resolve('UPDATED');
                } else if (hasOldUrls && !hasNetlifyUrls) {
                    console.log('\n⚠️  RESULT: Code still has OLD Vercel URLs');
                    resolve('OLD');
                } else if (!hasOldUrls && !hasNetlifyUrls) {
                    console.log('\n🔍 RESULT: No API URLs detected (may be in JS bundles)');
                    resolve('UNCLEAR');
                } else {
                    console.log('\n🔄 RESULT: Mixed URLs detected');
                    resolve('MIXED');
                }
            });
        });
        
        req.on('error', (error) => {
            console.log(`❌ Connection error: ${error.message}`);
            resolve('ERROR');
        });
        
        req.setTimeout(15000, () => {
            console.log(`⏰ Request timeout`);
            req.destroy();
            resolve('TIMEOUT');
        });
    });
}

// Verificar también el endpoint de configuración
function testConfigEndpoint() {
    return new Promise((resolve) => {
        console.log('\n⚙️ Testing config endpoint...');
        
        const configUrl = `${appUrl}/api/public/config`;
        
        const req = https.get(configUrl, (res) => {
            const { statusCode } = res;
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`Status: ${statusCode}`);
                
                if (statusCode === 200) {
                    try {
                        const config = JSON.parse(data);
                        console.log('Config data:', config);
                        
                        const hasNetlifyApiUrl = config.apiBaseUrl && config.apiBaseUrl.includes('netlify');
                        console.log(`${hasNetlifyApiUrl ? '✅' : '❌'} Config has Netlify API URL: ${hasNetlifyApiUrl}`);
                        
                        resolve(hasNetlifyApiUrl);
                    } catch (error) {
                        console.log('❌ Invalid JSON response');
                        resolve(false);
                    }
                } else {
                    console.log(`❌ Config endpoint returned ${statusCode}`);
                    resolve(false);
                }
            });
        });
        
        req.on('error', () => {
            console.log('❌ Config endpoint error');
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

async function runDiagnostic() {
    const deploymentStatus = await analyzeDeploymentStatus();
    const configWorking = await testConfigEndpoint();
    
    console.log('\n🏆 DIAGNOSTIC SUMMARY:');
    console.log('='.repeat(50));
    console.log(`Deployment Status: ${deploymentStatus}`);
    console.log(`Config Endpoint: ${configWorking ? 'UPDATED' : 'OLD/BROKEN'}`);
    
    if (deploymentStatus === 'UPDATED' && configWorking) {
        console.log('\n🎉 GOOD NEWS: Everything is updated!');
    } else if (deploymentStatus === 'OLD' || !configWorking) {
        console.log('\n⚠️  ISSUE: Deployment has not fully activated new code');
        console.log('💡 SOLUTION: May need another redeploy or cache clear');
    } else {
        console.log('\n🔍 UNCLEAR: May need manual verification');
    }
    console.log('='.repeat(50));
}

runDiagnostic();
