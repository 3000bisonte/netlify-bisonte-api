#!/usr/bin/env node

/**
 * Script de diagnóstico para autenticación con Google en WebView
 */

const https = require('https');
const { URL } = require('url');

const BASE_URL = process.env.NEXTAUTH_URL || process.env.VERCEL_URL
  ? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXTAUTH_URL)
  : 'http://localhost:3001';

const endpoints = [
  {
    name: 'Health Check',
    url: `${BASE_URL}/api/health`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Auth Configuration',
    url: `${BASE_URL}/api/auth/providers`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Google OAuth Config',
    url: `${BASE_URL}/api/public/config`,
    method: 'GET',
    expectedStatus: 200,
  },
  {
    name: 'Auth CSRF',
    url: `${BASE_URL}/api/auth/csrf`,
    method: 'GET',
    expectedStatus: 200,
  },
];

function makeRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint.url);
    const isHttps = url.protocol === 'https:';
    const httpModule = isHttps ? require('https') : require('http');
    
    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method: endpoint.method,
      headers: {
        'User-Agent': 'Bisonte-WebView-Diagnostic/1.0',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    };

    const req = httpModule.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = {
            name: endpoint.name,
            url: endpoint.url,
            status: res.statusCode,
            expectedStatus: endpoint.expectedStatus,
            success: res.statusCode === endpoint.expectedStatus,
            headers: res.headers,
            data: data ? JSON.parse(data) : null,
          };
          resolve(result);
        } catch (e) {
          resolve({
            name: endpoint.name,
            url: endpoint.url,
            status: res.statusCode,
            expectedStatus: endpoint.expectedStatus,
            success: res.statusCode === endpoint.expectedStatus,
            error: e.message,
            rawData: data,
          });
        }
      });
    });

    req.on('error', (err) => {
      resolve({
        name: endpoint.name,
        url: endpoint.url,
        success: false,
        error: err.message,
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        name: endpoint.name,
        url: endpoint.url,
        success: false,
        error: 'Timeout after 10 seconds',
      });
    });

    req.end();
  });
}

async function runDiagnostics() {
  console.log('🔍 Diagnóstico de Autenticación Google en WebView');
  console.log('================================================\n');

  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}\n`);

  const results = [];

  for (const endpoint of endpoints) {
    console.log(`Testing: ${endpoint.name}`);
    console.log(`URL: ${endpoint.url}`);

    const result = await makeRequest(endpoint);
    results.push(result);

    if (result.success) {
      console.log(`✅ Status: ${result.status} (Expected: ${result.expectedStatus})`);
    } else {
      console.log(`❌ Status: ${result.status || 'N/A'} (Expected: ${result.expectedStatus})`);
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }

    // Mostrar información adicional para endpoints específicos
    if (result.name === 'Google OAuth Config' && result.data) {
      console.log(`   Google Client ID: ${result.data.googleClientId ? '✅ Configurado' : '❌ No configurado'}`);
      console.log(`   Redirect URI: ${result.data.redirectUri}`);
      console.log(`   Environment: ${result.data.environment}`);
    }

    console.log('');
  }

  // Resumen
  const successful = results.filter(r => r.success).length;
  const total = results.length;

  console.log('📊 Resumen del Diagnóstico');
  console.log('==========================');
  console.log(`Endpoints probados: ${total}`);
  console.log(`Exitosos: ${successful}`);
  console.log(`Fallidos: ${total - successful}`);

  if (successful === total) {
    console.log('\n🎉 ¡Todos los endpoints están funcionando correctamente!');
    console.log('La autenticación con Google debería funcionar en WebView.');
  } else {
    console.log('\n⚠️  Algunos endpoints fallaron. Revisa la configuración.');
    console.log('\nPosibles problemas:');
    console.log('- Variables de entorno no configuradas');
    console.log('- Problemas de CORS');
    console.log('- Configuración de NextAuth incorrecta');
    console.log('- Headers de seguridad bloqueando requests');
  }

  // Verificar configuración específica de WebView
  console.log('\n🔧 Verificación de configuración WebView');
  console.log('=========================================');

  const authConfig = results.find(r => r.name === 'Auth Configuration');
  if (authConfig?.data) {
    console.log('✅ Configuración de NextAuth encontrada');
    if (authConfig.data.google) {
      console.log('✅ Provider de Google configurado');
    } else {
      console.log('❌ Provider de Google no encontrado');
    }
  } else {
    console.log('❌ No se pudo obtener configuración de NextAuth');
  }
}

if (require.main === module) {
  runDiagnostics().catch(console.error);
}

module.exports = { runDiagnostics, makeRequest };