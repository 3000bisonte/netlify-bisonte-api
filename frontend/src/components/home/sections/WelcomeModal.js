"use client";
import { LS_KEYS } from '@/auth/keys';

export function WelcomeModal({ show, onClose, userName }) {
  if(!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#18191A]/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-sm w-full mx-4 border-2 border-[#41e0b3]/30 overflow-hidden animate-fade-in-up">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#41e0b3] to-[#2bbd8c] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">✨</div>
          <h2 className="text-2xl font-bold text-[#41e0b3] mb-3">¡Bienvenido!</h2>
          <p className="text-gray-300 font-light mb-2">Hola <span className="font-medium text-[#41e0b3]">{userName}</span></p>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">Ahora puedes disfrutar de nuestros servicios de envío inteligente</p>
          <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-4 mb-8">
            <p className="text-amber-800 text-sm font-light"><span className="font-medium">Importante:</span> Completa tu perfil para comenzar</p>
          </div>
        </div>
        <div className="px-8 pb-8">
          <button onClick={()=>{ try { localStorage.setItem(LS_KEYS.WELCOME_SHOWN,'true'); } catch{} onClose(); }} className="w-full bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] text-white font-bold py-4 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce">Comenzar</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
