"use client";
import React from "react";

/**
 * ErrorBoundary genérico para capturar errores de runtime en componentes cliente.
 * Evita que un fallo puntual derribe toda la página y ofrece acciones de recuperación.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Logging enriquecido para diagnosticar errores minificados en producción
    try {
      const meta = {
        time: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server',
        url: typeof location !== 'undefined' ? location.href : 'server',
        buildTag: typeof document !== 'undefined' ? document.documentElement?.getAttribute('data-build') || document.body?.getAttribute('data-build') : undefined,
        errorMessage: error?.message,
        stack: error?.stack,
        componentStack: info?.componentStack,
      };
      // Agrupar para legibilidad
      // eslint-disable-next-line no-console
      console.groupCollapsed('%c[ErrorBoundary] Caught error','color:#f87171;font-weight:bold;');
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-console
      console.log('Meta:', meta);
      // eslint-disable-next-line no-console
      console.groupEnd();
      if (typeof window !== 'undefined') {
        window.__LAST_ERROR__ = meta; // expone para inspección manual en consola
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[ErrorBoundary] secondary logging failure', e);
    }
    this.setState({ info });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, info: null });
    if (this.props.reloadOnReset && typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error, reset: this.handleReset })
          : this.props.fallback;
      }
      return (
        <div style={styles.wrapper}>
          <div style={styles.card}>
            <h2 style={styles.title}>Ocurrió un error</h2>
            <p style={styles.text}>Se produjo un problema al renderizar la interfaz.</p>
            {error?.message && <pre style={styles.pre}>{error.message}</pre>}
            {process.env.NODE_ENV !== 'production' && error?.stack && (
              <details style={styles.details}>
                <summary style={{cursor:'pointer'}}>Stack trace</summary>
                <pre style={styles.pre}>{error.stack}</pre>
              </details>
            )}
            <div style={styles.actions}>
              <button style={styles.button} onClick={this.handleReset}>Reintentar</button>
              <button style={styles.buttonSecondary} onClick={() => typeof window !== 'undefined' && window.location.reload()}>Recargar</button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles = {
  wrapper: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: 20 },
  card: { background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '28px 32px', borderRadius: 18, maxWidth: 480, width: '100%', color: '#f1f5f9', fontFamily: 'system-ui,sans-serif', boxShadow: '0 6px 28px -4px rgba(0,0,0,0.45)' },
  title: { margin: '0 0 14px', fontSize: 24, fontWeight: 600 },
  text: { margin: '0 0 16px', lineHeight: 1.4, fontSize: 15 },
  pre: { background: '#1e293b', padding: '12px 14px', borderRadius: 10, fontSize: 12, maxHeight: 160, overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '0 0 18px' },
  details: { textAlign: 'left', marginBottom: 18 },
  actions: { display: 'flex', gap: 12 },
  button: { background: 'linear-gradient(90deg,#0d9488,#16a34a)', border: 'none', padding: '10px 18px', borderRadius: 10, color: '#fff', fontWeight: 600, cursor: 'pointer' },
  buttonSecondary: { background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', padding: '10px 18px', borderRadius: 10, color: '#fff', fontWeight: 500, cursor: 'pointer' }
};

export default ErrorBoundary;
