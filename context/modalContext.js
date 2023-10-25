'use client';

import useToggleModal from '@/hooks/useToggleModal';
import { createContext, useContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const modal = useToggleModal();

  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a ModalProvider');
  }
  return context;
}
