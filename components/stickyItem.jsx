'use client';

import { useState, useEffect, useRef } from 'react';

const StickyElement = ({children}) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const headerHeight = 160;
    const element = stickyRef.current;

    if(!element) return;
    const parentElem = element.parentElement;
    const offsetTop = parentElem.offsetTop;    
    
    const handleScroll = () => {
      if (window.scrollY > offsetTop - headerHeight && window.scrollY < offsetTop + (parentElem.clientHeight - element.clientHeight - headerHeight) && window.innerWidth >= 992) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<div ref={stickyRef} className={`sticky-element ${isSticky ? 'is-sticky' : ''}`}>{children}</div>);
};

export default StickyElement;
