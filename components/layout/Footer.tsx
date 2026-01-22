'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#000000] border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#d4af37] rounded-md flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-lg">
                {t('footer.companyName')}
              </span>
            </div>
            <p className="text-[#a0a0a0] mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              {t('footer.navigationTitle')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-[#a0a0a0] hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-[#a0a0a0] hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[#a0a0a0] hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[#a0a0a0] hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-[#a0a0a0] hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-3">
              <li className="text-[#a0a0a0]">{t('footer.service1')}</li>
              <li className="text-[#a0a0a0]">{t('footer.service2')}</li>
              <li className="text-[#a0a0a0]">{t('footer.service3')}</li>
              <li className="text-[#a0a0a0]">{t('footer.service4')}</li>
              <li className="text-[#a0a0a0]">{t('footer.service5')}</li>
              <li className="text-[#a0a0a0]">{t('footer.service6')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              {t('footer.visitUsTitle')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-[#a0a0a0]">
                  {t('footer.location')}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-[#a0a0a0]">{t('footer.phone')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-[#a0a0a0]">{t('footer.email')}</span>
              </li>
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#d4af37] hover:text-[#e8c968] transition-colors text-sm"
            >
              {t('footer.viewOnMaps')}
            </a>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#6b7280] text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-[#6b7280] hover:text-[#d4af37] transition-colors text-sm"
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-[#6b7280] hover:text-[#d4af37] transition-colors text-sm"
            >
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
