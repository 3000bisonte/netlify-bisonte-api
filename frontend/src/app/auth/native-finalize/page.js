"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Esta página no debe prerenderizarse
export const dynamic = 'force-dynamic';

export default function NativeFinalizePage() {
  const [status, setStatus] = useState('Finalizando autenticación nativa...');
  const router = useRouter();

  useEffect(() => {
    // Simple redirect para finalizar auth nativa
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Autenticación Exitosa
        </h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <p className="text-gray-700">
            {status}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Redirigiendo al inicio...
        </p>
      </div>
    </div>
  );
}
