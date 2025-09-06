"use client";
import Link from 'next/link';

function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#18191A] via-[#1f2022] to-[#18191A] py-6 md:py-8">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-[#18191A]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#41e0b3]/20 shadow-xl">
          {/* Título principal */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Envíos más <span className="text-[#41e0b3]">inteligentes</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cotiza, crea y sigue tus envíos desde un solo lugar.
              <br />
              <span className="text-[#41e0b3] font-medium">Rápido, seguro y económico</span>
            </p>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <Link 
              href="/cotizador"
              className="w-full bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:brightness-110 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Cotizar Ahora
            </Link>
            
            <Link 
              href="/misenvios"
              className="w-full bg-[#23272b] text-[#41e0b3] font-semibold py-3 px-6 rounded-xl border border-[#41e0b3]/40 hover:bg-[#41e0b3]/10 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
              Mis Envíos
            </Link>
          </div>

          {/* Características rápidas */}
          <div className="mt-6 pt-4 border-t border-[#41e0b3]/20">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#41e0b3] rounded-full"></div>
                <span>Seguimiento</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#41e0b3] rounded-full"></div>
                <span>Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#41e0b3] rounded-full"></div>
                <span>Nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exportaciones múltiples para máxima compatibilidad
export default HeroSection;
export { HeroSection };


