'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    if (status === 'loading') {
      setLoading(true);
      return;
    }

    if (session?.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }
    
    setLoading(false);
  }, [session, status]);

  const login = async (credentials) => {
    try {
      setLoading(true);
      
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (result?.error) {
        console.error('Login error:', result.error);
        throw new Error(result.error);
      }

      if (result?.ok) {
        // Esperar a que la sesión se actualice
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/home');
        return { success: true };
      }

      throw new Error('Login failed');
    } catch (error) {
      console.error('Auth login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut({ redirect: false });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    user,
    loading,
    isAuthenticated: !!user,
    isLoading: loading,
    login,
    logout,
    session,
    status
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
        loading: true,
        isAuthenticated: false,
        isLoading: true,
        session: null,
        status: 'loading',
        login: async () => {},
        logout: async () => {}
      };
    }
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}