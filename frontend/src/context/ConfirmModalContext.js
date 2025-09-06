"use client";
import { createContext, useContext, useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";

const ConfirmModalContext = createContext();

export const useConfirmModal = () => {
  const context = useContext(ConfirmModalContext);
  
  // Durante SSR, devolver un objeto por defecto
  if (!context) {
    if (typeof window === 'undefined') {
      return {
        showConfirmModal: () => {} // Función vacía durante SSR
      };
    }
    throw new Error('useConfirmModal debe usarse dentro de ConfirmModalProvider');
  }
  
  return context;
};

export const ConfirmModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState(null);

  const showConfirmModal = (config) => {
    setModalConfig(config);
  };

  const closeConfirmModal = () => {
    setModalConfig(null);
  };

  return (
    <ConfirmModalContext.Provider value={{ showConfirmModal }}>
      {children}
      {modalConfig && (
        <ConfirmModal
          isOpen={true}
          onClose={closeConfirmModal}
          {...modalConfig}
        />
      )}
    </ConfirmModalContext.Provider>
  );
};