/**
 * Delegated Next.js config.
 * Vercel build (see vercel.json) runs inside ./frontend so this file only
 * re-exports that configuration to avoid duplicate/ divergent settings.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('./frontend/next.config.js');
