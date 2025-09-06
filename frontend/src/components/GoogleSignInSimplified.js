"use client";
import { useState, useEffect } from 'react';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function GoogleSignInSimplified() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [scriptReady, setScriptReady] = useState(false);

  // Limpiar datos al montar el componente
  useEffect(() => {
    console.log('🧹 Limpiando estados y datos residuales...');
    
    // Resetear estados
    setIsLoading(false);
    setError('');
    setScriptReady(false);
    
    // Limpiar Google Identity Services anterior
    if (window.google?.accounts?.id) {
      try {
        window.google.accounts.id.cancel();
        console.log('✅ Google ID cancelado');
      } catch (e) {
        console.log('ℹ️ No hay sesión de Google para cancelar');
      }
    }
    
    // Limpiar localStorage problemático solo si hay errores previos
    const lastError = localStorage.getItem('google_signin_error');
    if (lastError) {
      console.log('🗑️ Limpiando error anterior de Google Sign-In');
      localStorage.removeItem('google_signin_error');
    }
    
  }, []); // Solo ejecutar una vez al montar

  // Cargar Google Identity Services con detección de WebView
  useEffect(() => {
    let mounted = true;
    let loadTimeout;
    let retryCount = 0;
    const maxRetries = 3;

    const isWebView = () => {
      const ua = navigator.userAgent;
      return ua.includes('wv') || ua.includes('WebView') || 
             window.navigator.standalone || 
             window.matchMedia('(display-mode: standalone)').matches;
    };

    const loadGoogleScript = async () => {
      if (!mounted) return;

      console.log(`🔄 Intento ${retryCount + 1}/${maxRetries} cargando Google Script...`);
      console.log('📱 WebView detectado:', isWebView());

      // Verificar si ya está cargado
      if (window.google?.accounts?.id) {
        console.log('✅ Google Identity Services ya disponible');
        if (mounted) setScriptReady(true);
        return;
      }

      // Verificar si el script ya existe
      const existingScript = document.querySelector('script[src*="gsi/client"]');
      if (existingScript) {
        console.log('📜 Script ya existe, esperando...');
        
        // En WebView, dar más tiempo
        const waitTime = isWebView() ? 5000 : 3000;
        loadTimeout = setTimeout(() => {
          if (mounted) {
            if (window.google?.accounts?.id) {
              setScriptReady(true);
            } else {
              console.log('⚠️ Script no se cargó, reintentando...');
              if (retryCount < maxRetries - 1) {
                retryCount++;
                existingScript.remove();
                setTimeout(loadGoogleScript, 1000);
              } else {
                console.log('❌ Falló después de todos los reintentos');
                setError('Error cargando Google Sign-In. Recarga la página.');
              }
            }
          }
        }, waitTime);
        return;
      }

      // Crear nuevo script
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      
      // Timeout más largo para WebView
      const timeoutDuration = isWebView() ? 15000 : 10000;
      
      script.onload = () => {
        console.log('📜 Script cargado, verificando API...');
        
        // Verificación con retry para WebView
        const checkAPI = () => {
          if (window.google?.accounts?.id) {
            console.log('✅ Google Identity Services listo');
            if (mounted) setScriptReady(true);
          } else {
            console.log('⏳ API no lista, esperando...');
            setTimeout(() => {
              if (mounted) {
                if (window.google?.accounts?.id) {
                  setScriptReady(true);
                } else if (retryCount < maxRetries - 1) {
                  retryCount++;
                  script.remove();
                  setTimeout(loadGoogleScript, 2000);
                } else {
                  setError('Error inicializando Google Sign-In');
                }
              }
            }, isWebView() ? 2000 : 1000);
          }
        };
        
        checkAPI();
      };
      
      script.onerror = () => {
        console.error('❌ Error cargando script');
        if (mounted) {
          if (retryCount < maxRetries - 1) {
            retryCount++;
            setTimeout(loadGoogleScript, 2000);
          } else {
            setError('Error de conexión. Verifica tu internet.');
          }
        }
      };
      
      // Timeout de seguridad
      loadTimeout = setTimeout(() => {
        if (mounted && !window.google?.accounts?.id) {
          console.log('⏰ Timeout en carga de script');
          if (retryCount < maxRetries - 1) {
            retryCount++;
            script.remove();
            setTimeout(loadGoogleScript, 1000);
          } else {
            setError('Timeout cargando Google Sign-In. Recarga la página.');
          }
        }
      }, timeoutDuration);
      
      document.head.appendChild(script);
    };

    // Iniciar carga con delay para WebView
    setTimeout(loadGoogleScript, isWebView() ? 500 : 100);

    return () => {
      mounted = false;
      if (loadTimeout) clearTimeout(loadTimeout);
    };
  }, []);

  const handleGoogleSignIn = async () => {
    if (!scriptReady || isLoading) return;

    try {
      setIsLoading(true);
      setError('');

      console.log('🚀 Iniciando Google Identity Services...');

      // Detectar WebView
      const isWebView = () => {
        const ua = navigator.userAgent;
        return ua.includes('wv') || ua.includes('WebView') || 
               window.navigator.standalone || 
               window.matchMedia('(display-mode: standalone)').matches;
      };

      // Timeout más corto para WebView (5 segundos)
      const timeoutDuration = isWebView() ? 8000 : 12000;
      
      const resetTimeout = setTimeout(() => {
        console.log('⏰ Timeout - reseteando estado...');
        setIsLoading(false);
        setError('Timeout - intenta de nuevo');
        
        // Cancelar Google ID si está activo
        if (window.google?.accounts?.id) {
          try {
            window.google.accounts.id.cancel();
          } catch (e) {
            console.log('ℹ️ No se pudo cancelar Google ID');
          }
        }
      }, timeoutDuration);

      // Client ID
      const isDev = window.location.hostname === 'localhost';
      const clientId = isDev 
        ? "831420252741-4191330gjs69hkm4jr55rig3d8ouas0f.apps.googleusercontent.com"
        : "108242889910-n3ptem16orktkl0klv8onlttfl83r1ul.apps.googleusercontent.com";

      console.log('🆔 Using Client ID:', clientId.substring(0, 20) + '...');

      // Verificar que Google esté realmente disponible
      if (!window.google?.accounts?.id) {
        clearTimeout(resetTimeout);
        throw new Error('Google Identity Services no disponible');
      }

      // Crear popup para selección de cuenta
      const popup = window.open(
        '',
        'googleSignIn',
        'width=500,height=700,scrollbars=yes,resizable=yes,top=100,left=' + 
        (window.screen.width / 2 - 250)
      );

      if (!popup) {
        clearTimeout(resetTimeout);
        throw new Error('Popup bloqueado. Permite popups para este sitio.');
      }

      // Configuración con callback
      const config = {
        client_id: clientId,
        auto_select: false,
        cancel_on_tap_outside: false,
        callback: async (credentialResponse) => {
          try {
            clearTimeout(resetTimeout);
            popup.close(); // Cerrar popup
            console.log('✅ Credential recibido');
            
            // Validar credential
            if (!credentialResponse?.credential) {
              throw new Error('Credential inválido recibido');
            }
            
            console.log('📤 Enviando al backend...');
            
            // Enviar al backend con timeout
            const controller = new AbortController();
            const fetchTimeout = setTimeout(() => controller.abort(), 15000);
            
            const response = await fetch('https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/google', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ idToken: credentialResponse.credential }),
              signal: controller.signal
            });

            clearTimeout(fetchTimeout);

            if (!response.ok) {
              const errorText = await response.text();
              console.error('❌ Backend error:', response.status, errorText);
              throw new Error(`Error del servidor: ${response.status}`);
            }

            const data = await response.json();
            
            if (!data.success || !data.token) {
              console.error('❌ Invalid backend response:', data);
              throw new Error('Token inválido del servidor');
            }

            console.log('✅ Autenticación exitosa');
            
            // Guardar en localStorage
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user || {}));
            localStorage.setItem('lastUser', data.user?.email || '');
            
            // Crear sesión móvil
            const session = {
              user: data.user || {},
              token: data.token,
              expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
              created: new Date().toISOString(),
              provider: 'google'
            };
            
            localStorage.setItem('bisonte_mobile_session', JSON.stringify(session));
            
            console.log('🎉 Redirigiendo a home...');
            
            // Limpiar estado antes de redireccionar
            setIsLoading(false);
            
            // Para WebView, usar replace en lugar de href
            if (isWebView()) {
              window.location.replace('/home');
            } else {
              window.location.href = '/home';
            }
            
          } catch (error) {
            clearTimeout(resetTimeout);
            popup.close();
            console.error('❌ Error en callback:', error);
            localStorage.setItem('google_signin_error', error.message);
            setError('Error procesando respuesta: ' + error.message);
            setIsLoading(false);
          }
        }
      };

      // Inicializar Google ID
      window.google.accounts.id.initialize(config);

      // Escribir contenido del popup con botón de Google
      popup.document.write(`
        <html>
          <head>
            <title>Iniciar sesión con Google</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                display: flex; 
                flex-direction: column;
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-align: center;
              }
              .container {
                background: white;
                padding: 2rem;
                border-radius: 16px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                color: #333;
                max-width: 400px;
                width: 90%;
              }
              h2 { 
                margin-bottom: 1rem; 
                color: #333;
                font-size: 1.5rem;
                font-weight: 600;
              }
              .subtitle {
                color: #666;
                margin-bottom: 2rem;
                font-size: 0.9rem;
              }
              #googleButton { 
                margin: 1rem 0; 
                display: flex;
                justify-content: center;
              }
              .footer {
                margin-top: 1rem;
                color: #888;
                font-size: 0.8rem;
              }
            </style>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
          </head>
          <body>
            <div class="container">
              <h2>🔐 Iniciar sesión</h2>
              <p class="subtitle">Selecciona tu cuenta de Google para continuar</p>
              <div id="googleButton"></div>
              <p class="footer">Se abrirá una ventana para elegir tu cuenta</p>
            </div>
          </body>
        </html>
      `);

      // Esperar a que se cargue el script en el popup y renderizar el botón
      setTimeout(() => {
        if (popup.window.google?.accounts?.id) {
          popup.window.google.accounts.id.initialize(config);
          popup.window.google.accounts.id.renderButton(
            popup.document.getElementById('googleButton'),
            {
              theme: 'outline',
              size: 'large',
              type: 'standard',
              text: 'signin_with',
              shape: 'rectangular',
              width: 320,
              logo_alignment: 'left'
            }
          );
        } else {
          console.log('⚠️ Google no disponible en popup, reintentando...');
          setTimeout(() => {
            if (popup.window.google?.accounts?.id) {
              popup.window.google.accounts.id.initialize(config);
              popup.window.google.accounts.id.renderButton(
                popup.document.getElementById('googleButton'),
                {
                  theme: 'outline',
                  size: 'large',
                  type: 'standard',
                  text: 'signin_with',
                  shape: 'rectangular',
                  width: 320
                }
              );
            } else {
              popup.close();
              clearTimeout(resetTimeout);
              setError('Error cargando Google en popup');
              setIsLoading(false);
            }
          }, 2000);
        }
      }, 1000);

      // Verificar si el popup fue cerrado manualmente
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed);
          clearTimeout(resetTimeout);
          console.log('🚪 Popup cerrado por usuario');
          setError('Inicio de sesión cancelado');
          setIsLoading(false);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error general:', error);
      localStorage.setItem('google_signin_error', error.message);
      setError('Error: ' + error.message);
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    if (error) return 'Reintentar';
    if (!scriptReady) return 'Cargando...';
    if (isLoading) return 'Autenticando...';
    return 'Continuar con Google';
  };

  const resetComponent = () => {
    console.log('🔄 Reset manual del componente');
    setIsLoading(false);
    setError('');
    
    // Cancelar Google ID
    if (window.google?.accounts?.id) {
      try {
        window.google.accounts.id.cancel();
      } catch (e) {
        console.log('ℹ️ No hay sesión de Google para cancelar');
      }
    }
    
    // Limpiar errores
    localStorage.removeItem('google_signin_error');
  };

  const isDisabled = !scriptReady || isLoading;

  return (
    <div className="w-full">
      <button
        onClick={handleGoogleSignIn}
        disabled={isDisabled}
        className={`w-full font-semibold py-3 px-4 border rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-3 ${
          error 
            ? 'bg-red-50 hover:bg-red-100 text-red-700 border-red-300'
            : isDisabled
            ? 'bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed'
            : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
        }`}
      >
        {isLoading || !scriptReady ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600"></div>
        ) : error ? (
          <span>🔄</span>
        ) : (
          <GoogleIcon />
        )}
        <span>{getButtonText()}</span>
      </button>
      
      {error && (
        <div className="mt-2 text-center">
          <p className="text-red-600 text-sm">{error}</p>
          <button
            onClick={resetComponent}
            className="text-xs text-blue-600 hover:text-blue-800 mt-1"
          >
            🔄 Limpiar y reiniciar
          </button>
        </div>
      )}
      
      {isLoading && (
        <div className="mt-2 text-center">
          <p className="text-gray-500 text-xs">
            Abriendo popup de Google... (se cancelará automáticamente en {
              navigator.userAgent.includes('wv') || navigator.userAgent.includes('WebView') ? '8' : '12'
            } segundos)
          </p>
          <button
            onClick={resetComponent}
            className="text-xs text-gray-600 hover:text-gray-800 mt-1"
          >
            ❌ Cancelar
          </button>
        </div>
      )}
      
      {!scriptReady && !error && (
        <p className="text-gray-500 text-xs mt-2 text-center">
          {navigator.userAgent.includes('wv') || navigator.userAgent.includes('WebView') 
            ? 'Cargando en WebView...' 
            : 'Cargando Google Sign-In...'
          }
        </p>
      )}
    </div>
  );
}
