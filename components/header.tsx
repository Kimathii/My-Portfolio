"use client";

import React, { useState } from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown, staggerContainer, fadeIn } from "@/lib/animations";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-50"
      variants={slideDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Mathias
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          {["About", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-purple-500 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.path
                    key="close"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.path
                    key="open"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-black px-6 py-4 flex flex-col overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } }}
          >
            {["About", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 hover:text-purple-500 hover:underline transition"
                onClick={closeMenu}
                variants={fadeIn}
                whileHover={{ x: 4 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
