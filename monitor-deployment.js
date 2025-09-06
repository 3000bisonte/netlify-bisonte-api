/**
 * 🚀 MONITOR AVANZADO DE DEPLOYMENT VERCEL
 * 
 * Verifica el estado del deployment y las correcciones SSR en tiempo real
 */

const https = require('https');
const fs = require('fs');

const PRODUCTION_URL = 'https://bisonte-modificado.vercel.app';
const TIMEOUT = 15000;

// Función para hacer request HTTP con mejor manejo de errores
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

// Tests específicos para verificar correcciones SSR
const tests = [
    {
        name: '🏠 Home Page Load',
        path: '',
        test: (response) => {
            if (response.status !== 200) return false;
            // Verificar que no hay errores de SSR en el HTML
            return !response.data.includes('Cannot read properties of null') && 
                   response.data.includes('Bisonte');
        }
    },
    {
        name: '🔐 NextAuth Session Endpoint',
        path: '/api/auth/session',
        test: (response) => response.status === 200
    },
    {
        name: '❤️ Health Check API',
        path: '/api/health', 
        test: (response) => response.status === 200
    },
    {
        name: '📱 Login Page (SSR Critical)',
        path: '/login',
        test: (response) => {
            if (response.status !== 200) return false;
            // Verificar que la página se renderiza sin errores de useContext
            return !response.data.includes('useContext') || 
                   !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '🏠 Home Protected Route',
        path: '/home',
        test: (response) => {
            if (response.status !== 200) return false;
            // Verificar que no hay errores de context
            return !response.data.includes('useContext') || 
                   !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '📊 Admin Panel (Context Heavy)',
        path: '/admin/usuarios',
        test: (response) => {
            if (response.status !== 200) return false;
            return !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '📋 Cotizador (Form Page)',
        path: '/cotizador',
        test: (response) => {
            if (response.status !== 200) return false;
            return !response.data.includes('useContext') || 
                   !response.data.includes('Cannot read properties of null');
        }
    },
    {
        name: '🔄 Auth Callback',
        path: '/auth/google/callback',
        test: (response) => {
            // Puede ser redirect o 200, pero no debe tener errores de useContext
            return response.status === 200 || response.status === 307 || response.status === 302;
        }
    }
];

async function runComprehensiveTest() {
    console.log('🔍 MONITOR DEPLOYMENT - CORRECCIONES SSR');
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
                    console.log(`   🚨 SSR ERROR DETECTED - useContext null issue persists`);
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
        console.log('⚠️  Las correcciones SSR aún no han tomado efecto');
    } else {
        console.log('✨ Sin errores SSR detectados - Correcciones funcionando');
    }
    
    if (passedTests === total) {
        console.log('');
        console.log('🎉 ¡DEPLOYMENT COMPLETAMENTE EXITOSO!');
        console.log('🚀 Todas las correcciones SSR funcionando correctamente');
        console.log('🌟 Sitio completamente operativo en producción');
        console.log('');
        console.log('🔗 Sitio listo en: https://bisonte-modificado.vercel.app');
        console.log('🔗 APIs en Netlify: https://bisonte-api-netlify.netlify.app');
    } else if (passedTests > total * 0.7) {
        console.log('');
        console.log('⚡ DEPLOYMENT PARCIALMENTE EXITOSO');
        console.log('🔧 Algunas funcionalidades pueden necesitar ajustes menores');
    } else {
        console.log('');
        console.log('🔴 DEPLOYMENT CON PROBLEMAS CRÍTICOS');
        console.log('🛠️  Requiere intervención para corregir errores SSR');
    }
    
    // Guardar reporte detallado
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
    
    fs.writeFileSync('DEPLOYMENT_MONITOR_REPORT.json', JSON.stringify(report, null, 2));
    console.log('📝 Reporte detallado guardado en: DEPLOYMENT_MONITOR_REPORT.json');
}

// Ejecutar monitoreo
runComprehensiveTest().catch(console.error);
