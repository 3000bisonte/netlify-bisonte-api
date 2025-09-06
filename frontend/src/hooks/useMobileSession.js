"use client";

import { useState, useEffect, useCallback } from 'react';

// Función de utilidad para obtener datos de localStorage con logging
const getFromLocalStorage = (key) => {
  try {
    console.log(`🔍 GETTING from localStorage: ${key}`);
    const value = localStorage.getItem(key);
    console.log(`📦 Value for ${key}:`, value ? `${value.substring(0, 50)}...` : 'NULL');
    return value;
  } catch (error) {
    console.error(`❌ Error getting ${key} from localStorage:`, error);
    return null;
  }
};

// Función para parsear JSON con manejo de errores
const safeJsonParse = (jsonString, fallback = null) => {
  try {
    return jsonString ? JSON.parse(jsonString) : fallback;
  } catch (error) {
    console.error('❌ Error parsing JSON:', error);
    return fallback;
  }
};

// Función para crear sesión desde localStorage
const createSessionFromStorage = () => {
  console.log('🔄 CREATING SESSION FROM STORAGE - Checking all sources...');
  
  // Verificar múltiples fuentes de datos
  const sources = [
    'bisonte_mobile_session',
    'google_auth_data', 
    'session_data',
    'user'
  ];
  
  sources.forEach(source => {
    const data = getFromLocalStorage(source);
    console.log(`📊 Source ${source}:`, data ? 'FOUND' : 'EMPTY');
  });

  // Intentar con bisonte_mobile_session primero
  const mobileSession = getFromLocalStorage('bisonte_mobile_session');
  if (mobileSession) {
    const sessionData = safeJsonParse(mobileSession);
    if (sessionData && sessionData.user) {
      console.log('✅ Found valid mobile session:', sessionData);
      return sessionData;
    }
  }

  // Intentar con google_auth_data
  const googleAuthData = getFromLocalStorage('google_auth_data');
  if (googleAuthData) {
    const authData = safeJsonParse(googleAuthData);
    if (authData && authData.user) {
      console.log('✅ Found valid Google auth data:', authData);
      return {
        user: authData.user,
        token: authData.tokens?.access_token,
        refreshToken: authData.tokens?.refresh_token,
        expires: authData.expires_at ? new Date(authData.expires_at).toISOString() : null,
        created: new Date().toISOString()
      };
    }
  }

  // Intentar con session_data
  const sessionData = getFromLocalStorage('session_data');
  if (sessionData) {
    const sData = safeJsonParse(sessionData);
    if (sData && sData.email) {
      console.log('✅ Found valid session data:', sData);
      return {
        user: {
          id: sData.id,
          email: sData.email,
          name: sData.name,
          picture: sData.picture
        },
        token: sData.access_token,
        refreshToken: sData.refresh_token,
        expires: sData.expires_at ? new Date(sData.expires_at).toISOString() : null,
        created: new Date().toISOString()
      };
    }
  }

  // Intentar construir desde datos básicos
  const user = getFromLocalStorage('user');
  const authToken = getFromLocalStorage('authToken');
  
  if (user && authToken) {
    const userData = safeJsonParse(user);
    if (userData && userData.email) {
      console.log('✅ Building session from basic data:', userData);
      return {
        user: userData,
        token: authToken,
        refreshToken: getFromLocalStorage('refreshToken'),
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        created: new Date().toISOString()
      };
    }
  }

  // Fallback: construir desde google_id_token si existe y no tenemos ninguna otra fuente
  try {
    const idToken = getFromLocalStorage('google_id_token');
    if (idToken) {
      console.log('🔁 Intentando fallback con google_id_token...');
      const parts = idToken.split('.');
      if (parts.length === 3) {
        try {
          const payloadRaw = parts[1].replace(/-/g,'+').replace(/_/g,'/');
          const pad = payloadRaw.length % 4; // Padding base64
          const payloadB64 = pad ? payloadRaw + '='.repeat(4-pad) : payloadRaw;
          const payload = JSON.parse(atob(payloadB64));
          console.log('🔎 Decoded id_token payload keys:', Object.keys(payload || {}));
          if (payload && payload.email) {
            const sessionFromId = {
              user: {
                id: payload.sub || payload.user_id || payload.email,
                email: payload.email,
                name: payload.name || [payload.given_name, payload.family_name].filter(Boolean).join(' ') || payload.email.split('@')[0],
                picture: payload.picture || payload.picture_url || null,
              },
              token: idToken,
              refreshToken: null,
              expires: payload.exp ? new Date(payload.exp * 1000).toISOString() : new Date(Date.now() + 55 * 60 * 1000).toISOString(),
              created: new Date().toISOString(),
              provider: 'google-id-token'
            };
            try { localStorage.setItem('bisonte_mobile_session', JSON.stringify(sessionFromId)); } catch {}
            console.log('✅ Sesión creada y persistida desde google_id_token');
            return sessionFromId;
          } else {
            console.warn('⚠️ Payload id_token sin email; no se puede crear sesión.');
          }
        } catch (e) {
          console.warn('⚠️ Error decodificando id_token para fallback:', e.message);
        }
      } else {
        console.warn('⚠️ id_token con formato inesperado (no es JWT de 3 partes)');
      }
    } else {
      console.log('ℹ️ No hay google_id_token en storage para fallback');
    }
  } catch (e) {
    console.warn('⚠️ Excepción en fallback google_id_token:', e.message);
  }

  console.log('❌ No valid session data found in any source');
  return null;
};

export const useMobileSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para inspeccionar localStorage completo
  const inspectLocalStorage = useCallback(() => {
    console.log('🔍 === COMPLETE LOCALSTORAGE INSPECTION ===');
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`📝 ${key}:`, value ? `${value.substring(0, 100)}${value.length > 100 ? '...' : ''}` : 'empty');
      }
    } catch (error) {
      console.error('❌ Error inspecting localStorage:', error);
    }
    console.log('🔍 === END LOCALSTORAGE INSPECTION ===');
  }, []);

  // Función para verificar sesión
  const checkSession = useCallback(() => {
    console.log('🔄 CHECKING SESSION...');
    
    try {
      inspectLocalStorage();
      
      const sessionData = createSessionFromStorage();
      
      if (sessionData) {
        console.log('✅ Session found and validated:', sessionData);
        setSession(sessionData);
      } else {
        console.log('❌ No valid session found');
        setSession(null);
      }
    } catch (error) {
      console.error('❌ Error checking session:', error);
      setSession(null);
    } finally {
      setLoading(false);
      console.log('🏁 Session check completed');
    }
  }, [inspectLocalStorage]);

  // Función de logout
  const signOut = useCallback(() => {
    console.log('🚪 SIGNING OUT...');
    
    try {
      // Limpiar todos los datos de autenticación
      const keysToRemove = [
        'bisonte_mobile_session',
        'google_auth_data',
        'session_data',
        'authToken',
        'refreshToken',
        'user',
        'user_email',
        'user_name',
        'auth_timestamp',
        'auth_success',
        'oauth_completed'
      ];
      
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key);
          console.log(`🗑️ Removed: ${key}`);
        } catch (error) {
          console.error(`❌ Error removing ${key}:`, error);
        }
      });
      
      setSession(null);
      console.log('✅ Logout completed');
      
    } catch (error) {
      console.error('❌ Error during logout:', error);
    }
  }, []);

  // SignIn manual para completar sesión desde LoginForm u otros flujos
  const signIn = useCallback((userData, opts = {}) => {
    try {
      console.log('🚪 SIGNING IN (manual)...', userData);
      if (!userData || !userData.email) {
        console.warn('⚠️ signIn llamado sin email válido');
        return;
      }
      const sessionObject = {
        user: {
          id: userData.id || userData.sub || userData.email,
          email: userData.email,
            name: userData.name || userData.email.split('@')[0],
          picture: userData.picture || userData.avatar || null,
          role: userData.role
        },
        token: opts.token || getFromLocalStorage('authToken') || null,
        refreshToken: opts.refreshToken || getFromLocalStorage('refreshToken') || null,
        created: new Date().toISOString(),
        provider: opts.provider || 'manual'
      };
      try { localStorage.setItem('bisonte_mobile_session', JSON.stringify(sessionObject)); } catch {}
      setSession(sessionObject);
      console.log('✅ signIn completado');
    } catch (e) {
      console.error('❌ Error en signIn:', e);
    }
  }, []);

  // Hook principal de efecto
  useEffect(() => {
    console.log('🚀 useMobileSession HOOK INITIALIZED');
    
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') {
      console.log('⚠️ Running on server, skipping session check');
      return;
    }

    // Migración rápida: si existe google_id_token + auth_success pero aún no hay bisonte_mobile_session, crearla antes de check
    try {
      const existing = localStorage.getItem('bisonte_mobile_session');
      const idTok = localStorage.getItem('google_id_token');
      const authSuccess = localStorage.getItem('auth_success');
      if (!existing && idTok && authSuccess) {
        console.log('🧩 Migración: creando sesión desde google_id_token antes de checkSession');
        const parts = idTok.split('.');
        if (parts.length === 3) {
          try {
            const raw = parts[1].replace(/-/g,'+').replace(/_/g,'/');
            const pad = raw.length % 4; const padded = pad ? raw + '='.repeat(4-pad) : raw;
            const payload = JSON.parse(atob(padded));
            if (payload?.email) {
              const provisional = {
                user: {
                  id: payload.sub || payload.email,
                  email: payload.email,
                  name: payload.name || [payload.given_name, payload.family_name].filter(Boolean).join(' ') || payload.email.split('@')[0],
                  picture: payload.picture || null
                },
                token: idTok,
                refreshToken: null,
                provider: 'google-id-token',
                created: new Date().toISOString(),
                expires: payload.exp ? new Date(payload.exp * 1000).toISOString() : new Date(Date.now() + 55*60*1000).toISOString()
              };
              try { localStorage.setItem('bisonte_mobile_session', JSON.stringify(provisional)); } catch {}
              console.log('✅ Sesión provisional migrada');
            } else {
              console.warn('⚠️ Payload sin email en migración');
            }
          } catch (e) { console.warn('⚠️ Migración falló decodificando id_token:', e.message); }
        }
      } else {
        if (existing) console.log('ℹ️ Migración omitida: ya existe bisonte_mobile_session');
        if (!idTok) console.log('ℹ️ Migración omitida: no hay google_id_token');
        if (!authSuccess) console.log('ℹ️ Migración omitida: falta auth_success');
      }
    } catch {}

    // Verificar sesión inmediatamente (después de migración)
    checkSession();

    // Escuchar cambios en localStorage (para múltiples pestañas)
    const handleStorageChange = (e) => {
      console.log('📢 Storage changed:', e.key, e.newValue ? 'SET' : 'REMOVED');
      if (e.key && e.key.includes('session') || e.key === 'authToken' || e.key === 'user') {
        console.log('🔄 Session-related storage changed, rechecking...');
        checkSession();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [checkSession]);

  // Reintento tardío si no se creó la sesión por race conditions
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (session) return;
    const idTok = (()=>{ try { return localStorage.getItem('google_id_token'); } catch { return null; } })();
    if (!idTok) return;
    const existing = (()=>{ try { return localStorage.getItem('bisonte_mobile_session'); } catch { return null; } })();
    if (existing) return;
    const timer = setTimeout(() => {
      console.log('⏱️ Reintento tardío: creando sesión desde google_id_token (segunda pasada)');
      try {
        const parts = idTok.split('.');
        if (parts.length === 3) {
          const raw = parts[1].replace(/-/g,'+').replace(/_/g,'/');
          const pad = raw.length % 4; const padded = pad ? raw + '='.repeat(4-pad) : raw;
          const payload = JSON.parse(atob(padded));
          if (payload?.email) {
            const late = {
              user: {
                id: payload.sub || payload.email,
                email: payload.email,
                name: payload.name || [payload.given_name, payload.family_name].filter(Boolean).join(' ') || payload.email.split('@')[0],
                picture: payload.picture || null
              },
              token: idTok,
              refreshToken: null,
              provider: 'google-id-token',
              created: new Date().toISOString(),
              expires: payload.exp ? new Date(payload.exp * 1000).toISOString() : new Date(Date.now() + 55*60*1000).toISOString()
            };
            try { localStorage.setItem('bisonte_mobile_session', JSON.stringify(late)); } catch {}
            setSession(late);
            console.log('✅ Sesión creada en reintento tardío');
          } else {
            console.warn('⚠️ Reintento tardío: payload sin email');
          }
        }
      } catch (e) {
        console.warn('⚠️ Reintento tardío falló:', e.message);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [session]);

  // Intercambio automático de id_token -> JWT backend cuando solo hay sesión provisional
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!session) return;
    // Evitar múltiples intentos simultáneos
    if (session.__backendExchangeInProgress) return;

    const hasBackend = (()=>{ try { return !!localStorage.getItem('auth_backend'); } catch { return false; } })();
    const needsExchange = session.provider === 'google-id-token' && !hasBackend;
    if (!needsExchange) return;

    console.log('🔄 Detectada sesión provisional google-id-token. Iniciando intercambio con backend para obtener JWT interno...');

    let aborted = false;
    const exchange = async () => {
      try {
        // Marcar flag para no repetir
        setSession(prev => prev ? { ...prev, __backendExchangeInProgress: true } : prev);
        const idTok = localStorage.getItem('google_id_token');
        if (!idTok) {
          console.warn('⚠️ No hay google_id_token disponible para intercambio');
          return;
        }
        
        // NOTA: Comentado temporalmente - usar NextAuth en lugar de llamadas directas al backend
        // const resp = await fetch('https://bisonte-api.vercel.app/api/auth/google', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ idToken: idTok })
        // });
        
        console.log('[useMobileSession] Usando NextAuth en lugar de llamadas directas al backend');
        
        // Para WebView, la sesión ya está validada por NextAuth, no necesitamos intercambio adicional
        setSession(prev => prev ? { ...prev, __backendExchangeInProgress: false, __backendExchangeComplete: true } : prev);
        localStorage.setItem('auth_backend', 'true'); // Marcar como completado
        return;
        
      } catch (e) {
        console.warn('⚠️ Error en intercambio backend (deshabilitado):', e.message);
      }
    };
    // Pequeño delay para permitir que otros datos terminen de persistirse
    const t = setTimeout(exchange, 600);
    return () => { aborted = true; clearTimeout(t); };
  }, [session]);

  // Reconciliación: COMENTADO - evitar llamadas al backend API que causan 404
  /*
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!session) return;
    let aborted = false;
    try {
      const idTok = localStorage.getItem('google_id_token');
      const authBackend = localStorage.getItem('auth_backend');
      if (!idTok || !authBackend) return; // nada que reconciliar
      const parts = idTok.split('.');
      if (parts.length !== 3) return;
      const raw = parts[1].replace(/-/g,'+').replace(/_/g,'/');
      const pad = raw.length % 4; const padded = pad ? raw + '='.repeat(4-pad) : raw;
      let payload;
      try { payload = JSON.parse(atob(padded)); } catch { return; }
      const emailFromId = payload?.email;
      if (!emailFromId) return;
      if (session.user?.email && session.user.email === emailFromId) return; // consistente
      // Evitar flood de logs: solo registrar una vez por mismatch distinto
      if (!session.__lastMismatchEmail || session.__lastMismatchEmail !== emailFromId) {
        console.warn('[useMobileSession] ⚠️ Mismatch de emails entre sesión y google_id_token. Sesión:', session.user?.email, 'ID Token:', emailFromId);
      }
      // Evitar relanzar si ya estamos corrigiendo
      if (session.__reconciling || session.__reconciledOnce) return; // no repetir indefinidamente
      setSession(prev => prev ? { ...prev, __reconciling: true, __lastMismatchEmail: emailFromId } : prev);
      const fix = async () => {
        try {
          const resp = await fetch('https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: idTok })
          });
          console.log('[useMobileSession] Re-exchange para reconciliar:', resp.status);
          if (!resp.ok) {
            if (resp.status === 400) {
              setSession(prev => prev ? { ...prev, __reconciling: false, __reconciledOnce: true } : prev);
            }
            return;
          }
            const data = await resp.json();
          if (aborted) return;
          if (data?.success && data.token && data.user?.email) {
            try {
              localStorage.setItem('authToken', data.token);
              if (data.refreshToken) localStorage.setItem('refreshToken', data.refreshToken);
              localStorage.setItem('user', JSON.stringify(data.user));
              localStorage.setItem('auth_backend', 'true');
              const updated = {
                ...session,
                user: data.user,
                token: data.token,
                refreshToken: data.refreshToken || session.refreshToken || null,
                provider: 'google-backend',
                __reconciling: false,
                __reconciledOnce: true
              };
              try { localStorage.setItem('bisonte_mobile_session', JSON.stringify(updated)); } catch {}
              setSession(updated);
              console.log('✅ Reconciliación de sesión completada');
              try { ['passwordRegistro','nombreRegistro','emailRegistro'].forEach(k=> localStorage.removeItem(k)); } catch {}
            } catch {}
          }
        } catch (e) {
          console.warn('[useMobileSession] Reconciliación falló:', e.message);
          setSession(prev => prev ? { ...prev, __reconciling: false } : prev);
        }
      };
      // retraso corto
      setTimeout(fix, 500);
      return () => { aborted = true; };
    } catch {}
  }, [session]);
  */

  // Función de utilidad para debug
  const debugSession = useCallback(() => {
    console.log('🐛 === SESSION DEBUG INFO ===');
    console.log('Current session:', session);
    console.log('Loading state:', loading);
    inspectLocalStorage();
    console.log('🐛 === END DEBUG INFO ===');
  }, [session, loading, inspectLocalStorage]);

  // Retornar la interfaz del hook
  return {
    data: session,
    loading,
    signOut,
  signIn,
    checkSession,
    debugSession,
    inspectLocalStorage
  };
};
