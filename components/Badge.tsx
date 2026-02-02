
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', onClick }) => {
  const baseStyles = "px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors cursor-default";
  
  const variants = {
    primary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    outline: "border border-slate-200 text-slate-500 hover:bg-slate-50"
  };

  const clickableStyles = onClick ? "cursor-pointer" : "";

  return (
    <span 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${clickableStyles}`}
    >
      {children}
    </span>
  );
};
