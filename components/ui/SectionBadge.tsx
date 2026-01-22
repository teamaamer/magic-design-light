'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ANIMATION_VARIANTS, VIEWPORT_CONFIG } from '@/lib/constants';

interface SectionBadgeProps {
  icon?: LucideIcon;
  text: string;
  animated?: boolean;
}

export default function SectionBadge({ icon: Icon, text, animated = true }: SectionBadgeProps) {
  return (
    <motion.div
      initial={ANIMATION_VARIANTS.scaleIn.initial}
      whileInView={ANIMATION_VARIANTS.scaleIn.animate}
      transition={ANIMATION_VARIANTS.scaleIn.transition}
      viewport={VIEWPORT_CONFIG}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-sm"
      role="status"
      aria-label={text}
    >
      {Icon ? (
        <Icon className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
      ) : (
        <div className={`w-2 h-2 rounded-full bg-[#d4af37] ${animated ? 'animate-pulse' : ''}`} aria-hidden="true"></div>
      )}
      <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
        {text}
      </span>
    </motion.div>
  );
}
