// Config centralizada para OAuth Google
// Evita repetir literales de client IDs y redirect URIs en múltiples archivos.

const DEFAULT_WEB_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  || process.env.NEXT_PUBLIC_GOOGLE_FALLBACK_CLIENT_ID
  || '108242889910-n3ptem16orktkl0klv8onlttfl83r1ul.apps.googleusercontent.com';

// Posible futuro: client id específico móvil si difiere
const DEFAULT_MOBILE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_MOBILE_CLIENT_ID
  || DEFAULT_WEB_CLIENT_ID;

// Redirect principal registrado en Google Cloud Console
const WEB_REDIRECT_URI = 'https://www.bisonteapp.com/auth/google/callback';

export function getGoogleClientId({ mobilePreferred = false } = {}) {
  return mobilePreferred ? DEFAULT_MOBILE_CLIENT_ID : DEFAULT_WEB_CLIENT_ID;
}

export function getRedirectUri() {
  return WEB_REDIRECT_URI;
}

export function buildAuthUrl({ state, prompt = 'select_account', accessType = 'offline' } = {}) {
  const params = new URLSearchParams({
    client_id: getGoogleClientId(),
    redirect_uri: getRedirectUri(),
    response_type: 'code',
    scope: 'openid email profile',
    access_type: accessType,
    prompt,
    state: state || Date.now().toString(),
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export const oauthConstants = {
  DEFAULT_WEB_CLIENT_ID,
  DEFAULT_MOBILE_CLIENT_ID,
  WEB_REDIRECT_URI,
};
