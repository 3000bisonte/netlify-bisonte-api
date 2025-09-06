"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";
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
      refetchInterval={0} 
      refetchOnWindowFocus={false}
    >
      <AuthProvider>
        <NotificationProvider>
          <ConfirmModalProvider>
            {children}
          </ConfirmModalProvider>
        </NotificationProvider>
      </AuthProvider>
    </SessionProvider>
  );
}