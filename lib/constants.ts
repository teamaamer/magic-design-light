export const COLORS = {
  white: '#ffffff',
  offWhite: '#f8f9fa',
  lightGray: '#e9ecef',
  gray: '#6c757d',
  darkGray: '#343a40',
  gold: {
    primary: '#d4af37',
    light: '#e8c968',
    dark: '#b8941f',
  },
  text: {
    dark: '#212529',
    muted: '#6c757d',
    light: '#ffffff',
  },
} as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
} as const;

export const VIEWPORT_CONFIG = {
  once: true,
  margin: '-100px',
  amount: 0.3,
} as const;

export const CONTACT_INFO = {
  phone: '+971 XX XXX XXXX',
  email: 'info@magicdesignlight.ae',
  address: 'Dubai, United Arab Emirates',
  whatsapp: 'https://wa.me/971XXXXXXXXX',
  instagram: 'https://instagram.com/magicdesignlight',
  workingHours: {
    weekdays: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    weekend: 'Friday - Saturday: Closed',
  },
} as const;

export const SITE_CONFIG = {
  name: 'Magic Design Light',
  tagline: 'Premium Lighting Design & Installation Dubai',
  description: 'Luxury lighting design, supply, and installation for residential, hospitality, and commercial spaces in Dubai.',
  url: 'https://magicdesignlight.ae',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const TOUCH_TARGET_SIZE = 44;

export const Z_INDEX = {
  background: 0,
  content: 10,
  header: 50,
  modal: 100,
  tooltip: 200,
} as const;
