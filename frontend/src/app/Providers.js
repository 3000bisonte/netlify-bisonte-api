"use client";

import { SessionProvider } from "next-auth/react";
import { NotificationProvider } from "@/context/NotificationContext";
import { ConfirmModalProvider } from "@/context/ConfirmModalContext";
import { useState, useEffect } from 'react';

export function Providers({ children, session }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevenir errores de hidratación
  if (!mounted) {
    return null;
  }

  return (
    <SessionProvider 
      session={session}
      refetchInterval={5 * 60} 
      refetchOnWindowFocus={true}
    >
      <NotificationProvider>
        <ConfirmModalProvider>
          {children}
        </ConfirmModalProvider>
      </NotificationProvider>
    </SessionProvider>
  );
}