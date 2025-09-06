/**
 * 🚀 SCRIPT DE VERIFICACIÓN DE DEPLOYMENT EN PRODUCCIÓN
 * 
 * Verifica que el sitio esté funcionando correctamente después del deploy
 * con las correcciones de SSR implementadas.
 */

const https = require('https');
const fs = require('fs');

const PRODUCTION_URL = 'https://bisonteapp.vercel.app';
const TIMEOUT = 10000;

// Función para hacer request HTTP
function makeRequest(url, path = '') {
    return new Promise((resolve, reject) => {
        const fullUrl = url + path;
        const req = https.get(fullUrl, { timeout: TIMEOUT }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ 
                status: res.statusCode, 
                data,
                headers: res.headers 
            }));
        });
        
        req.on('timeout', () => {
            req.destroy();
            reject(new Error(`Timeout after ${TIMEOUT}ms`));
        });
        
        req.on('error', reject);
    });
}

// Tests de verificación
const tests = [
    {
        name: 'Home Page Load',
        path: '',
        test: (response) => response.status === 200 && response.data.includes('Bisonte')
    },
    {
        name: 'Auth API Status',
        path: '/api/auth/session',
        test: (response) => response.status === 200
    },
    {
        name: 'Health Check',
        path: '/api/health',
        test: (response) => response.status === 200
    },
    {
        name: 'Static Assets',
        path: '/favicon.ico',
        test: (response) => response.status === 200
    },
    {
        name: 'SSR Pages Working',
        path: '/auth',
        test: (response) => response.status === 200
    }
];

async function runTests() {
    console.log('🔍 VERIFICANDO DEPLOYMENT EN PRODUCCIÓN');
    console.log('=' .repeat(50));
    console.log(`🌐 URL: ${PRODUCTION_URL}`);
    console.log('');

    const results = [];
    
    for (const test of tests) {
        try {
            console.log(`🧪 ${test.name}...`);
            const response = await makeRequest(PRODUCTION_URL, test.path);
            const passed = test.test(response);
            
            results.push({
                name: test.name,
                passed,
                status: response.status,
                path: test.path
            });
            
            console.log(`   ${passed ? '✅' : '❌'} Status: ${response.status} ${passed ? 'PASS' : 'FAIL'}`);
            
        } catch (error) {
            results.push({
                name: test.name,
                passed: false,
                error: error.message,
                path: test.path
            });
            console.log(`   ❌ ERROR: ${error.message}`);
        }
    }
    
    console.log('');
    console.log('📊 RESUMEN DE RESULTADOS');
    console.log('=' .repeat(50));
    
    const passed = results.filter(r => r.passed).length;
    const total = results.length;
    
    console.log(`✅ Tests Pasados: ${passed}/${total}`);
    console.log(`❌ Tests Fallidos: ${total - passed}/${total}`);
    
    if (passed === total) {
        console.log('');
        console.log('🎉 ¡DEPLOYMENT EXITOSO!');
        console.log('🚀 Todas las verificaciones pasaron correctamente');
        console.log('🌟 El sitio está funcionando en producción');
    } else {
        console.log('');
        console.log('⚠️  Algunos tests fallaron - revisar deployment');
    }
    
    // Guardar reporte
    const report = {
        timestamp: new Date().toISOString(),
        url: PRODUCTION_URL,
        totalTests: total,
        passed: passed,
        failed: total - passed,
        results: results,
        success: passed === total
    };
    
    fs.writeFileSync('DEPLOYMENT_VERIFICATION_REPORT.json', JSON.stringify(report, null, 2));
    console.log('📝 Reporte guardado en: DEPLOYMENT_VERIFICATION_REPORT.json');
}

// Ejecutar verificación
runTests().catch(console.error);
