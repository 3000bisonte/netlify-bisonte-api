# 🚀 GUÍA DE INTEGRACIÓN - NETLIFY API

## ✅ **ESTADO ACTUAL**
- **✅ Migration completa:** Vercel → Netlify
- **✅ 40+ endpoints funcionando** en https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/
- **✅ Dependencias instaladas:** jsonwebtoken, google-auth-library
- **✅ Variables de entorno configuradas**

---

## 🔄 **PRÓXIMO PASO: INTEGRACIÓN CON LA APP**

### 1. **Actualizar variables de entorno en tu app Next.js**

#### En `.env.production`:
```bash
# Cambiar de Vercel a Netlify
NEXT_PUBLIC_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions
NEXT_PUBLIC_BISONTE_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions

# Mantener las demás variables
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
JWT_SECRET=tu-jwt-secret-seguro
```

### 2. **Verificar endpoints críticos en tu app**

#### URLs principales para testing:
```
🔍 Health check: /ping
🔐 Autenticación: /auth-session
🌐 Google OAuth: /google
📦 Envíos: /envios
👤 Perfil: /perfil
👑 Admin: /admin-users
```

### 3. **Pasos para deploy en Vercel**

#### Comando para actualizar tu app:
```bash
# 1. Actualizar variables en Vercel dashboard
# 2. O usar CLI:
vercel env add NEXT_PUBLIC_API_URL
# Valor: https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions

vercel env add NEXT_PUBLIC_BISONTE_API_URL  
# Valor: https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions

# 3. Redeploy
vercel --prod
```

### 4. **Testing post-integración**

#### Puntos críticos a verificar:
- [ ] Login con Google funciona
- [ ] JWT tokens se generan correctamente
- [ ] Endpoints de envíos responden
- [ ] Panel de admin carga
- [ ] App móvil se conecta sin errores

---

## 🧪 **COMANDOS DE TESTING**

### Probar API desde terminal:
```bash
# Health check
curl https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/ping

# Google OAuth URL
curl https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/google

# Auth session (genera JWT)
curl https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/auth-session
```

### Probar desde tu app:
```javascript
// En tu código Next.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Test básico
fetch(`${API_BASE}/ping`)
  .then(r => r.json())
  .then(data => console.log('API conectada:', data));

// Test auth
fetch(`${API_BASE}/auth-session`)
  .then(r => r.json())
  .then(data => console.log('JWT generado:', data.token));
```

---

## 🔧 **TROUBLESHOOTING**

### Si hay errores CORS:
- Los headers ya están configurados en todos los endpoints
- Verificar que usas las URLs correctas (con /functions/)

### Si fallan los JWT:
- Verificar que JWT_SECRET está en variables de entorno de Netlify
- Los tokens se generan automáticamente en endpoints protegidos

### Si falla Google OAuth:
- Verificar GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI en Netlify
- El redirect URI debe ser: https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions/auth-callback-google

---

## 📋 **CHECKLIST DE INTEGRACIÓN**

- [ ] Variables de entorno actualizadas en la app
- [ ] Deploy de la app con nuevas URLs
- [ ] Testing de login Google
- [ ] Testing de endpoints principales
- [ ] Verificación en app móvil
- [ ] Testing de panel admin

---

## 🎯 **RESULTADO ESPERADO**
Después de la integración, tu app debería:
1. ✅ Conectarse a Netlify en lugar de Vercel
2. ✅ Mantener toda la funcionalidad existente  
3. ✅ Tener mejor performance (sin límites de serverless)
4. ✅ Ser más estable y escalable

**¿Listo para el siguiente paso?** 🚀
