"use client";
import { useEffect, useState } from 'react';
import { useMobileSession } from '@/hooks/useMobileSession';
import HomeModular from '@/components/home/HomeModular';
import LoginForm from '@/components/LoginForm';

// Componente de fallback estático que se ve bien
function StaticFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      {/* Header con logo */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="bg-white rounded-full p-4 shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Título principal */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Bisonte Logística
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Tu servicio de envíos en Bogotá
        </p>
      </div>

      {/* Login Form */}
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
            <p className="text-gray-600">Accede a tu cuenta</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="button"
              className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:from-teal-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
            >
              Iniciar Sesión
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">O continúa con</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold shadow-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">¿No tienes cuenta? </span>
            <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
              Regístrate aquí
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pb-8">
        <p className="text-blue-100 text-sm">
          © 2025 Bisonte Logística. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default function MobilePage() {
  const [showStatic, setShowStatic] = useState(true);
  const { data: session, loading } = useMobileSession();

  useEffect(() => {
    // Configurar para móvil
    if (typeof window !== 'undefined') {
      // Prevenir zoom en inputs
      document.addEventListener('touchstart', {}, true);
      
      // Configurar viewport para móvil
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }

      // Mostrar componente dinámico después de un delay para permitir hidratación
      const timer = setTimeout(() => {
        setShowStatic(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // En build estático o mientras carga, mostrar versión estática
  if (showStatic || loading) {
    return <StaticFallback />;
  }

  return session ? <HomeModular /> : <LoginForm />;
}
