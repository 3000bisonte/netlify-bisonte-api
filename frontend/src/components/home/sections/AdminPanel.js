"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { apiClient } from '@/libs/api-client';

export function AdminPanel({ enabled, stats: externalStats }) {
  const [stats, setStats] = useState(externalStats || { usuarios: 0, envios: 0, mensajes: 0 });
  useEffect(()=>{
    if(!enabled) return;
    if (externalStats) { setStats(externalStats); return; }
    let ignore=false;
    apiClient.get('/api/admin/stats').then(data=>{
      if(!ignore && data) setStats({ usuarios: data.usuarios||0, envios: data.envios||0, mensajes: data.mensajes||0 });
    }).catch(()=>{});
    return ()=>{ ignore=true; };
  },[enabled, externalStats]);
  if(!enabled) return null;
  return (
    <section className="bg-gradient-to-br from-[#18191A]/95 to-[#23272b]/90 rounded-3xl p-6 border-2 border-[#41e0b3]/30 shadow-2xl shadow-[#41e0b3]/10 animate-fade-in-up backdrop-blur-xl w-full max-w-md mx-auto mt-8">
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#41e0b3] to-[#2bbd8c] rounded-2xl flex items-center justify-center mx-auto mb-3 animate-bounce">⚙️</div>
        <h2 className="text-xl font-bold text-[#41e0b3] mb-1 drop-shadow">Panel de Administración</h2>
        <p className="text-gray-300 text-sm font-light">Gestión de la plataforma</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href="/admin/usuarios" className="group bg-[#23272b]/80 hover:bg-[#41e0b3]/10 rounded-2xl p-5 border border-[#41e0b3]/20 hover:border-[#41e0b3]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#41e0b3]/20 transform hover:scale-105 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">👥</div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-base mb-1 group-hover:text-[#41e0b3]">Usuarios</h3>
            <p className="text-gray-300 text-sm font-light">Gestionar usuarios registrados</p>
          </div>
          <div className="text-[#41e0b3] group-hover:translate-x-1 transition-transform duration-300">➜</div>
        </Link>
        <Link href="/admin/envios" className="group bg-[#23272b]/80 hover:bg-[#41e0b3]/10 rounded-2xl p-5 border border-[#41e0b3]/20 hover:border-[#41e0b3]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#41e0b3]/20 transform hover:scale-105 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">📦</div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-base mb-1 group-hover:text-[#41e0b3]">Envíos</h3>
            <p className="text-gray-300 text-sm font-light">Monitorear envíos realizados</p>
          </div>
          <div className="text-[#41e0b3] group-hover:translate-x-1 transition-transform duration-300">➜</div>
        </Link>
        <Link href="/admin/contactos" className="group bg-[#23272b]/80 hover:bg-[#41e0b3]/10 rounded-2xl p-5 border border-[#41e0b3]/20 hover:border-[#41e0b3]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#41e0b3]/20 transform hover:scale-105 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white">✉️</div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-base mb-1 group-hover:text-[#41e0b3]">Mensajes</h3>
            <p className="text-gray-300 text-sm font-light">Revisar mensajes de contacto</p>
          </div>
          <div className="text-[#41e0b3] group-hover:translate-x-1 transition-transform duration-300">➜</div>
        </Link>
      </div>
      <div className="mt-8 pt-6 border-t border-[#41e0b3]/20">
        <h3 className="text-lg font-semibold text-[#41e0b3] mb-4 text-center">Estadísticas Rápidas</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center"><div className="text-2xl font-bold text-white mb-1">{stats.usuarios}</div><div className="text-xs text-gray-300 font-light">Usuarios</div></div>
          <div className="text-center"><div className="text-2xl font-bold text-white mb-1">{stats.envios}</div><div className="text-xs text-gray-300 font-light">Envíos</div></div>
          <div className="text-center"><div className="text-2xl font-bold text-white mb-1">{stats.mensajes}</div><div className="text-xs text-gray-300 font-light">Mensajes</div></div>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
