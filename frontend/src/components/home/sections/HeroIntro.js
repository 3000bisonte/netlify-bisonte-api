"use client";
import Link from 'next/link';

// Componente Hero simplificado y robusto
export default function HeroIntro() {
  return (
    <section className="w-full max-w-md mx-auto mt-6 bg-[#18191A] rounded-3xl p-6 border border-[#41e0b3]/30 shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
        Gestiona tus envíos con <span className="text-[#41e0b3]">facilidad</span>
      </h1>
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        Cotiza, crea y sigue tus envíos en un solo lugar. Todo optimizado para velocidad y simplicidad.
      </p>
      <div className="flex gap-3">
        <Link href="/cotizador" className="flex-1 text-center bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] text-white font-semibold py-3 rounded-xl shadow hover:brightness-110 transition">Cotizar</Link>
        <Link href="/mis-envios" className="flex-1 text-center bg-[#23272b] text-[#41e0b3] font-semibold py-3 rounded-xl border border-[#41e0b3]/40 hover:bg-[#41e0b3]/10 transition">Mis envíos</Link>
      </div>
    </section>
  );
}
