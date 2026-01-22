"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const { t, locale } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections on the page
      const sections = document.querySelectorAll('section');
      let inScrollMetrics = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        // Check if this is the ScrollMetrics section (has height of 300vh)
        if (section.style.height === '300vh' || section.classList.contains('h-[300vh]')) {
          // Check if we're within this section
          if (sectionTop <= 0 && sectionBottom > windowHeight * 0.3) {
            inScrollMetrics = true;
          }
        }
      });

      setIsHeaderVisible(!inScrollMetrics);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = '/#services';
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = '/#contact';
    }
  };

  const navItems = [
    { name: t("nav.home"), link: `/${locale}` },
    { name: t("nav.projects"), link: `/${locale}/projects` },
    { name: t("nav.services"), link: `/${locale}#services`, onClick: handleServicesClick },
    { name: t("nav.about"), link: `/${locale}/about` },
    { name: t("nav.contact"), link: `/${locale}#contact`, onClick: handleContactClick },
  ];

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        opacity: isHeaderVisible ? 1 : 0,
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: isHeaderVisible ? 'auto' : 'none',
      }}
    >
      <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {locale === 'ar' ? (
          <>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <NavbarButton variant="primary" href={`/${locale}#contact`} onClick={handleContactClick}>{t("nav.contact")}</NavbarButton>
            </div>
            <NavItems items={navItems} />
            <NavbarLogo />
          </>
        ) : (
          <>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <NavbarButton variant="primary" href={`/${locale}#contact`} onClick={handleContactClick}>{t("nav.contact")}</NavbarButton>
            </div>
          </>
        )}
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="grid grid-cols-3 gap-4 w-full">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  if (item.onClick) {
                    item.onClick(e);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="flex flex-col items-center justify-center px-3 py-4 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#d4af37] transition-all text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full pt-4 gap-3">
            <LanguageSwitcher />
            <NavbarButton
              onClick={(e: any) => {
                handleContactClick(e);
                setIsMobileMenuOpen(false);
              }}
              variant="primary"
              href={`/${locale}#contact`}
              className="w-full"
            >
              {t("nav.contact")}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
    </div>
  );
}
