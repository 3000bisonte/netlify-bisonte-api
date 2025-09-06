// Verificación completa de endpoints NextAuth
const https = require('https');
const http = require('http');

const baseUrl = 'http://localhost:3001';

// Lista completa de endpoints NextAuth que debemos verificar
const endpoints = [
  '/api/auth/providers',
  '/api/auth/session',
  '/api/auth/csrf',
  '/api/auth/signin',
  '/api/auth/signin/google',
  '/api/auth/signin/credentials',
  '/api/auth/callback/google',
  '/api/auth/callback/credentials',
  '/api/auth/signout'
];

async function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    const url = `${baseUrl}${endpoint}`;
    
    const req = http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const result = {
          endpoint,
          status: res.statusCode,
          headers: res.headers,
          data: data.slice(0, 200) + (data.length > 200 ? '...' : ''),
          isJSON: false,
          isHTML: false
        };
        
        try {
          JSON.parse(data);
          result.isJSON = true;
        } catch (e) {
          if (data.includes('<!DOCTYPE') || data.includes('<html')) {
            result.isHTML = true;
          }
        }
        
        resolve(result);
      });
    });
    
    req.on('error', (error) => {
      resolve({
        endpoint,
        status: 'ERROR',
        error: error.message,
        data: '',
        isJSON: false,
        isHTML: false
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        endpoint,
        status: 'TIMEOUT',
        error: 'Request timeout',
        data: '',
        isJSON: false,
        isHTML: false
      });
    });
  });
}

async function verifyAllEndpoints() {
  console.log('🔍 Verificando TODOS los endpoints de NextAuth...\n');
  
  for (const endpoint of endpoints) {
    const result = await testEndpoint(endpoint);
    
    let status = '';
    if (result.status === 200) {
      if (result.isJSON) {
        status = '✅ OK (JSON)';
      } else if (result.isHTML) {
        status = '⚠️  OK (HTML)';
      } else {
        status = '⚠️  OK (OTHER)';
      }
    } else if (result.status === 404) {
      status = '❌ 404 NOT FOUND';
    } else if (result.status === 'ERROR') {
      status = `❌ ERROR: ${result.error}`;
    } else if (result.status === 'TIMEOUT') {
      status = '❌ TIMEOUT';
    } else {
      status = `⚠️  ${result.status}`;
    }
    
    console.log(`${status} ${endpoint}`);
    
    // Mostrar detalles adicionales para errores
    if (result.status === 404 || result.status === 'ERROR' || result.isHTML) {
      console.log(`   Data: ${result.data}`);
    }
    
    console.log(''); // Línea en blanco para separar
  }
  
  console.log('🔧 Diagnóstico:');
  console.log('- Si ves 404 en /api/auth/signin/google: NextAuth no está configurado correctamente');
  console.log('- Si ves HTML en lugar de JSON: Las rutas API no están funcionando');
  console.log('- Si ves TIMEOUT/ERROR: El servidor no está corriendo en puerto 3001');
  
  console.log('\n📋 Archivos críticos a verificar:');
  console.log('1. src/app/api/auth/[...nextauth]/route.js - Configuración principal NextAuth');
  console.log('2. next.config.js - Debe tener output comentado para permitir API routes');
  console.log('3. .env.local - Variables NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, etc.');
}

// Esperar un poco y ejecutar
setTimeout(() => {
  verifyAllEndpoints().catch(console.error);
}, 2000);
