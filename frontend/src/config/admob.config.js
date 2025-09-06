// Configuración de AdMob para Bisonte Logística
// ⚠️ IMPORTANTE: Reemplaza los IDs de testing con tus IDs reales de AdMob

// Normalizar entorno (evita problemas de espacios, mayúsculas o valores inesperados)
const RAW_ENV = (process.env.NEXT_PUBLIC_ENVIRONMENT || process.env.NODE_ENV || 'development').trim().toLowerCase();
const IS_PRODUCTION = RAW_ENV === 'production';

// Permitir forzar producción en cliente (depuración) si process.env falló en build
let RUNTIME_FORCE_PROD = false;
if (typeof window !== 'undefined') {
  try {
    // Si hostname es dominio productivo y variable build no marcó production, ajustar
    const host = window.location.hostname;
    if (!IS_PRODUCTION && /(bisonteapp|bisonte-logistica|bisonte)/i.test(host)) {
      RUNTIME_FORCE_PROD = true;
      console.warn('[AdMob] Forzando modo producción por hostname:', host);
    }
    if (window.__FORCE_ADMOB_PROD__ === true) {
      RUNTIME_FORCE_PROD = true;
      console.warn('[AdMob] __FORCE_ADMOB_PROD__ activo');
    }
  } catch {}
}

const EFFECTIVE_PROD = IS_PRODUCTION || RUNTIME_FORCE_PROD;

// IDs test conocidos Google
const GOOGLE_TEST = {
  APP: 'ca-app-pub-3940256099942544~3347511713',
  REWARDED: 'ca-app-pub-3940256099942544/5224354917',
  BANNER: 'ca-app-pub-3940256099942544/6300978111'
};

// Leer IDs reales desde variables de entorno primero
let REAL_IDS = {
  APP: process.env.NEXT_PUBLIC_ADMOB_APP_ID?.trim(),
  REWARDED: process.env.NEXT_PUBLIC_ADMOB_REWARDED_ID?.trim(),
  BANNER: process.env.NEXT_PUBLIC_ADMOB_BANNER_ID?.trim()
};

// DEBUG: Ver qué variables están llegando
console.log('[AdMob Debug] Variables de entorno:', {
  APP: process.env.NEXT_PUBLIC_ADMOB_APP_ID || 'NO_DEFINIDA',
  REWARDED: process.env.NEXT_PUBLIC_ADMOB_REWARDED_ID || 'NO_DEFINIDA', 
  BANNER: process.env.NEXT_PUBLIC_ADMOB_BANNER_ID || 'NO_DEFINIDA'
});

console.log('[AdMob Debug] REAL_IDS después de env:', REAL_IDS);

// Incorporar meta tags ANTES de construir la config para evitar warnings falsos en consola.
try {
  if (typeof window !== 'undefined') {
    const metaApp = document.querySelector('meta[name="admob-app-id"]')?.content?.trim();
    const metaReward = document.querySelector('meta[name="admob-rewarded-id"]')?.content?.trim();
    const metaBanner = document.querySelector('meta[name="admob-banner-id"]')?.content?.trim();
    if (!REAL_IDS.APP && metaApp) REAL_IDS.APP = metaApp;
    if (!REAL_IDS.REWARDED && metaReward) REAL_IDS.REWARDED = metaReward;
    if (!REAL_IDS.BANNER && metaBanner) REAL_IDS.BANNER = metaBanner;
  }
} catch {}

// FORZAR IDs reales si las variables fallan (TEMPORAL PARA DEBUG)
if (EFFECTIVE_PROD && (!REAL_IDS.APP || REAL_IDS.APP === GOOGLE_TEST.APP)) {
  console.warn('[AdMob] 🔧 Forzando IDs reales hardcodeados...');
  REAL_IDS = {
    APP: 'ca-app-pub-1352045169606160~5443732431',
    REWARDED: 'ca-app-pub-1352045169606160/7908962294', 
    BANNER: 'ca-app-pub-1352045169606160/7029983134'
  };
}

console.log('[AdMob Debug] REAL_IDS después de meta tags y hardcode:', REAL_IDS);

// Función para decidir ID (si falta real en prod, se mantiene test pero marcamos alerta)
function chooseId(kind, real, test) {
  if (EFFECTIVE_PROD) {
    if (real && real.length > 10 && !real.includes('XXXX') && real !== test) return real;
    console.warn(`[AdMob] ⚠️ Falta ID real para ${kind} en producción. Usando ID de test. Configura NEXT_PUBLIC_ADMOB_${kind}_ID.`);
    return test; // fallback test (marcado en validación)
  }
  return test;
}

export const ADMOB_CONFIG = {
  APP_ID: chooseId('APP', REAL_IDS.APP, GOOGLE_TEST.APP),
  REWARDED_AD_UNIT_ID: chooseId('REWARDED', REAL_IDS.REWARDED, GOOGLE_TEST.REWARDED),
  BANNER_AD_UNIT_ID: chooseId('BANNER', REAL_IDS.BANNER, GOOGLE_TEST.BANNER),


  // ⚙️ Configuración de recompensas
  REWARD_SETTINGS: {
    DISCOUNT_AMOUNT: 2013, // $2,013 pesos de descuento
    REWARD_TYPE: 'discount',
    CURRENCY: 'COP', // Pesos colombianos
  },

  // 🔧 Configuración técnica
  SETTINGS: {
  // Testing mode (fuera de producción efectiva)
  isTesting: !EFFECTIVE_PROD,
    
    // Configuración de anuncios
    enableRewardedAds: true,
    enableBannerAds: true,
    enableInterstitialAds: false, // Desactivado por defecto
    
    // Timeouts y reintentos
    adTimeout: 10000, // 10 segundos
    maxRetries: 3,
    retryDelay: 2000, // 2 segundos
    
    // Frecuencia de anuncios
    interstitialFrequency: 180000, // 3 minutos entre intersticiales
    
    // Configuración de mediación
    enableMediation: true,
    eCPMFloor: 0.10, // $0.10 USD mínimo
  },

  // 🌍 Configuración por región
  REGIONAL_CONFIG: {
    CO: { // Colombia
      currency: 'COP',
      discountAmount: 2013,
      minOrderValue: 5000, // Mínimo $5,000 para mostrar anuncios
    },
    DEFAULT: {
      currency: 'USD',
      discountAmount: 1,
      minOrderValue: 2,
    }
  },

  // 📊 Analytics y tracking
  ANALYTICS: {
    trackAdImpressions: true,
    trackAdClicks: true,
    trackRewards: true,
    trackRevenue: true,
  },

  // 🎨 Configuración de UI
  UI_CONFIG: {
    showAdCountdown: true,
    showRewardPreview: true,
    showAdBadges: true,
    adLoadingText: {
      es: 'Cargando anuncio...',
      en: 'Loading ad...'
    },
    rewardText: {
      es: '¡Descuento aplicado!',
      en: 'Discount applied!'
    }
  }
};

// 🔍 Función para validar configuración
export function validateAdMobConfig() {
  const config = ADMOB_CONFIG;
  const errors = [];
  const env = RAW_ENV;

  // IDs de prueba conocidos de Google
  const GOOGLE_TEST_IDS = {
    APP_ID: 'ca-app-pub-3940256099942544~3347511713',
    REWARDED: 'ca-app-pub-3940256099942544/5224354917',
    BANNER: 'ca-app-pub-3940256099942544/6300978111'
  };

  // Validar App ID
  if (config.APP_ID.includes('XXXXXXXXXX')) {
    errors.push('⚠️ App ID no configurado - usando ID de testing');
  }

  // Validar Rewarded Ad ID
  if (config.REWARDED_AD_UNIT_ID.includes('XXXXXXXXXX')) {
    errors.push('⚠️ Rewarded Ad ID no configurado - usando ID de testing');
  }

  // Validar Banner Ad ID
  if (config.BANNER_AD_UNIT_ID.includes('XXXXXXXXXX')) {
    errors.push('⚠️ Banner Ad ID no configurado - usando ID de testing');
  }

  const usingTestIdsByEnv = env !== 'production' && !RUNTIME_FORCE_PROD;
  const usingKnownGoogleTestIds = (
    config.APP_ID === GOOGLE_TEST_IDS.APP_ID ||
    config.REWARDED_AD_UNIT_ID === GOOGLE_TEST_IDS.REWARDED ||
    config.BANNER_AD_UNIT_ID === GOOGLE_TEST_IDS.BANNER
  );

  const forcedProdButTests = EFFECTIVE_PROD && usingKnownGoogleTestIds;
  if (forcedProdButTests) {
    errors.push('⚠️ En producción pero aún se usan IDs de test. Configura variables NEXT_PUBLIC_ADMOB_* reales y vuelve a desplegar.');
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  isProduction: EFFECTIVE_PROD,
  usingTestIds: usingTestIdsByEnv || usingKnownGoogleTestIds || forcedProdButTests,
  forcedRuntimeProduction: RUNTIME_FORCE_PROD
  };
}

// 🎯 Función para obtener configuración actual
export function getCurrentAdMobConfig() {
  const validation = validateAdMobConfig();
  
  return {
    ...ADMOB_CONFIG,
    validation: validation,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  };
}

// 📝 Logs de configuración
if (typeof window !== 'undefined') {
  // Revalidar después de posible lectura meta temprana
  const validation = validateAdMobConfig();
  console.group('🎯 AdMob Configuration');
  console.log('Environment (raw):', RAW_ENV);
  console.log('Effective Production:', EFFECTIVE_PROD);
  console.log('Runtime Forced Production:', validation.forcedRuntimeProduction);
  console.log('Using Test IDs:', validation.usingTestIds);
  console.log('App ID:', ADMOB_CONFIG.APP_ID);
  console.log('Rewarded Ad ID:', ADMOB_CONFIG.REWARDED_AD_UNIT_ID);
  if (validation.errors.length > 0) {
    console.warn('⚠️ Configuration Warnings:');
    validation.errors.forEach(error => console.warn(error));
  }
  if (EFFECTIVE_PROD && validation.usingTestIds) {
    console.error('[AdMob] ❌ PRODUCCIÓN usando IDs de test. Reemplaza inmediatamente las variables NEXT_PUBLIC_ADMOB_* y redeploy.');
  }
  console.groupEnd();
}

// Función para forzar refresco runtime (ej: después de cargar config dinámica)
export function refreshAdMobRuntimeConfig() {
  if (typeof window === 'undefined') return ADMOB_CONFIG;
  try {
    const before = { ...ADMOB_CONFIG };
    const metaApp = document.querySelector('meta[name="admob-app-id"]')?.content?.trim();
    if (metaApp && ADMOB_CONFIG.APP_ID !== metaApp) ADMOB_CONFIG.APP_ID = metaApp;
    const metaRewarded = document.querySelector('meta[name="admob-rewarded-id"]')?.content?.trim();
    if (metaRewarded && ADMOB_CONFIG.REWARDED_AD_UNIT_ID !== metaRewarded) ADMOB_CONFIG.REWARDED_AD_UNIT_ID = metaRewarded;
    const metaBanner = document.querySelector('meta[name="admob-banner-id"]')?.content?.trim();
    if (metaBanner && ADMOB_CONFIG.BANNER_AD_UNIT_ID !== metaBanner) ADMOB_CONFIG.BANNER_AD_UNIT_ID = metaBanner;
    console.log('[AdMob] Runtime refresh aplicado', { before, after: { ...ADMOB_CONFIG } });
  } catch (e) {
    console.warn('[AdMob] refreshAdMobRuntimeConfig error:', e.message);
  }
  return ADMOB_CONFIG;
}

export default ADMOB_CONFIG;
