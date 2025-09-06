'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useMobileSession } from '@/hooks/useMobileSession';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isClient, setIsClient] = useState(false);
  const mobileSession = useMobileSession();

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mantener compatibilidad con código existente
  const contextValue = {
    ...mobileSession,
    user: mobileSession.data?.user,
    isLoading: !isClient || mobileSession.loading,
    isAuthenticated: isClient && mobileSession.status === 'authenticated'
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    // Durante SSR, devolver un objeto por defecto en lugar de error
    if (typeof window === 'undefined') {
      return {
        user: null,
        isLoading: true,
        isAuthenticated: false,
        session: null,
        status: 'loading'
      };
    }
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}