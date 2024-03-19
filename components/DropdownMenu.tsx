// components/DropdownMenu.tsx
import React from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
  navLinks: { label: string; href: string; key: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ navLinks }) => {
  return (
    <div className="poppins-semibold dropdown-menu-container">
      <div className="dropdown-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
