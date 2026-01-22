'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { ANIMATION_VARIANTS, VIEWPORT_CONFIG } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  index?: number;
  href?: string;
  badge?: string;
  footer?: ReactNode;
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'hover-lift' | 'hover-glow';
}

export default function Card({
  icon: Icon,
  title,
  description,
  gradient = 'from-[#d4af37]/20 to-[#d4af37]/5',
  index = 0,
  href,
  badge,
  footer,
  className = '',
  iconSize = 24,
  variant = 'default',
}: CardProps) {
  const Component = href ? motion.a : motion.div;
  const componentProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

  const hoverEffects = {
    'default': {},
    'hover-lift': { y: -8 },
    'hover-glow': { scale: 1.02 },
  };

  return (
    <Component
      initial={ANIMATION_VARIANTS.fadeInUp.initial}
      whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
      transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: getStaggerDelay(index) }}
      viewport={VIEWPORT_CONFIG}
      whileHover={hoverEffects[variant]}
      className={`group relative block ${className}`}
      {...componentProps}
      aria-label={href ? `Learn more about ${title}` : undefined}
    >
      <div className="relative h-full bg-gradient-to-br from-[#1a2942] to-[#0f1e33] rounded-2xl p-6 md:p-8 border border-[#2a2d35] hover:border-[#d4af37]/50 transition-all duration-500 overflow-hidden">
        {/* Gradient overlay */}
        {gradient && (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        )}
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={false}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full filter blur-[80px] opacity-30"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 mb-4 self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                {badge}
              </span>
            </div>
          )}

          {/* Icon */}
          {Icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-6 group-hover:from-[#d4af37] group-hover:to-[#e8c968] transition-all duration-500"
              aria-hidden="true"
            >
              <Icon 
                className="text-[#d4af37] group-hover:text-[#0a1628] transition-colors duration-500" 
                size={iconSize} 
                strokeWidth={2}
              />
            </motion.div>
          )}
          
          {/* Title */}
          <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed mb-4 flex-grow group-hover:text-[#c0c0c0] transition-colors duration-300">
            {description}
          </p>

          {/* Footer */}
          {footer && (
            <div className="mt-auto pt-4">
              {footer}
            </div>
          )}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-3xl"></div>
        </div>
      </div>

      {/* Shadow effect */}
      {variant === 'hover-glow' && (
        <div className="absolute inset-0 -z-10 bg-[#d4af37] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-105"></div>
      )}
    </Component>
  );
}
