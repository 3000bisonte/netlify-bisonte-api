// Utilidad centralizada para obtener el Google Client ID en tiempo de ejecución
// Evita romper el build cuando falta y permite futuros fallbacks.

export function getGoogleClientId() {
  // Prioridad 1: variable en build
  const envId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (envId) return envId;

  // Prioridad 2: inyección runtime (ej: window global)
  if (typeof window !== 'undefined') {
    const globalId = window.__PUBLIC_GOOGLE_CLIENT_ID || window.__GOOGLE_CLIENT_ID;
    if (globalId) return globalId;

    // Prioridad 3: localStorage (persistido tras fetch / config pública)
    try {
      const stored = localStorage.getItem('GOOGLE_CLIENT_ID');
      if (stored) return stored;
    } catch {}

    // Prioridad 4: meta tag data-google-client-id (si se inyecta en index.html)
    const meta = document.querySelector('meta[name="google-client-id"], meta[data-google-client-id]');
    if (meta) {
      const val = meta.getAttribute('content') || meta.getAttribute('data-google-client-id');
      if (val) return val;
    }
  }

  return '';
}

export default getGoogleClientId;
