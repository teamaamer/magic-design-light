'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  showArrow = false,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  
  // Base styles - core button structure
  const base = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a1628] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none group overflow-hidden';
  
  // Size variants
  const sizeClasses = {
    sm: 'h-10 px-5 text-xs md:text-sm gap-2 rounded-full',
    md: 'h-12 px-7 text-sm md:text-base gap-2.5 rounded-full',
    lg: 'h-12 md:h-14 px-6 md:px-9 text-sm md:text-lg gap-2 md:gap-3 rounded-full',
  };
  
  // Style variants
  const variantClasses = {
    primary: [
      'bg-gradient-to-br from-[#d4af37] via-[#e8c968] to-[#d4af37]',
      'text-[#0a1628]',
      'shadow-lg shadow-[#d4af37]/25',
      'hover:shadow-2xl hover:shadow-[#d4af37]/40',
      'hover:-translate-y-0.5',
      'active:translate-y-0',
      'before:absolute before:inset-0',
      'before:bg-gradient-to-br before:from-[#e8c968] before:via-[#d4af37] before:to-[#e8c968]',
      'before:opacity-0 before:transition-opacity before:duration-300',
      'hover:before:opacity-100',
    ].join(' '),
    
    secondary: [
      'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]',
      'border border-[#2a2d35]',
      'text-white',
      'hover:bg-gradient-to-br hover:from-[#2a2a2a] hover:to-[#1a1a1a]',
      'hover:border-[#d4af37]/50',
      'hover:-translate-y-0.5',
      'active:translate-y-0',
      'shadow-lg shadow-black/50',
    ].join(' '),
    
    outline: [
      'bg-white',
      'border-2 border-[#d4af37]/60',
      'text-[#d4af37]',
      'hover:border-[#d4af37]',
      'hover:bg-[#d4af37]/10',
      'hover:-translate-y-0.5',
      'active:translate-y-0',
      'before:absolute before:inset-0',
      'before:bg-[#d4af37]',
      'before:opacity-0 before:transition-opacity before:duration-300',
      'hover:before:opacity-10',
    ].join(' '),
    
    text: [
      'text-white/80',
      'hover:text-[#d4af37]',
      'h-auto px-0',
      'font-medium',
    ].join(' '),
  };
  
  // Combine all classes
  const buttonClasses = [
    base,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className,
  ].filter(Boolean).join(' ');
  
  // Icon size based on button size
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;
  
  // Button content
  const content = (
    <>
      {/* Shimmer effect for primary and outline */}
      {(variant === 'primary' || variant === 'outline') && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </motion.div>
      )}
      
      {/* Content wrapper */}
      <span className="relative z-10 flex items-center justify-center gap-[inherit]">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight 
            size={iconSize}
            className="transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        )}
      </span>
    </>
  );
  
  // Render as link or button
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}
