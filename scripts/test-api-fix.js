const http = require('http');

async function testAPI() {
  console.log('🔍 Probando APIs de NextAuth...\n');
  
  // Test 1: Providers endpoint
  console.log('1️⃣ Probando /api/auth/providers');
  try {
    const response = await fetch('http://localhost:3001/api/auth/providers');
    const data = await response.json();
    
    if (data.google && data.google.signinUrl && !data.google.signinUrl.includes('undefined')) {
      console.log('✅ Providers endpoint funciona correctamente');
      console.log('✅ URLs generadas correctamente:', data.google.signinUrl);
    } else {
      console.log('❌ Aún hay problemas con URLs undefined');
      console.log('Data:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log('❌ Error al probar providers:', error.message);
  }
  
  // Test 2: NextAuth session endpoint
  console.log('\n2️⃣ Probando /api/auth/session');
  try {
    const response = await fetch('http://localhost:3001/api/auth/session');
    const data = await response.json();
    console.log('✅ Session endpoint accesible');
  } catch (error) {
    console.log('❌ Error al probar session:', error.message);
  }
  
  // Test 3: NextAuth signin page
  console.log('\n3️⃣ Probando /api/auth/signin');
  try {
    const response = await fetch('http://localhost:3001/api/auth/signin');
    if (response.ok) {
      console.log('✅ Signin endpoint accesible');
    } else {
      console.log('❌ Signin endpoint no accesible:', response.status);
    }
  } catch (error) {
    console.log('❌ Error al probar signin:', error.message);
  }
  
  console.log('\n🎯 Resultado: Si no ves errores arriba, las APIs están funcionando correctamente');
}

// Esperar un poco para que el servidor esté listo
setTimeout(testAPI, 3000);
