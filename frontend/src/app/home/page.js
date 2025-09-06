"use client";
import dynamic from 'next/dynamic';
import HomeModular from '@/components/home/HomeModular';

const ClientErrorBoundary = dynamic(()=>import('@/components/ClientErrorBoundary'), { ssr:false });

export default function HomePage(){
  return (
    <ClientErrorBoundary>
      <HomeModular />
    </ClientErrorBoundary>
  );
}

