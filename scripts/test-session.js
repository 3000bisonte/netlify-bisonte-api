const jwt = require('jsonwebtoken');

const BASE = process.env.BASE || 'http://localhost:8080';
const secret = process.env.JWT_SECRET || 'fallback-secret-key';

async function main() {
  // 1) Without token
  const r1 = await fetch(`${BASE}/api/auth/session`);
  const j1 = await r1.json().catch(() => ({}));
  console.log('Sin token:', r1.status, j1);

  // 2) With valid token
  const token = jwt.sign({ userId: 'u1', email: 'demo@bisonte.com', name: 'Demo', provider: 'google' }, secret, { expiresIn: '1h' });
  const r2 = await fetch(`${BASE}/api/auth/session`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const j2 = await r2.json().catch(() => ({}));
  console.log('Con token válido:', r2.status, j2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
