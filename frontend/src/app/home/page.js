"use client";
import dynamic from 'next/dynamic';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HomeModular from '@/components/home/HomeModular';

const ClientErrorBoundary = dynamic(()=>import('@/components/ClientErrorBoundary'), { ssr:false });

export default function HomePage(){
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <ClientErrorBoundary>
      <HomeModular />
    </ClientErrorBoundary>
  );
}

