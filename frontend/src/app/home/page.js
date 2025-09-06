"use client";
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HomeModular from '@/components/home/HomeModular';

const ClientErrorBoundary = dynamic(()=>import('@/components/ClientErrorBoundary'), { ssr:false });

export default function HomePage(){
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <ClientErrorBoundary>
      <HomeModular />
    </ClientErrorBoundary>
  );
}

