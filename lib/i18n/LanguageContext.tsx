'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales, defaultLocale, localeDirections } from './config';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract locale from pathname
  const getLocaleFromPath = (): Locale => {
    if (!pathname) return initialLocale || defaultLocale;
    const segments = pathname.split('/');
    const pathLocale = segments[1];
    return locales.includes(pathLocale as Locale) ? (pathLocale as Locale) : (initialLocale || defaultLocale);
  };

  const [locale, setLocaleState] = useState<Locale>(getLocaleFromPath());
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    const currentLocale = getLocaleFromPath();
    setLocaleState(currentLocale);
  }, [pathname]);

  useEffect(() => {
    import(`./locales/${locale}.json`).then((module) => {
      setTranslations(module.default);
    }).catch((error) => {
      console.error('Failed to load translations:', error);
    });
    
    // Update document attributes
    if (typeof window !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = localeDirections[locale];
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    if (!pathname) return;
    
    // Get the current path without locale
    const segments = pathname.split('/');
    const currentLocale = locales.includes(segments[1] as Locale) ? segments[1] : null;
    
    let newPath: string;
    if (currentLocale) {
      // Replace existing locale
      segments[1] = newLocale;
      newPath = segments.join('/');
    } else {
      // Add locale prefix
      newPath = `/${newLocale}${pathname}`;
    }
    
    router.push(newPath);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value || key;
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
