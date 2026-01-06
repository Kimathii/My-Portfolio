import React from "react";

interface BadgeProps {
  children: React.ReactNode;     // content of the badge
  color?: "blue" | "red" | "green" | "yellow" | "gray"; // allowed Tailwind colors
  className?: string;            // extra Tailwind classes
}

export const Badge: React.FC<BadgeProps> = ({ children, color = "blue", className }) => {
  // Map allowed colors to Tailwind classes (safe for JIT)
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    gray: "bg-gray-500",
  };

  return (
    <span
      className={`text-white text-xs font-bold px-2 py-1 rounded-full ${colorClasses[color]} ${className || ""}`}
    >
      {children}
    </span>
  );
};
