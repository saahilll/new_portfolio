import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'blue' | 'violet' | 'pink' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'blue',
  size = 'md',
  glowEffect = true,
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-tech font-bold tracking-wider uppercase transition-all duration-300 ease-out";
  
  const variantStyles = {
    blue: "bg-gradient-to-r from-electric-blue to-deep-indigo text-stellar-white hover:shadow-glow-blue-intense",
    violet: "bg-gradient-to-r from-deep-indigo to-cosmic-violet text-stellar-white hover:shadow-glow-violet-intense",
    pink: "bg-gradient-to-r from-cosmic-violet to-neon-pink text-stellar-white hover:shadow-glow-pink-intense",
    outlined: "bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10",
  };
  
  const sizeStyles = {
    sm: "text-xs py-2 px-4 rounded",
    md: "text-sm py-3 px-6 rounded",
    lg: "text-md py-4 px-8 rounded",
  };
  
  const glowStyles = glowEffect ? `${
    variant === 'blue' ? 'shadow-glow-blue' :
    variant === 'violet' ? 'shadow-glow-violet' :
    variant === 'pink' ? 'shadow-glow-pink' :
    'hover:shadow-glow-blue'
  }` : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glowStyles} ${className}`;

  const MotionComponent = motion[href ? 'a' : 'button'];

  return (
    <MotionComponent 
      href={href}
      onClick={onClick}
      className={buttonStyles}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionComponent>
  );
};