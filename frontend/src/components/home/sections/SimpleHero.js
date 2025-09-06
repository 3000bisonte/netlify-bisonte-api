import React from 'react';
import Link from 'next/link';

// Sección: SimpleHero - Componente Hero alineado exactamente con el slider
const Sección = () => {
  return (
    <section className="w-full relative py-6 sm:py-8 md:py-10 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191A] via-[#1f2022] to-[#18191A]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#41e0b3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#2bbd8c]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Contenedor que ocupa todo el ancho como el nav inferior */}
      <div className="relative w-full px-3 sm:px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Fondo del card con efectos */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#18191A]/90 via-[#1f2022]/90 to-[#18191A]/90 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#41e0b3]/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#41e0b3]/50 to-transparent"></div>
          
          {/* Contenido adaptativo para pantallas pequeñas */}
          <div className="relative p-4 sm:p-6 md:p-8">
            {/* Título optimizado para pantallas pequeñas */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight tracking-tight">
                  Envíos más{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#41e0b3] via-[#2bbd8c] to-[#41e0b3] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
                      inteligentes
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] rounded-full transform scale-x-0 animate-scale-x"></div>
                  </span>
                </h1>
              </div>
              
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Cotiza y gestiona tus envíos desde un solo lugar.
                <br />
                <span className="text-[#41e0b3] font-semibold bg-[#41e0b3]/10 px-2 py-1 rounded-full inline-block mt-2 text-[10px] sm:text-xs md:text-sm">
                  Rápido, seguro y al mejor precio
                </span>
              </p>
            </div>

            {/* Botón adaptativo para todas las pantallas */}
            <div className="text-center">
              <Link 
                href="/cotizador"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#41e0b3] via-[#2bbd8c] to-[#41e0b3] bg-[length:200%_100%] text-white font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl hover:shadow-[#41e0b3]/30 transition-all duration-500 text-sm sm:text-base md:text-lg overflow-hidden animate-gradient-x w-full sm:w-auto"
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Icono adaptativo */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1.5 sm:mr-2 md:mr-3 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Cotizar Ahora
                </span>
                
                {/* Indicador adaptativo */}
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-ping"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export por defecto con el nombre Sección
export default Sección;
