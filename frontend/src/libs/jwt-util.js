import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export function sign(payload, expiresIn = '7d') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verify(token) {
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}

// Accepts: Headers (Web), string, or object with authorization
export function bearer(source) {
  if (!source) return null;
  let value = null;
  if (typeof source === 'string') {
    value = source;
  } else if (typeof source.get === 'function') {
    value = source.get('authorization') || source.get('Authorization') || null;
  } else {
    value = source.authorization || source.Authorization || null;
  }
  if (!value || typeof value !== 'string') return null;
  if (!value.startsWith('Bearer ')) return null;
  return value.substring(7);
}

