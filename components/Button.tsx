import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-aimers-red text-white hover:bg-red-700 shadow-[0_0_20px_rgba(210,16,18,0.5)] hover:shadow-[0_0_30px_rgba(210,16,18,0.7)] border border-transparent",
    secondary: "bg-white text-aimers-dark hover:bg-gray-200 border border-transparent",
    outline: "bg-transparent text-white border-2 border-white/20 hover:border-aimers-red hover:text-aimers-red hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;