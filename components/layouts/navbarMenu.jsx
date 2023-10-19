'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarMenu = ({ navLinks = [] }) => {
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
          >
            {navLink.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
