'use client';

import { useEffect, useState } from 'react';

const Collapse = ({ tiggerClassName = '', bodyClassName = '', children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCollapse = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        return setIsActive(true);
      }
      setIsActive(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`collapse-trigger ${tiggerClassName} ${
          isActive ? 'active' : ''
        }`}
        onClick={handleCollapse}
      >
        {children.trigger}
      </div>
      <div className={`nh-collapse ${bodyClassName} ${isActive ? 'show' : ''}`}>
        <div>{children.body}</div>
      </div>
    </>
  );
};

export default Collapse;
