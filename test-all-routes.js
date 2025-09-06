/**
 * 🚀 TEST COMPLETO DE TODAS LAS RUTAS - BISONTEAPP.COM
 * 
 * Verifica exhaustivamente todas las páginas y funcionalidades del sitio
 */

const https = require('https');
const fs = require('fs');

const PRODUCTION_URL = 'https://www.bisonteapp.com';
const TIMEOUT = 20000;

// Función para hacer request HTTP con seguimiento de redirecciones
function makeRequest(url, path = '', followRedirects = true) {
    return new Promise((resolve, reject) => {
        const fullUrl = url + path;
        console.log(`🔍 Testing: ${fullUrl}`);
        
        const req = https.get(fullUrl, { timeout: TIMEOUT }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                // Si hay redirección y queremos seguirla
                if (followRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    const redirectUrl = res.headers.location.startsWith('http') 
                        ? res.headers.location 
                        : url + res.headers.location;
                    
                    console.log(`   ↪️  Redirected to: ${redirectUrl}`);
                    
                    // Hacer seguimiento de la redirección
                    const redirectReq = https.get(redirectUrl, { timeout: TIMEOUT }, (redirectRes) => {
                        let redirectData = '';
                        redirectRes.on('data', chunk => redirectData += chunk);
                        redirectRes.on('end', () => {
                            resolve({
                                status: redirectRes.statusCode,
                                originalStatus: res.statusCode,
                                data: redirectData,
                                headers: redirectRes.headers,
                                redirected: true,
                                redirectUrl: redirectUrl
                            });
                        });
                    });
                    
                    redirectReq.on('error', () => {
                        // Si falla la redirección, devolver respuesta original
                        resolve({
                            status: res.statusCode,
                            data,
                            headers: res.headers,
                            redirected: true,
                            redirectFailed: true
                        });
                    });
                    
                    redirectReq.on('timeout', () => {
                        redirectReq.destroy();
                        resolve({
                            status: res.statusCode,
                            data,
                            headers: res.headers,
                            redirected: true,
                            redirectTimeout: true
                        });
                    });
                } else {
                    resolve({ 
                        status: res.statusCode, 
                        data,
                        headers: res.headers,
                        redirected: false
                    });
                }
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

// Lista completa de rutas para probar
const routes = [
    // Páginas principales
    { name: '🏠 Home Page', path: '', critical: true },
    { name: '🏠 Home Route', path: '/home', critical: true },
    { name: '📱 Login Page', path: '/login', critical: true },
    { name: '📝 Register Page', path: '/register', critical: true },
    { name: '🔄 Recovery Page', path: '/recuperar', critical: false },
    { name: '✅ Recovery Success', path: '/recuperar/exito', critical: false },
    { name: '🔑 Validate Token', path: '/recuperar/validar-token', critical: false },
    { name: '🎉 Registration Success', path: '/registro-exitoso', critical: false },
    
    // Funcionalidades principales
    { name: '📋 Cotizador', path: '/cotizador', critical: true },
    { name: '📦 Resumen', path: '/resumen', critical: true },
    { name: '👤 Remitente Edit', path: '/remitente/edit', critical: true },
    { name: '📍 Destinatario', path: '/destinatario', critical: true },
    { name: '📊 Mis Envíos', path: '/misenvios', critical: true },
    { name: '📞 Contacto', path: '/contacto', critical: true },
    
    // Panel administrativo
    { name: '👥 Admin Usuarios', path: '/admin/usuarios', critical: true },
    { name: '📬 Admin Contactos', path: '/admin/contactos', critical: false },
    { name: '📦 Admin Envíos', path: '/admin/envios', critical: false },
    
    // Mercado Pago
    { name: '💳 Mercado Pago', path: '/mercadopago', critical: true },
    { name: '📊 MP Status Brick', path: '/mercadopago/statusbrick', critical: false },
    { name: '💰 Pagos', path: '/pagos', critical: true },
    
    // Páginas informativas
    { name: '👤 Perfil Card', path: '/perfilCard', critical: false },
    { name: '📄 Términos', path: '/terminos', critical: false },
    { name: '🔒 Política de Datos', path: '/politica-datos', critical: false },
    
    // Páginas de diagnóstico y utilidad
    { name: '🔧 Diagnostic', path: '/diagnostic', critical: false },
    { name: '📱 No Conexión', path: '/no-conexion', critical: false },
    { name: '🎯 Test Ads', path: '/test-ads', critical: false },
    
    // APIs críticas
    { name: '🔐 NextAuth Session', path: '/api/auth/session', critical: true, isAPI: true },
    { name: '❤️ Health Check', path: '/api/health', critical: true, isAPI: true },
    { name: '🌐 Public Config', path: '/api/public/config', critical: false, isAPI: true },
    { name: '🧪 Test API', path: '/api/test', critical: false, isAPI: true },
    { name: '📊 Status API', path: '/api/status', critical: false, isAPI: true },
    
    // Google Auth
    { name: '🔄 Google Callback', path: '/auth/google/callback', critical: true },
    { name: '📱 Native Finalize', path: '/auth/native-finalize', critical: false },
    
    // Assets estáticos
    { name: '🎨 Favicon', path: '/favicon.ico', critical: false, isStatic: true },
];

async function runComprehensiveTest() {
    console.log('🔍 TEST COMPLETO DE TODAS LAS RUTAS');
    console.log('=' .repeat(70));
    console.log(`🌐 URL: ${PRODUCTION_URL}`);
    console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
    console.log(`📊 Total rutas a probar: ${routes.length}`);
    console.log('');

    const results = [];
    let passedTests = 0;
    let criticalPassed = 0;
    let criticalTotal = routes.filter(r => r.critical).length;
    
    for (const route of routes) {
        try {
            console.log(`🧪 ${route.name}...`);
            const response = await makeRequest(PRODUCTION_URL, route.path, true);
            
            // Determinar si el test pasó
            let passed = false;
            let reason = '';
            
            if (route.isAPI) {
                // Para APIs, 200 es éxito, 401/403 puede ser normal para endpoints protegidos
                passed = response.status === 200 || response.status === 401 || response.status === 403;
                if (!passed) reason = `API returned ${response.status}`;
            } else if (route.isStatic) {
                // Para archivos estáticos, solo 200 es éxito
                passed = response.status === 200;
                if (!passed) reason = `Static file not found (${response.status})`;
            } else {
                // Para páginas, 200 es éxito, redirecciones pueden ser normales
                passed = response.status === 200 || 
                        (response.redirected && response.status === 200) ||
                        response.status === 302 || response.status === 307;
                
                // Verificar que no hay errores de SSR
                if (passed && response.data) {
                    const hasSSRError = response.data.includes('Cannot read properties of null') ||
                                      response.data.includes('useContext') && response.data.includes('null');
                    if (hasSSRError) {
                        passed = false;
                        reason = 'SSR error detected';
                    }
                }
                
                if (!passed && !reason) {
                    reason = `Page error (${response.status})`;
                }
            }
            
            results.push({
                name: route.name,
                path: route.path,
                passed,
                critical: route.critical,
                status: response.status,
                originalStatus: response.originalStatus,
                redirected: response.redirected,
                redirectUrl: response.redirectUrl,
                isAPI: route.isAPI,
                isStatic: route.isStatic,
                reason: reason,
                hasSSRErrors: response.data ? response.data.includes('Cannot read properties of null') : false
            });
            
            if (passed) {
                passedTests++;
                if (route.critical) criticalPassed++;
                
                let statusText = `Status: ${response.status}`;
                if (response.redirected) {
                    statusText += ` (redirected from ${response.originalStatus})`;
                }
                console.log(`   ✅ PASS - ${statusText}`);
            } else {
                if (route.critical) {
                    console.log(`   🚨 CRITICAL FAIL - ${reason}`);
                } else {
                    console.log(`   ❌ FAIL - ${reason}`);
                }
            }
            
        } catch (error) {
            results.push({
                name: route.name,
                path: route.path,
                passed: false,
                critical: route.critical,
                error: error.message,
                isAPI: route.isAPI,
                isStatic: route.isStatic
            });
            
            if (route.critical) {
                console.log(`   🚨 CRITICAL ERROR: ${error.message}`);
            } else {
                console.log(`   💥 ERROR: ${error.message}`);
            }
        }
        
        // Pausa pequeña entre requests para no sobrecargar el servidor
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('');
    console.log('📊 RESUMEN FINAL COMPLETO');
    console.log('=' .repeat(70));
    
    const total = routes.length;
    const failedTests = total - passedTests;
    const criticalFailed = criticalTotal - criticalPassed;
    
    console.log(`✅ Tests Exitosos: ${passedTests}/${total} (${Math.round(passedTests/total*100)}%)`);
    console.log(`❌ Tests Fallidos: ${failedTests}/${total} (${Math.round(failedTests/total*100)}%)`);
    console.log('');
    console.log(`🚨 Funcionalidades Críticas: ${criticalPassed}/${criticalTotal} (${Math.round(criticalPassed/criticalTotal*100)}%)`);
    
    if (criticalFailed > 0) {
        console.log(`⚠️  ${criticalFailed} funcionalidades críticas fallaron`);
    }
    
    // Verificar errores específicos
    const ssrErrors = results.filter(r => r.hasSSRErrors).length;
    if (ssrErrors > 0) {
        console.log(`🚨 Páginas con errores SSR: ${ssrErrors}/${total}`);
    } else {
        console.log('✨ Sin errores SSR detectados');
    }
    
    // Análisis por categorías
    const apiResults = results.filter(r => r.isAPI);
    const pageResults = results.filter(r => !r.isAPI && !r.isStatic);
    const staticResults = results.filter(r => r.isStatic);
    
    console.log('');
    console.log('📈 ANÁLISIS POR CATEGORÍAS:');
    console.log(`   📄 Páginas: ${pageResults.filter(r => r.passed).length}/${pageResults.length} funcionando`);
    console.log(`   🔌 APIs: ${apiResults.filter(r => r.passed).length}/${apiResults.length} funcionando`);
    console.log(`   🎨 Assets: ${staticResults.filter(r => r.passed).length}/${staticResults.length} funcionando`);
    
    // Estado general
    if (criticalPassed === criticalTotal && passedTests > total * 0.9) {
        console.log('');
        console.log('🎉 ¡SITIO COMPLETAMENTE FUNCIONAL!');
        console.log('🚀 Todas las funcionalidades críticas operativas');
        console.log('🌟 Deployment exitoso en producción');
        console.log('');
        console.log(`🔗 Sitio: ${PRODUCTION_URL}`);
        console.log('🔗 APIs: Netlify Functions configuradas');
        console.log('🔗 Autenticación: Google OAuth activa');
        console.log('🔗 Pagos: MercadoPago integrado');
    } else if (criticalPassed === criticalTotal) {
        console.log('');
        console.log('⚡ SITIO FUNCIONANDO CORRECTAMENTE');
        console.log('✅ Funcionalidades críticas operativas');
        console.log('🔧 Algunas funciones secundarias pueden necesitar ajustes');
    } else {
        console.log('');
        console.log('🔴 PROBLEMAS CRÍTICOS DETECTADOS');
        console.log('🛠️  Requiere intervención inmediata');
        console.log('📋 Revisar funcionalidades críticas fallidas');
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
            criticalTotal: criticalTotal,
            criticalPassed: criticalPassed,
            criticalFailed: criticalFailed,
            criticalSuccessRate: Math.round(criticalPassed/criticalTotal*100),
            ssrErrorsDetected: ssrErrors,
            categoriesAnalysis: {
                pages: {
                    total: pageResults.length,
                    passed: pageResults.filter(r => r.passed).length
                },
                apis: {
                    total: apiResults.length,
                    passed: apiResults.filter(r => r.passed).length
                },
                assets: {
                    total: staticResults.length,
                    passed: staticResults.filter(r => r.passed).length
                }
            }
        },
        results: results,
        status: criticalPassed === criticalTotal && passedTests > total * 0.9 ? 'SUCCESS' : 
                criticalPassed === criticalTotal ? 'FUNCTIONAL' : 'CRITICAL_ISSUES'
    };
    
    fs.writeFileSync('COMPREHENSIVE_ROUTE_TEST_REPORT.json', JSON.stringify(report, null, 2));
    console.log('');
    console.log('📝 Reporte completo guardado en: COMPREHENSIVE_ROUTE_TEST_REPORT.json');
    
    // Mostrar rutas fallidas si las hay
    const failedRoutes = results.filter(r => !r.passed);
    if (failedRoutes.length > 0) {
        console.log('');
        console.log('❌ RUTAS CON PROBLEMAS:');
        failedRoutes.forEach(route => {
            const priority = route.critical ? '🚨 CRÍTICA' : '⚠️  OPCIONAL';
            console.log(`   ${priority} ${route.name} (${route.path}) - ${route.reason || route.error}`);
        });
    }
}

// Ejecutar test completo
runComprehensiveTest().catch(console.error);
