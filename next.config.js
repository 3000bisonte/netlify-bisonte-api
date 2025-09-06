/**
 * Configuración de Next.js para el monorepo
 * Delegamos la configuración al archivo de frontend
 */

const path = require('path');

// Cargar configuración desde frontend
const frontendConfig = require('./frontend/next.config.js');

module.exports = {
  ...frontendConfig,
  // Asegurar que los paths estén correctos para el monorepo
  experimental: {
    ...frontendConfig.experimental,
    outputFileTracingRoot: path.join(__dirname, './'),
  }
};
