import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  rotate?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 6,
  x = 20,
  y = 20,
  rotate = 10,
  className = ''
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -y, 0],
        rotate: [0, rotate, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay
      }}
      style={{ perspective: 1000 }}
    >
      <div className="transform-style-3d drop-shadow-2xl">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingElement;