'use client';

import {useState, useEffect} from 'react'

const Dropdown = ({className = '', children}) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = (event) => {
    const isDropdown = event.target.closest('.nh-dropdown-toggle');

    if(isDropdown) {
      return setIsActive(prevState => !prevState);
    }

    setIsActive(false);
  }

  useEffect(() => {
    window.addEventListener('click', handleDropdown)
  
    return () => {
      window.addEventListener('click', handleDropdown)
    }
  }, []);
  

  return (
    <div className={`nh-dropdown ${className}`}>
      <button type="button" className={`nh-dropdown-toggle ${isActive ? 'active' : ''}`}>
        {children.trigger}
        </button>
      <div className={`nh-dropdown-menu ${isActive ? 'show' : ''}`}>
        <div>{children.menu}</div>
      </div>
    </div>
  )
}

export default Dropdown