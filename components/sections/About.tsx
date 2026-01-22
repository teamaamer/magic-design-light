'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  const highlights = [
    { 
      icon: Lightbulb, 
      title: t('about.highlight1Title'),
      text: t('about.highlight1Text')
    },
    { 
      icon: Zap, 
      title: t('about.highlight2Title'),
      text: t('about.highlight2Text')
    },
    { 
      icon: Shield, 
      title: t('about.highlight3Title'),
      text: t('about.highlight3Text')
    },
  ];

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
  ];
  return (
    <section className="min-h-screen flex items-center py-12 md:py-16 bg-gradient-to-b from-[#0a0a0a] to-[#000000] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px] opacity-20"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 md:space-y-6 lg:order-2"
          >
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30"
            >
              <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
              <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
                {t('about.badge')}
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white"
            >
              {t('about.title')}
              <br />
              <span className="text-[#d4af37]">{t('about.titleHighlight') || 'Through Light'}</span>
            </motion.h2>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="text-[#c0c0c0] text-base md:text-lg leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-[#a0a0a0] text-base leading-relaxed">
                {t('about.description2')}
              </p>
            </motion.div>

            {/* Image - appears here on mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative lg:hidden"
            >
              <div className="relative rounded-3xl overflow-hidden h-[400px] border border-[#2a2d35] group">
                <Image
                  src="/about-sculpt.avif"
                  alt="Sculpting Experiences Through Light"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 border-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/40 transition-colors duration-300 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]"></div>
              </div>
            </motion.div>
            
            {/* Highlights cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2 md:gap-3 pt-3"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-xl w-full h-full"
                    as="div"
                    duration={2}
                    className="group flex flex-col items-center text-center gap-3 p-3 md:p-4 bg-[#1a1a1a] w-full h-full min-h-[200px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="text-[#d4af37]" size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm">{highlight.title}</h4>
                      <p className="text-[#a0a0a0] text-xs leading-relaxed">{highlight.text}</p>
                    </div>
                  </HoverBorderGradient>
                </motion.div>
              ))}
            </motion.div>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 pt-2"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#a0a0a0] text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element - desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative hidden lg:block lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden h-[600px] border border-[#2a2d35] group">
              <Image
                src="/about-sculpt.avif"
                alt="Sculpting Experiences Through Light"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 border-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/40 transition-colors duration-300 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]"></div>
            </div>
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#d4af37] rounded-3xl opacity-10 blur-3xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
