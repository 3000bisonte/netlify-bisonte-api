"use client";

export function Benefits() {
  const items = [
    { title: 'Rapidez', desc: 'Entregas en 24-48 horas', icon: '⚡', gradient: 'from-[#41e0b3] via-[#2bbd8c] to-[#1a9970]' },
    { title: 'Ahorro', desc: 'Hasta 40% menos que otros', icon: '💰', gradient: 'from-[#41e0b3] via-[#2bbd8c] to-[#1a9970]' },
    { title: 'Seguridad', desc: 'Protección total garantizada', icon: '🛡️', gradient: 'from-[#41e0b3] via-[#2bbd8c] to-[#1a9970]' },
    { title: 'Cobertura', desc: 'Red nacional completa', icon: '🌎', gradient: 'from-[#41e0b3] via-[#2bbd8c] to-[#1a9970]' }
  ];
  
  return (
    <section className="w-full px-3 sm:px-4 md:px-6 mt-8 sm:mt-12">
      {/* Fondo decorativo */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#18191A]/50 via-[#1f2022]/30 to-[#18191A]/50 rounded-2xl sm:rounded-3xl blur-3xl"></div>
        
        {/* Contenedor principal optimizado para móvil */}
        <div className="relative bg-gradient-to-br from-[#18191A]/95 via-[#1f2022]/95 to-[#18191A]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#41e0b3]/30 shadow-2xl shadow-[#41e0b3]/10 overflow-hidden">
          
          {/* Efectos decorativos */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#41e0b3]/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#41e0b3]/5 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Header optimizado para móvil */}
          <div className="relative text-center py-5 sm:py-8 px-4 sm:px-6">
            <div className="mb-2 sm:mb-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                ¿Por qué elegir{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#41e0b3] via-[#2bbd8c] to-[#41e0b3] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
                    Bisonte
                  </span>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] rounded-full"></div>
                </span>
                ?
              </h2>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Ventajas que transforman tu experiencia de envíos
            </p>
          </div>
          
          {/* Grid de beneficios optimizado para móvil */}
          <div className="relative px-4 sm:px-6 pb-5 sm:pb-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {items.map((item, index) => (
                <div key={index} className="group relative">
                  {/* Fondo del card con efectos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#23272b]/90 to-[#1a1e22]/90 rounded-xl sm:rounded-2xl border border-[#41e0b3]/20 shadow-lg group-hover:shadow-[#41e0b3]/20 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#41e0b3]/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Contenido del card optimizado para móvil */}
                  <div className="relative p-3 sm:p-4 md:p-5 text-center">
                    {/* Icono con efectos premium */}
                    <div className="mb-3 sm:mb-4 relative">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-[#41e0b3]/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <span className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg">{item.icon}</span>
                      </div>
                      {/* Anillo decorativo */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-[#41e0b3]/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                    </div>
                    
                    {/* Texto del beneficio optimizado */}
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-white text-sm sm:text-base md:text-lg group-hover:text-[#41e0b3] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Indicador de hover */}
                    <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#41e0b3] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer decorativo optimizado para móvil */}
          <div className="relative px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#41e0b3]/10 rounded-full border border-[#41e0b3]/30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#41e0b3] rounded-full animate-pulse"></div>
                <span className="text-[#41e0b3] text-[10px] sm:text-xs md:text-sm font-medium">
                  Calidad garantizada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
