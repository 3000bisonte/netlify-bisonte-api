#!/bin/bash

echo "🔧 Instalando dependencias del backend API..."
cd api-server
npm install

echo "🚀 Iniciando servidor backend para pruebas..."
echo "📍 El servidor estará disponible en http://localhost:8080"
echo "🔗 Rutas disponibles:"
echo "  - GET  /api/auth/signin/google"
echo "  - GET  /api/auth/callback/google" 
echo "  - POST /api/auth/google"
echo "  - GET  /api/auth/session"
echo "  - GET  /api/config"
echo ""

# Iniciar servidor
npm run dev
