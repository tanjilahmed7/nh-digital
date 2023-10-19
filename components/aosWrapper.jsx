'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
