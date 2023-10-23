import { useState } from 'react';

const useToggleMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return { isMenuOpen, toggleMenu, closeMenu };
};

export default useToggleMenu;
