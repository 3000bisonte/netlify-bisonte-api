// Script para probar las rutas de autenticación del backend API
console.log('🔍 Probando rutas del Backend API en localhost:8080...\n');

const testRoutes = [
  {
    name: 'Health Check',
    url: 'http://localhost:8080/api/health',
    method: 'GET'
  },
  {
    name: 'Config',
    url: 'http://localhost:8080/api/config',
    method: 'GET'
  },
  {
    name: 'Google SignIn',
    url: 'http://localhost:8080/api/auth/signin/google',
    method: 'GET'
  },
  {
    name: 'Auth Session',
    url: 'http://localhost:8080/api/auth/session',
    method: 'GET'
  }
];

async function testAPI() {
  for (const route of testRoutes) {
    try {
      console.log(`🧪 Testing ${route.name}: ${route.method} ${route.url}`);
      
      const response = await fetch(route.url, {
        method: route.method,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Bisonte-Test-Script'
        }
      });
      
      const data = await response.text();
      
      if (response.ok) {
        console.log(`✅ ${route.name}: OK (${response.status})`);
        if (route.name === 'Google SignIn') {
          // Para signin, mostrar si devuelve redirect o JSON
          try {
            const json = JSON.parse(data);
            if (json.authUrl) {
              console.log(`   📍 Auth URL generated: ${json.authUrl.substring(0, 80)}...`);
            }
          } catch {
            console.log(`   📍 Response: ${data.substring(0, 100)}...`);
          }
        }
      } else {
        console.log(`❌ ${route.name}: ERROR (${response.status})`);
        console.log(`   Error: ${data.substring(0, 200)}`);
      }
      
    } catch (error) {
      console.log(`❌ ${route.name}: NETWORK ERROR - ${error.message}`);
    }
    
    console.log(''); // Línea en blanco
  }
  
  console.log('🎯 Resultados:');
  console.log('- Si ves ✅ en todas las rutas: Backend API funcionando correctamente');
  console.log('- Si ves "Auth URL generated": Google OAuth configurado correctamente');
  console.log('- Si ves errores: Verificar que el servidor esté corriendo en puerto 8080');
}

// Esperar un poco para que el servidor esté listo
setTimeout(testAPI, 2000);
