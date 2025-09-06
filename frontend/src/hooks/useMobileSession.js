"use client";

import { useState, useEffect, useCallback } from 'react';

// Función de utilidad para obtener datos de localStorage
const getFromLocalStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

// Función para parsear JSON con manejo de errores
const safeJsonParse = (jsonString, fallback = null) => {
  try {
    return jsonString ? JSON.parse(jsonString) : fallback;
  } catch (error) {
    return fallback;
  }
};

// Función para crear sesión desde localStorage
const createSessionFromStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  // Intentar con bisonte_mobile_session primero
  const mobileSession = getFromLocalStorage('bisonte_mobile_session');
  if (mobileSession) {
    const sessionData = safeJsonParse(mobileSession);
    if (sessionData && sessionData.user) {
      return sessionData;
    }
  }

  // Intentar con google_auth_data
  const googleAuthData = getFromLocalStorage('google_auth_data');
  if (googleAuthData) {
    const authData = safeJsonParse(googleAuthData);
    if (authData && authData.user) {
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
    if (sData && sData.user) {
      return sData;
    }
  }

  // Intentar con datos básicos de usuario
  const userData = getFromLocalStorage('user');
  if (userData) {
    const user = safeJsonParse(userData);
    if (user && user.email) {
      return {
        user,
        token: null,
        refreshToken: null,
        expires: null,
        created: new Date().toISOString()
      };
    }
  }

  return null;
};

export function useMobileSession() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');
  const [loading, setLoading] = useState(true);

  // Función para verificar sesión
  const checkSession = useCallback(() => {
    if (typeof window === 'undefined') {
      setLoading(false);
      setStatus('unauthenticated');
      return;
    }

    const sessionData = createSessionFromStorage();
    if (sessionData) {
      setData(sessionData);
      setStatus('authenticated');
    } else {
      setData(null);
      setStatus('unauthenticated');
    }
    setLoading(false);
  }, []);

  // Función para cerrar sesión
  const signOut = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Limpiar localStorage
    const keysToRemove = [
      'bisonte_mobile_session',
      'google_auth_data',
      'session_data',
      'user',
      'google_id_token',
      'google_access_token',
      'google_refresh_token'
    ];

    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        // Ignorar errores
      }
    });

    setData(null);
    setStatus('unauthenticated');
    setLoading(false);
  }, []);

  // Función para iniciar sesión manual
  const signIn = useCallback((userData, tokens = null) => {
    if (typeof window === 'undefined') return;

    const sessionData = {
      user: userData,
      token: tokens?.access_token,
      refreshToken: tokens?.refresh_token,
      expires: tokens?.expires_at,
      created: new Date().toISOString()
    };

    try {
      localStorage.setItem('bisonte_mobile_session', JSON.stringify(sessionData));
    } catch (error) {
      // Error guardando, continuar sin persistir
    }

    setData(sessionData);
    setStatus('authenticated');
    setLoading(false);
  }, []);

  // Efecto para inicializar
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return {
    data,
    status,
    loading,
    signIn,
    signOut,
    update: checkSession
  };
}
