'use client';
import { createContext, useContext } from 'react';
import { useMobileSession } from '@/hooks/useMobileSession';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const mobileSession = useMobileSession();

  // Mantener compatibilidad con código existente
  const contextValue = {
  ...mobileSession,
  user: mobileSession.data?.user,
  isLoading: mobileSession.loading,
  isAuthenticated: mobileSession.status === 'authenticated'
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
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}