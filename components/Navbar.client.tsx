"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import DropdownMenu from './DropdownMenu';

// use client
interface INavLink {
  label: string;
  href: string;
  key: string;
}

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="poppins-semibold flexBetween padding-container relative z-30 py-5 bg">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link: INavLink) => (
          <Link href={link.href} key={link.key} className="regular-16 text-#191965 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/whatsapp.png"
          variant="btn_dark_green"
          href="https://wa.me/6283205418"
        />
      </div>
      <div className="dropdown-wrapper inline-block cursor-pointer lg:hidden" onClick={toggleDropdown}>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={22}
        />
        {isDropdownOpen && <DropdownMenu navLinks={NAV_LINKS} />}
      </div>
    </nav>
  )
}

export default Navbar;
