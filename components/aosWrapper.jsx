'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div className='aos-wrapper'>{children}</div>;
};

export default AOSWrapper;
