import type { Metadata } from "next";
import { Urbanist, Vazirmatn } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { locales, Locale, localeDirections } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-urbanist",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Magic Design Light | Premium Lighting Design & Installation Dubai",
  description: "Luxury lighting design, supply, and installation for residential, hospitality, and commercial spaces in Dubai. Expert lighting solutions with precision and lasting impact.",
  keywords: "lighting design Dubai, luxury lighting, architectural lighting, custom lighting, LED solutions, smart lighting Dubai",
  openGraph: {
    title: "Magic Design Light | Premium Lighting Design Dubai",
    description: "Transforming spaces with luxury lighting design and installation in Dubai",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params
  const { locale: localeParam } = await params;
  
  // Validate locale
  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dir = localeDirections[locale];
  
  // Use Vazirmatn for Arabic, Urbanist for English
  const fontClass = locale === 'ar' ? vazirmatn.className : urbanist.className;

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body className={`${fontClass} antialiased`}>
        <LanguageProvider initialLocale={locale}>
          <ErrorBoundary>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </ErrorBoundary>
        </LanguageProvider>
      </body>
    </html>
  );
}
