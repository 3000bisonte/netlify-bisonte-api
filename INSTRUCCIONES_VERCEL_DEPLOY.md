# Instrucciones para Actualizar Bisonte API en Vercel

## Archivos para subir al proyecto Vercel:

### 1. **server.js** (archivo principal)
- Reemplazar el contenido con: `PARA_VERCEL_server.js`
- Este archivo contiene toda la lógica del servidor Express con las rutas de autenticación

### 2. **package.json** (dependencias)
- Actualizar con las dependencias necesarias
- Incluye: express, cors, google-auth-library, jsonwebtoken

### 3. **vercel.json** (configuración de deployment)
- Archivo: `PARA_VERCEL_vercel.json`
- Configura las rutas y headers CORS

### 4. **Variables de Entorno** (en dashboard de Vercel)
- Ir a: Settings > Environment Variables
- Copiar las variables de: `PARA_VERCEL_env_variables.txt`

## Pasos para la actualización:

1. **Ir al dashboard de Vercel**: https://vercel.com/eduardos-projects-9d27e028/bisonte-api

2. **Subir archivos principales**:
   - Subir `PARA_VERCEL_server.js` como `server.js`
   - Actualizar `package.json` con las nuevas dependencias
   - Subir `PARA_VERCEL_vercel.json` como `vercel.json`

3. **Configurar variables de entorno**:
   - En Settings > Environment Variables
   - Agregar todas las variables de `PARA_VERCEL_env_variables.txt`

4. **Redeploy**:
   - El proyecto se redesplegará automáticamente
   - Verificar que las rutas funcionen:
     - `https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/health`
     - `https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/auth/signin/google`

## Rutas disponibles después del deploy:

- `GET /api/health` - Health check
- `GET /api/config` - Configuración OAuth
- `GET /api/auth/signin/google` - Iniciar OAuth con Google  
- `POST /api/auth/google` - Verificar ID token
- `GET /api/auth/session` - Verificar sesión activa

## Notas importantes:

- Las rutas de autenticación están optimizadas para WebView y navegador
- Manejo automático de entornos desarrollo/producción
- CORS configurado para todos los orígenes
- Timeouts y error handling implementados

Una vez desplegado, las rutas de autenticación en el frontend dejarán de dar error 404.
