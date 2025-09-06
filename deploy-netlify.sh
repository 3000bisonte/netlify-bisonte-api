#!/bin/bash

echo "🚀 DEPLOYING NETLIFY FUNCTIONS"
echo "================================"

# Navegar al directorio de API
cd netlify-bisonte-api

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building functions..."
# Si tienes un build script, ejecutarlo aquí
# npm run build

echo "📋 Functions available:"
ls -la netlify/functions/

echo "✅ Functions ready for deployment:"
echo "  - login.js (POST /login)"
echo "  - register.js (POST /register)" 
echo "  - password-recovery.js (POST /password-recovery)"
echo "  - health-compact2.js (GET /health-compact2)"
echo "  - config.js (GET /config)"
echo "  - ping.js (GET /ping)"
echo "  - test-ok.js (GET /test-ok)"
echo "  - google2.js (OAuth Google)"

echo ""
echo "🌐 Deploy to Netlify:"
echo "1. Conectar repositorio a Netlify"
echo "2. Set build directory: netlify-bisonte-api"
echo "3. Set functions directory: netlify/functions"
echo "4. Deploy!"

echo ""
echo "📝 Environment variables needed in Netlify:"
echo "  - NODE_ENV=production"
echo "  - Add any other env vars your functions need"

echo ""
echo "✅ Ready for deployment!"
