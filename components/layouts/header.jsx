'use client';

import StickyHeader from './stickyHeader';
import NavbarMenu from './navbarMenu';
import MagneticButton from '../magneticButton';
import Link from 'next/link';
import Image from 'next/image';
import { useMenu } from '@/context/menuContext';

const Header = ({ navLinks }) => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <StickyHeader>
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
              className={`menu-toggler d-lg-none ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </StickyHeader>
      <nav className={`navbar-mobile ${isMenuOpen ? 'show' : ''}`}>
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
