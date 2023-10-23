'use client';

import { useMenu } from '@/context/menuContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarMenu = ({ navLinks = [] }) => {
  const { closeMenu } = useMenu();

  const {
    menu: { menuItems: { nodes: menuItems } = {} },
  } = navLinks || {};

  const pathname = usePathname();

  return (
    <ul className='navbar-menu list-unstyled'>
      {menuItems.map((navLink) => (
        <li key={navLink.id}>
          <Link
            href={navLink.url}
            className={pathname === navLink.url ? 'active' : ''}
            onClick={closeMenu}
          >
            {navLink.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
