"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/utils/links";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: -10 },
        hidden: { y: "-130%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky bg-gray-900/90 top-2 left-0 right-0 flex justify-between items-center z-50 bg-none p-4 px-12"
    >
      <Link href="/">
        <button className="text-stone-300 text-2xl font-semibold font-serif tracking-wider px-5 py-2.5">
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
    </motion.div>
  );
}

export default Nav;
