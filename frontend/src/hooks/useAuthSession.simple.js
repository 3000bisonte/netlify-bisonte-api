"use client";
import { useSession } from 'next-auth/react';

/**
 * Hook simplificado de autenticación usando solo NextAuth
 */
export function useAuthSession() {
  const { data: session, status } = useSession();
  
  return {
    session,
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    loading: status === 'loading',
    error: null
  };
}

export default useAuthSession;
