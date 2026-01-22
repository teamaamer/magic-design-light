'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2d35] hover:border-[#d4af37] transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="text-[#d4af37]" size={18} />
      <span className="text-white text-sm font-semibold">
        {locale === 'en' ? 'AR' : 'EN'}
      </span>
    </motion.button>
  );
}
