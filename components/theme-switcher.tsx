"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <div className="flex flex-row gap-3 items-center transition-all">
      <button 
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
        aria-label="Toggle theme"
      >
        {isLight ? (
          <FiSun className="h-5 w-5" />
        ) : (
          <FiMoon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;