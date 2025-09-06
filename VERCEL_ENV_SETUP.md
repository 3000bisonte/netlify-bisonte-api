# CONFIGURACIÓN DE VARIABLES DE ENTORNO EN VERCEL

## Variables que DEBEN configurarse en Vercel Dashboard:

1. Ve a: https://vercel.com/dashboard/3000bisonte/bisonte-modificado/settings/environment-variables

2. Agrega estas variables (para todos los entornos: Production, Preview, Development):

```
NEXT_PUBLIC_ADMOB_APP_ID=ca-app-pub-3940256099942544~3347511713
NEXT_PUBLIC_ADMOB_REWARDED_ID=ca-app-pub-3940256099942544/5224354917
NEXT_PUBLIC_ADMOB_BANNER_ID=ca-app-pub-3940256099942544/6300978111
NEXT_PUBLIC_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions
NEXT_PUBLIC_BISONTE_API_URL=https://nimble-vacherin-7a32d0.netlify.app/.netlify/functions
NODE_ENV=production
```

## Después de configurar:

1. Hacer redeploy desde Vercel dashboard o
2. Push cualquier cambio para triggear nuevo build

## Verificación:

Cuando esté configurado correctamente, verás en consola:
```
[AdMob] Using Test IDs: false
```

En lugar de:
```
[AdMob] ⚠️ Falta ID real para APP en producción
```

## Notas:

- Las meta tags en layout.js ahora tienen los IDs correctos como fallback
- Si las variables de entorno no están, usará los meta tags
- Los IDs actuales son de test/desarrollo - reemplazar con IDs reales de AdMob cuando tengas la cuenta
