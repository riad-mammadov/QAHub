"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/utils/links";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-2 left-0 right-0 flex justify-between items-center z-50 bg-transparent p-4 px-12">
      <Link href="/">
        <button className="text-white text-2xl font-semibold font-mono tracking-widest">
          QAHub
        </button>
      </Link>
      <div className="flex items-center">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>
                  <button className="text-white hover:text-emerald-200 transition-colors duration-200 flex items-center">
                    {link.icon}
                    <span className="ml-2">{link.title}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <MobileNavbar
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          links={navLinks}
        />
      )}
    </div>
  );
}

export default Nav;
