'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MagneticButton from '../magneticButton';
import StickyHeader from './stickyHeader';
import NavbarMenu from './navbarMenu';

const Header = ({ navLinks }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggleMenu]);

  return (
    <>
      <StickyHeader setToggleMenu={() => setToggleMenu(false)}>
        <nav className='navbar-main'>
          <div className='container'>
            <Link href='/' className='logo'>
              <Image
                src='/images/logo.svg'
                alt='logo'
                width='160'
                height='24'
                priority={true}
              />
            </Link>
            <div className='d-none d-lg-block'>
              <NavbarMenu navLinks={navLinks} />
            </div>
            <MagneticButton className='d-none d-lg-block'>
              <Link
                href='/contact-us'
                className='btn btn-primary button--wayra header-btn handshake'
              >
                <Image
                  src='/images/thumb.svg'
                  alt='thumb'
                  width='20'
                  height='21'
                />
                <span className='button__text-inner'> Contact us</span>
              </Link>
            </MagneticButton>
            <button
              type='button'
              className={`menu-toggler d-lg-none ${toggleMenu ? 'active' : ''}`}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </StickyHeader>
      <nav className={`navbar-mobile ${toggleMenu ? 'show' : ''}`}>
        <div className='container'>
          <NavbarMenu navLinks={navLinks} />
          <MagneticButton className='d-lg-none'>
            <Link
              href='/contact-us'
              className='btn btn-primary button--wayra header-btn handshake'
            >
              <Image
                src='/images/thumb.svg'
                alt='thumb'
                width='20'
                height='21'
              />
              <span className='button__text-inner'>Contact us</span>
            </Link>
          </MagneticButton>
        </div>
      </nav>
    </>
  );
};

export default Header;
