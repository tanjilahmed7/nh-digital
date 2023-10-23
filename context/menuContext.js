'use client';

import useToggleMenu from '@/hooks/useToggleMenu';
import { createContext, useContext } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const menu = useToggleMenu();

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
