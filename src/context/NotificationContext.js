"use client";
import { createContext, useContext, useState } from "react";
import Notification from "@/components/Notification";

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  
  // Durante SSR, devolver un objeto por defecto
  if (!context) {
    if (typeof window === 'undefined') {
      return {
        showNotification: () => {} // Función vacía durante SSR
      };
    }
    throw new Error('useNotification debe usarse dentro de NotificationProvider');
  }
  
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "info", duration = 4000) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((n) => (
          <Notification
            key={n.id}
            message={n.message}
            type={n.type}
            onClose={() =>
              setNotifications((prev) => prev.filter((notif) => notif.id !== n.id))
            }
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};