/**
 * 🚀 MONITOR DE DEPLOYMENT PARA BISONTEAPP.VERCEL.APP
 * 
 * Monitorea el estado del deployment y verifica que todo funcione correctamente
 */

const https = require('https');
const fs = require('fs');

const PRODUCTION_URL = 'https://bisonteapp.vercel.app';
const NETLIFY_API_BASE = 'https://elegant-babka-4f1b5b.netlify.app/.netlify/functions';
const TIMEOUT = 15000;

console.log('🔍 INICIANDO MONITOREO DE DEPLOYMENT');
console.log('=' .repeat(60));
console.log(`🌐 Frontend URL: ${PRODUCTION_URL}`);
console.log(`🔧 Backend API: ${NETLIFY_API_BASE}`);
console.log('');

function makeRequest(url, path = '') {
    return new Promise((resolve, reject) => {
        const fullUrl = url + path;
        console.log(`📡 Testing: ${fullUrl}`);
        
        const req = https.get(fullUrl, { timeout: TIMEOUT }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ 
                status: res.statusCode, 
                data,
                headers: res.headers,
                url: fullUrl
            }));
        });
        
        req.on('timeout', () => {
            req.destroy();
            reject(new Error(`Timeout after ${TIMEOUT}ms for ${fullUrl}`));
        });
        
        req.on('error', (error) => {
            reject(new Error(`Network error for ${fullUrl}: ${error.message}`));
        });
    });
}

const frontendTests = [
    {
        name: 'Home Page Load',
        path: '',
        test: (response) => response.status === 200 && response.data.includes('Bisonte')
    },
    {
        name: 'NextAuth Session API',
        path: '/api/auth/session',
        test: (response) => response.status === 200
    },
    {
        name: 'Health Check Endpoint',
        path: '/api/health',
        test: (response) => response.status === 200
    },
    {
        name: 'Login Page',
        path: '/login',
        test: (response) => response.status === 200 && response.data.includes('login')
    },
    {
        name: 'Static Assets (Favicon)',
        path: '/favicon.ico',
        test: (response) => response.status === 200
    }
];

const backendTests = [
    {
        name: 'Netlify Health Check',
        url: NETLIFY_API_BASE,
        path: '/health-compact2',
        test: (response) => response.status === 200
    },
    {
        name: 'Google Auth Endpoint',
        url: NETLIFY_API_BASE,
        path: '/google2',
        test: (response) => response.status === 200 || response.status === 400 // 400 es esperado sin parámetros
    }
];

async function runTests() {
    const results = [];
    
    console.log('🌐 TESTING FRONTEND (VERCEL)');
    console.log('-' .repeat(40));
    
    for (const test of frontendTests) {
        try {
            const response = await makeRequest(PRODUCTION_URL, test.path);
            const passed = test.test(response);
            
            results.push({
                type: 'frontend',
                name: test.name,
                passed,
                status: response.status,
                path: test.path,
                url: response.url
            });
            
            console.log(`   ${passed ? '✅' : '❌'} ${test.name}: ${response.status} ${passed ? 'PASS' : 'FAIL'}`);
            
        } catch (error) {
            results.push({
                type: 'frontend',
                name: test.name,
                passed: false,
                error: error.message,
                path: test.path
            });
            console.log(`   ❌ ${test.name}: ERROR - ${error.message}`);
        }
    }
    
    console.log('');
    console.log('🔧 TESTING BACKEND (NETLIFY)');
    console.log('-' .repeat(40));
    
    for (const test of backendTests) {
        try {
            const response = await makeRequest(test.url, test.path);
            const passed = test.test(response);
            
            results.push({
                type: 'backend',
                name: test.name,
                passed,
                status: response.status,
                path: test.path,
                url: response.url
            });
            
            console.log(`   ${passed ? '✅' : '❌'} ${test.name}: ${response.status} ${passed ? 'PASS' : 'FAIL'}`);
            
        } catch (error) {
            results.push({
                type: 'backend',
                name: test.name,
                passed: false,
                error: error.message,
                path: test.path
            });
            console.log(`   ❌ ${test.name}: ERROR - ${error.message}`);
        }
    }
    
    console.log('');
    console.log('📊 RESUMEN FINAL');
    console.log('=' .repeat(60));
    
    const frontendResults = results.filter(r => r.type === 'frontend');
    const backendResults = results.filter(r => r.type === 'backend');
    
    const frontendPassed = frontendResults.filter(r => r.passed).length;
    const backendPassed = backendResults.filter(r => r.passed).length;
    
    console.log(`🌐 FRONTEND: ${frontendPassed}/${frontendResults.length} tests passed`);
    console.log(`🔧 BACKEND:  ${backendPassed}/${backendResults.length} tests passed`);
    
    const totalPassed = frontendPassed + backendPassed;
    const totalTests = frontendResults.length + backendResults.length;
    
    console.log(`📈 TOTAL:    ${totalPassed}/${totalTests} tests passed`);
    
    if (totalPassed === totalTests) {
        console.log('');
        console.log('🎉 ¡DEPLOYMENT COMPLETAMENTE EXITOSO!');
        console.log('✅ Frontend (Vercel) funcionando');
        console.log('✅ Backend (Netlify) funcionando');
        console.log('🚀 Aplicación lista para producción');
    } else {
        console.log('');
        console.log('⚠️  Algunos servicios tienen problemas');
        
        const failedTests = results.filter(r => !r.passed);
        failedTests.forEach(test => {
            console.log(`❌ ${test.name}: ${test.error || 'Test failed'}`);
        });
    }
    
    // Guardar reporte detallado
    const report = {
        timestamp: new Date().toISOString(),
        frontendUrl: PRODUCTION_URL,
        backendUrl: NETLIFY_API_BASE,
        results: {
            frontend: {
                passed: frontendPassed,
                total: frontendResults.length,
                tests: frontendResults
            },
            backend: {
                passed: backendPassed,
                total: backendResults.length,
                tests: backendResults
            }
        },
        summary: {
            totalPassed: totalPassed,
            totalTests: totalTests,
            success: totalPassed === totalTests
        }
    };
    
    fs.writeFileSync('BISONTEAPP_DEPLOYMENT_REPORT.json', JSON.stringify(report, null, 2));
    console.log('');
    console.log('📝 Reporte detallado guardado en: BISONTEAPP_DEPLOYMENT_REPORT.json');
}

// Ejecutar monitoreo
runTests().catch(console.error);
