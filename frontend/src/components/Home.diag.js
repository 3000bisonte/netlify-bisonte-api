"use client";
import React from 'react';
import Home from './Home';

export default function HomeDiagnostic(){
  console.log('[Diag] Rendering HomeDiagnostic wrapper');
  try {
    return <Home />;
  } catch (e) {
    console.error('[Diag] Error rendering Home:', e);
    return <div style={{padding:40}}>Error aislando Home: {String(e)}</div>;
  }
}
