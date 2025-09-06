"use client";
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

// Pequeña envoltura para identificar qué sección falla.
export default function SectionBoundary({ name, children }) {
  return (
    <ErrorBoundary fallback={({ error, reset }) => (
      <div style={boxStyle}>
        <strong style={{display:'block',marginBottom:6}}>Sección: {name}</strong>
        <div style={{fontSize:12,opacity:0.85,marginBottom:8}}>{error?.message || 'Error desconocido'}</div>
        <button style={btnStyle} onClick={reset}>Reintentar</button>
      </div>
    )}>
      <div data-section={name} style={{position:'relative'}}>
        {children}
      </div>
    </ErrorBoundary>
  );
}

const boxStyle = {
  border:'1px solid #fda4af',
  background:'linear-gradient(135deg,#1e293b,#334155)',
  color:'#f1f5f9',
  padding:'12px 14px',
  borderRadius:12,
  fontFamily:'system-ui,sans-serif',
  fontSize:13,
  textAlign:'left'
};
const btnStyle = {
  background:'#0d9488',
  border:'none',
  color:'#fff',
  fontSize:12,
  padding:'6px 10px',
  borderRadius:8,
  cursor:'pointer'
};
