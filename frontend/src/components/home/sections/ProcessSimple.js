"use client";

export function ProcessSimple() {
  const steps = [
    { num: '01', title: 'Cotiza', desc: 'Ingresa datos básicos del envío' },
    { num: '02', title: 'Confirma', desc: 'Elige tu opción preferida' },
    { num: '03', title: 'Envía', desc: 'Nosotros nos encargamos' }
  ];
  return (
    <section className="w-full px-3 sm:px-4 md:px-6 mt-8">
      <div className="bg-[#23272b]/90 rounded-3xl p-6 sm:p-8 border-2 border-[#41e0b3]/20 shadow-xl shadow-[#41e0b3]/10 animate-fade-in-up">
        <div className="text-center mb-8">
          <h2 className="text-[#41e0b3] font-bold text-xl mb-2">Proceso simple</h2>
          <p className="text-gray-400 text-sm font-light">En solo 3 pasos</p>
        </div>
        <div className="space-y-6">
          {steps.map((s,i)=>(
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#41e0b3] to-[#2bbd8c] rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 animate-bounce">{s.num}</div>
              <div className="pt-1">
                <h4 className="font-semibold text-white text-sm mb-1">{s.title}</h4>
                <p className="text-gray-300 text-xs font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSimple;
