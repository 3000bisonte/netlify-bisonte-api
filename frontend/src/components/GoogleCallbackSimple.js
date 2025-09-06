"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function GoogleCallbackSimple() {
  const [status, setStatus] = useState('Procesando autenticación...');
  const [logs, setLogs] = useState([]);
  const router = useRouter();

  const addLog = (message) => {
    const time = new Date().toISOString().substring(11, 19);
    const logMsg = `[${time}] ${message}`;
    console.log(logMsg);
    setLogs(prev => [...prev, logMsg]);
  };

  useEffect(() => {
    const processAuth = async () => {
      try {
        addLog('=== INICIANDO CALLBACK GOOGLE ===');
        
        // Obtener código de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');
        
        if (error) {
          addLog(`❌ Error OAuth: ${error}`);
          setStatus('Error en autenticación');
          setTimeout(() => router.push('/login'), 3000);
          return;
        }
        
        if (!code) {
          addLog('❌ Código de autorización no encontrado');
          setStatus('Código faltante');
          setTimeout(() => router.push('/login'), 3000);
          return;
        }
        
        addLog('✅ Código de autorización recibido');
        setStatus('Intercambiando tokens...');
        
        // Obtener Client ID
        let clientId;
        try {
          const configResp = await fetch('https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/public-config');
          if (configResp.ok) {
            const configData = await configResp.json();
            clientId = configData.googleClientId;
          }
        } catch {}
        
        if (!clientId) {
          const isDev = window.location.hostname === 'localhost';
          clientId = isDev 
            ? "831420252741-4191330gjs69hkm4jr55rig3d8ouas0f.apps.googleusercontent.com"
            : "108242889910-n3ptem16orktkl0klv8onlttfl83r1ul.apps.googleusercontent.com";
        }
        
        addLog(`Client ID: ${clientId.substring(0, 10)}...`);
        
        // Intercambiar código por tokens con Google
        const tokenParams = new URLSearchParams({
          client_id: clientId,
          code: code,
          grant_type: 'authorization_code',
          redirect_uri: window.location.origin + '/auth/google/callback'
        });
        
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: tokenParams
        });
        
        addLog(`Respuesta tokens: ${tokenResponse.status}`);
        
        if (!tokenResponse.ok) {
          const errorText = await tokenResponse.text();
          addLog(`❌ Error tokens: ${errorText}`);
          
          // Si falla por client_secret, redirigir a GIS
          if (tokenResponse.status === 400 && errorText.includes('client_secret')) {
            addLog('🔄 Requiere client_secret, redirigiendo a login con GIS...');
            setTimeout(() => router.push('/login?method=gis'), 2000);
            return;
          }
          
          throw new Error('Error intercambiando tokens');
        }
        
        const tokenData = await tokenResponse.json();
        addLog('✅ Tokens obtenidos de Google');
        
        if (!tokenData.id_token) {
          throw new Error('ID token no recibido');
        }
        
        setStatus('Validando con servidor...');
        addLog('🔄 Enviando ID token al backend...');
        
        // Enviar ID token al backend para validar y obtener JWT
        const backendResponse = await fetch('https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            idToken: tokenData.id_token,
            accessToken: tokenData.access_token 
          })
        });
        
        addLog(`Respuesta backend: ${backendResponse.status}`);
        
        if (!backendResponse.ok) {
          const errorText = await backendResponse.text();
          addLog(`❌ Backend error: ${errorText.substring(0, 100)}...`);
          throw new Error('Error validando con servidor');
        }
        
        const backendData = await backendResponse.json();
        
        if (!backendData.success || !backendData.token) {
          addLog('❌ Backend no devolvió token válido');
          throw new Error('Token no válido del servidor');
        }
        
        addLog('✅ JWT recibido del backend');
        setStatus('Guardando sesión...');
        
        // Guardar sesión simplificada
        const user = backendData.user || {};
        const token = backendData.token;
        
        // Limpiar localStorage anterior
        ['google_auth_data', 'google_id_token', 'auth_success'].forEach(key => {
          try { localStorage.removeItem(key); } catch {}
        });
        
        // Guardar sesión nueva
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('lastUser', user.email || '');
        
        if (backendData.refreshToken) {
          localStorage.setItem('refreshToken', backendData.refreshToken);
        }
        
        // Sesión móvil unificada
        const session = {
          user: user,
          token: token,
          refreshToken: backendData.refreshToken || null,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h
          created: new Date().toISOString(),
          provider: 'google'
        };
        
        localStorage.setItem('bisonte_mobile_session', JSON.stringify(session));
        
        addLog('✅ Sesión guardada exitosamente');
        addLog(`Usuario: ${user.email || user.name || 'Unknown'}`);
        
        setStatus('¡Éxito! Redirigiendo...');
        
        // Redirigir al home
        setTimeout(() => {
          router.push('/home');
        }, 1500);
        
      } catch (error) {
        addLog(`❌ Error: ${error.message}`);
        setStatus('Error en proceso');
        setTimeout(() => router.push('/login'), 3000);
      }
    };

    // Solo ejecutar si estamos en el cliente
    if (typeof window !== 'undefined') {
      processAuth();
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          🔐 Procesando Autenticación
        </h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-gray-800 text-center font-semibold text-lg">
            {status}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">📋 Log del Proceso:</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs max-h-40 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-1">{log}</div>
            ))}
            {logs.length === 0 && (
              <div className="text-gray-500">Iniciando proceso...</div>
            )}
          </div>
        </div>

        {status.includes('Éxito') && (
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/home')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg"
            >
              🏠 IR AL HOME
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
