"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function MobileNavbar({ links, isOpen, setIsOpen }) {
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 right-0 w-full z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              {links.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.title}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    onClick={toggleMenu}
                    className="text-white text-2xl font-roboto font-semibold hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNavbar;
