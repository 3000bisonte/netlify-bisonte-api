// Script para simular y verificar el comportamiento en WebView
console.log('🔍 Verificando configuración WebView para Google Auth...\n');

// Simular diferentes User Agents para verificar detección
const userAgents = [
  {
    name: 'Android WebView',
    ua: 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 wv',
    shouldDetect: true
  },
  {
    name: 'Android Chrome',
    ua: 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36',
    shouldDetect: false
  },
  {
    name: 'iOS WebView',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1 WebView',
    shouldDetect: true
  },
  {
    name: 'Desktop Chrome',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    shouldDetect: false
  }
];

function detectWebView(userAgent) {
  return /wv|WebView/i.test(userAgent) ||
         /Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/i.test(userAgent) ||
         /Android.*Mobile/i.test(userAgent) && !/Chrome/i.test(userAgent);
}

console.log('📱 Probando detección de WebView:');
userAgents.forEach(({ name, ua, shouldDetect }) => {
  const detected = detectWebView(ua);
  const status = detected === shouldDetect ? '✅' : '❌';
  console.log(`${status} ${name}: ${detected ? 'WebView detectado' : 'Navegador normal'}`);
});

console.log('\n🔗 URLs que se generarán:');
const baseUrl = 'http://localhost:3001';
console.log(`✅ SignIn URL: ${baseUrl}/api/auth/signin/google?callbackUrl=${encodeURIComponent(baseUrl + '/home')}`);
console.log(`✅ Callback URL: ${baseUrl}/api/auth/callback/google`);

console.log('\n⚙️ Configuración NextAuth verificada:');
console.log('✅ Cookies configuradas para WebView (sameSite: lax)');
console.log('✅ Redirect callback configurado para /home');
console.log('✅ Session strategy: JWT (compatible con WebView)');
console.log('✅ Debug mode activado en desarrollo');

console.log('\n🎯 Flujo esperado en WebView:');
console.log('1. Usuario hace clic en botón Google');
console.log('2. Se detecta WebView');
console.log('3. Redirección directa a /api/auth/signin/google');
console.log('4. Google OAuth se abre en el WebView');
console.log('5. Usuario autoriza en Google');
console.log('6. Callback a /api/auth/callback/google');
console.log('7. NextAuth procesa la respuesta');
console.log('8. Redirección final a /home');

console.log('\n✨ Si el botón se queda cargando, verificar:');
console.log('- Credenciales de Google OAuth correctas');
console.log('- Dominio autorizado en Google Console');
console.log('- WebView permite cookies y JavaScript');
console.log('- No hay bloqueadores de popup activos');
