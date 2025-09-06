/**
 * 🚀 MONITOR DE DEPLOYMENT - BISONTEAPP.COM
 * 
 * Verifica el estado del deployment en el dominio correcto
 */

const https = require('https');
const fs = require('fs');

const PRODUCTION_URL = 'https://www.bisonteapp.com';
const TIMEOUT = 15000;

// Función para hacer request HTTP
function makeRequest(url, path = '') {
    return new Promise((resolve, reject) => {
        const fullUrl = url + path;
        console.log(`🔍 Testing: ${fullUrl}`);
        
        const req = https.get(fullUrl, { timeout: TIMEOUT }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({ 
                    status: res.statusCode, 
                    data,
                    headers: res.headers,
                    redirected: res.statusCode >= 300 && res.statusCode < 400
                });
            });
        });
        
        req.on('timeout', () => {
            req.destroy();
            reject(new Error(`Timeout after ${TIMEOUT}ms`));
        });
        
        req.on('error', (error) => {
            reject(error);
        });
    });
}

// Tests para verificar el sitio
const tests = [
    {
        name: '🏠 Home Page Load',
        path: '',
        test: (response) => {
            if (response.status !== 200) return false;
            return response.data.includes('Bisonte') && 
                   !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '🔐 NextAuth Session API',
        path: '/api/auth/session',
        test: (response) => response.status === 200
    },
    {
        name: '❤️ Health Check Endpoint',
        path: '/api/health', 
        test: (response) => response.status === 200
    },
    {
        name: '📱 Login Page',
        path: '/login',
        test: (response) => {
            if (response.status !== 200) return false;
            return !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '🏠 Home Protected Route',
        path: '/home',
        test: (response) => {
            return response.status === 200 || response.status === 302 || response.status === 307;
        }
    },
    {
        name: '📊 Admin Panel',
        path: '/admin/usuarios',
        test: (response) => {
            return response.status === 200 || response.status === 302 || response.status === 307;
        }
    },
    {
        name: '📋 Cotizador',
        path: '/cotizador',
        test: (response) => {
            return response.status === 200 && 
                   !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '🎨 Static Assets (Favicon)',
        path: '/favicon.ico',
        test: (response) => response.status === 200
    }
];

async function runTest() {
    console.log('🔍 VERIFICANDO DEPLOYMENT EN BISONTEAPP.COM');
    console.log('=' .repeat(60));
    console.log(`🌐 URL: ${PRODUCTION_URL}`);
    console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
    console.log('');

    const results = [];
    let passedTests = 0;
    
    for (const test of tests) {
        try {
            console.log(`🧪 ${test.name}...`);
            const response = await makeRequest(PRODUCTION_URL, test.path);
            const passed = test.test(response);
            
            results.push({
                name: test.name,
                passed,
                status: response.status,
                path: test.path,
                redirected: response.redirected,
                hasSSRErrors: response.data.includes('Cannot read properties of null')
            });
            
            if (passed) {
                passedTests++;
                console.log(`   ✅ PASS - Status: ${response.status}${response.redirected ? ' (redirected)' : ''}`);
            } else {
                console.log(`   ❌ FAIL - Status: ${response.status}${response.redirected ? ' (redirected)' : ''}`);
                if (response.data.includes('Cannot read properties of null')) {
                    console.log(`   🚨 SSR ERROR DETECTED`);
                }
            }
            
        } catch (error) {
            results.push({
                name: test.name,
                passed: false,
                error: error.message,
                path: test.path
            });
            console.log(`   💥 ERROR: ${error.message}`);
        }
    }
    
    console.log('');
    console.log('📊 RESUMEN FINAL');
    console.log('=' .repeat(60));
    
    const total = tests.length;
    const failedTests = total - passedTests;
    
    console.log(`✅ Tests Exitosos: ${passedTests}/${total} (${Math.round(passedTests/total*100)}%)`);
    console.log(`❌ Tests Fallidos: ${failedTests}/${total} (${Math.round(failedTests/total*100)}%)`);
    
    // Verificar errores específicos de SSR
    const ssrErrors = results.filter(r => r.hasSSRErrors).length;
    if (ssrErrors > 0) {
        console.log(`🚨 Páginas con errores SSR: ${ssrErrors}/${total}`);
    } else {
        console.log('✨ Sin errores SSR detectados');
    }
    
    if (passedTests === total) {
        console.log('');
        console.log('🎉 ¡DEPLOYMENT COMPLETAMENTE EXITOSO!');
        console.log('🚀 Sitio completamente operativo');
        console.log('🌟 Todas las funcionalidades verificadas');
        console.log('');
        console.log(`🔗 Sitio: ${PRODUCTION_URL}`);
        console.log('🔗 APIs: Netlify (configuradas en app)');
    } else if (passedTests > total * 0.7) {
        console.log('');
        console.log('⚡ DEPLOYMENT FUNCIONANDO');
        console.log('🔧 Funcionalidades principales operativas');
    } else {
        console.log('');
        console.log('🔴 PROBLEMAS EN DEPLOYMENT');
        console.log('🛠️  Requiere revisión');
    }
    
    // Guardar reporte
    const report = {
        timestamp: new Date().toISOString(),
        url: PRODUCTION_URL,
        summary: {
            totalTests: total,
            passed: passedTests,
            failed: failedTests,
            successRate: Math.round(passedTests/total*100),
            ssrErrorsDetected: ssrErrors
        },
        results: results,
        status: passedTests === total ? 'SUCCESS' : passedTests > total * 0.7 ? 'PARTIAL' : 'FAILED'
    };
    
    fs.writeFileSync('BISONTEAPP_PRODUCTION_REPORT.json', JSON.stringify(report, null, 2));
    console.log('📝 Reporte guardado en: BISONTEAPP_PRODUCTION_REPORT.json');
}

// Ejecutar verificación
runTest().catch(console.error);
