'use client';

import { useMenu } from '@/context/menuContext';
import { useEffect } from 'react';
import { useState } from 'react';

const StickyHeader = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { closeMenu } = useMenu();

  useEffect(() => {
    const handleRezie = () => {
      const screenSize = window.innerWidth;

      if (screenSize >= 992) {
        closeMenu();
        document.body.style.overflow = 'auto';
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        return setIsSticky(true);
      }
      setIsSticky(false);
    };

    window.addEventListener('resize', handleRezie);
    window.addEventListener('scroll', handleScroll);
  }, [closeMenu]);
  return <header className={isSticky ? 'sticky' : ''}>{children}</header>;
};

export default StickyHeader;
