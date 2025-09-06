const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'fallback-secret-key';
const payload = {
  userId: 'u1',
  email: 'demo@bisonte.com',
  name: 'Demo',
  provider: 'google'
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log(token);
