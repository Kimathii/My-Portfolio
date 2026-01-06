"use client";

import React, { useState } from "react";
import ThemeSwitcher from "@/components/theme-switcher";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <div className="text-2xl font-bold cursor-pointer">Mathias</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          <a
            href="#about"
            className="hover:text-purple-500 hover:underline transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-purple-500 hover:underline transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 hover:underline transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 flex flex-col">
          <a
            href="#about"
            className="hover:text-purple-500 hover:underline transition"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-purple-500 hover:underline transition"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 hover:underline transition"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
