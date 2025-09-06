/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build dinámico (SSR) para Vercel; APIs están deshabilitadas en src/app/api
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Facilitar depuración de errores minificados
  productionBrowserSourceMaps: true,
  // No API: usamos backend separado (Netlify)
  webpack: (config) => {
    // Prefer stubs if modules are missing (web build)
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@capacitor/core': require('path').resolve(__dirname, 'src/stubs/capacitor-core.js'),
      '@capacitor-community/admob': require('path').resolve(__dirname, 'src/stubs/admob.js'),
      '@mercadopago/sdk-react': require('path').resolve(__dirname, 'src/stubs/mp-react.js'),
    };
    return config;
  },
  // Headers para export estático
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Security headers for production
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
