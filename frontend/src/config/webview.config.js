// Configuración específica para WebView y OAuth
export const webViewConfig = {
  // Detectar si estamos en WebView
  isWebView: () => {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroidWebView = /wv|WebView/i.test(userAgent) ||
                           /Android.*Version/[d.]+.*Chrome/[d.]+ Mobile/i.test(userAgent) ||
                           /Android.*Mobile/i.test(userAgent) && !/Chrome/i.test(userAgent);

    // Detectar WebView en iOS
    const isIOSWebView = /Mobile/[dw]+ Safari/i.test(userAgent) &&
                        !/Chrome|CriOS|FxiOS|OPiOS|mercury/i.test(userAgent);

    return isAndroidWebView || isIOSWebView;
  },

  // Configuración de cookies para WebView
  cookieOptions: {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false, // Necesario para WebView
  },

  // Headers adicionales para WebView
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json, text/plain, */*',
  },

  // Configuración de OAuth para WebView
  oauth: {
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
    scope: 'openid email profile',
  },
};

export default webViewConfig;