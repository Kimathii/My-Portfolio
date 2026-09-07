"use client";

import React, { useState, useEffect } from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown, staggerContainer, fadeIn } from "@/lib/animations";

const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionElements = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      let currentSection = "";
      for (const { id, element } of sectionElements) {
        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white border-b border-black/5 dark:border-white/10 shadow-xs z-50 transition-colors duration-300"
      variants={slideDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <motion.a
          href="#"
          className="text-2xl font-bold cursor-pointer tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Mathias<span className="text-purple-600 dark:text-purple-400">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm lg:text-base">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-black/70 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
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
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2 border-b border-black/5 dark:border-white/10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 text-base transition-colors ${
                  activeSection === item.id
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-black/80 dark:text-gray-200 hover:text-purple-500"
                }`}
                onClick={closeMenu}
                variants={fadeIn}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

