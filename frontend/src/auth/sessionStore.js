// Central store helpers for session handling shared across hooks
// Avoids duplication between useMobileSession and useAuthSession

import { LS_KEYS } from '@/auth/keys';

// Lista básica de administradores (podría venir de env o API en el futuro)
const ADMIN_EMAILS = [
  '3000bisonte@gmail.com',
  'bisonteangela@gmail.com',
  'bisonteoskar@gmail.com'
];

const MOBILE_KEY = LS_KEYS.MOBILE_SESSION;

export function loadMobileSession() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(MOBILE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.expires && Date.parse(parsed.expires) < Date.now()) {
      localStorage.removeItem(MOBILE_KEY);
      return null;
    }
    return parsed;
  } catch { return null; }
}

export function persistMobileSession(session) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(MOBILE_KEY, JSON.stringify(session)); } catch {}
}

export function buildSessionFromAuth(user, token, days = 30) {
  if (user && user.email) {
    const isAdmin = ADMIN_EMAILS.includes(user.email);
    user.role = isAdmin ? 'admin' : 'user';
    user.isAdmin = isAdmin;
  }
  return {
    user,
    token,
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
  };
}

export function clearAllSessionLikeData() {
  if (typeof window === 'undefined') return;
  const keys = [
    MOBILE_KEY,
    LS_KEYS.AUTH_TOKEN,
    LS_KEYS.REFRESH_TOKEN,
    LS_KEYS.USER,
    LS_KEYS.GOOGLE_AUTH_DATA,
    LS_KEYS.GOOGLE_AUTH_SUCCESS
  ];
  keys.forEach(k => { try { localStorage.removeItem(k); } catch {} });
}
