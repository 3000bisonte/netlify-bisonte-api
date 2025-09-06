import "./globals.css";
import { Providers } from "./Providers";
import { RouteGuard } from "@/components/RouteGuard";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import ConnectionHandler from "@/components/ConnectionHandler";
import AdDebugInfo from "@/components/AdDebugInfo";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const AdBannerNative = dynamic(() => import("@/components/AdBannerNative"), { ssr: false });
const MobileBottomNav = dynamic(() => import("@/components/MobileBottomNav"), { ssr: false });

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Bisonte Logística",
  description: "App para envíos en Bogotá y municipios cercanos",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-256x256.png",
    icon: "/icon-512x512.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bisonte",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Bisonte Logística",
    title: "Bisonte Logística",
    description: "App para envíos en Bogotá y municipios cercanos",
  },
  keywords: ["envios", "logistica", "bogota", "paquetes", "courier"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bisonte" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-adsense-account" content="ca-pub-1352045169606160" />
        
        <link rel="apple-touch-icon" href="/icon-256x256.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para optimizar carga */}
        <link rel="dns-prefetch" href="https://accounts.google.com" />
        <link rel="dns-prefetch" href="https://apis.google.com" />
        <link rel="dns-prefetch" href="https://bisontebackend.netlify.app" />
        <link rel="preconnect" href="https://accounts.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://bisontebackend.netlify.app" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <RouteGuard>
            {children}
            <AdBannerNative />
            <MobileBottomNav />
            <ServiceWorkerRegister />
            <ConnectionHandler />
            <AdDebugInfo />
          </RouteGuard>
        </Providers>
      </body>
    </html>
  );
}
