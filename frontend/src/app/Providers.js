"use client";

// Providers unificados: NextAuth + contextos personalizados
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { ConfirmModalProvider } from "@/context/ConfirmModalContext";

export function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
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