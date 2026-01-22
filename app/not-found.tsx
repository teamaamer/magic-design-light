'use client';

import Link from 'next/link';
import { Home, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { locales, Locale, defaultLocale } from '@/lib/i18n/config';

export default function NotFound() {
  const pathname = usePathname();
  
  // Extract locale from pathname
  const getLocale = (): Locale => {
    if (!pathname) return defaultLocale;
    const segments = pathname.split('/');
    const pathLocale = segments[1];
    return locales.includes(pathLocale as Locale) ? (pathLocale as Locale) : defaultLocale;
  };

  const locale = getLocale();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#d4af37] via-[#e8c968] to-[#d4af37] bg-clip-text text-transparent mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-xl text-[#a0a0a0] mb-12">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c968] text-[#0a0a0a] font-semibold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-full border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-300"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-[#2a2d35] pt-8">
            <p className="text-[#6b7280] mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/projects`} className="text-[#d4af37] hover:text-[#e8c968] transition-colors">
                Projects
              </Link>
              <Link href={`/${locale}#services`} className="text-[#d4af37] hover:text-[#e8c968] transition-colors">
                Services
              </Link>
              <Link href={`/${locale}/about`} className="text-[#d4af37] hover:text-[#e8c968] transition-colors">
                About
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
