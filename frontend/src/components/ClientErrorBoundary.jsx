"use client";
import React from 'react';

export default class ClientErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = { hasError:false, error:null, info:null };
  }
  static getDerivedStateFromError(error){
    return { hasError:true, error };
  }
  componentDidCatch(error, info){
    console.error('🛑 Error capturado por ClientErrorBoundary:', error, info);
  }
  render(){
    if(this.state.hasError){
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center px-6">
          <div className="w-14 h-14 border-4 border-red-400 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-xl font-semibold text-white mb-2">Ocurrió un error en la interfaz</h2>
          <p className="text-sm text-gray-300 max-w-md mb-4">Estamos protegiendo la app de un fallo inesperado. Puedes intentar recargar o volver a iniciar sesión.</p>
          <pre className="text-xs bg-gray-800 text-red-300 p-3 rounded max-w-md w-full overflow-auto mb-4" style={{maxHeight:'160px'}}>
            {this.state.error?.message || 'Error desconocido'}
          </pre>
          <div className="flex gap-3">
            <button onClick={()=>location.reload()} className="px-5 py-2 rounded bg-[#41e0b3] text-gray-900 font-semibold">Reintentar</button>
            <button onClick={()=>location.href='/login'} className="px-5 py-2 rounded bg-gray-700 text-gray-200">Ir a Login</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
