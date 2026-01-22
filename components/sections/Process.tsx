'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Wrench, HeadphonesIcon, Palette, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin by understanding your vision, space requirements, and functional needs.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Concept & Design',
    description: 'Our team develops custom lighting concepts with detailed specifications and visualizations.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Supply & Fabrication',
    description: 'We source premium materials and fabricate custom fixtures to exact specifications.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Installation & Support',
    description: 'Professional installation followed by comprehensive testing and ongoing maintenance.',
  },
];

export default function Process() {
  const { t, locale } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: t('process.step1Title'),
      description: t('process.step1Description'),
    },
    {
      number: '02',
      icon: Lightbulb,
      title: t('process.step2Title'),
      description: t('process.step2Description'),
    },
    {
      number: '03',
      icon: Wrench,
      title: t('process.step3Title'),
      description: t('process.step3Description'),
    },
    {
      number: '04',
      icon: HeadphonesIcon,
      title: t('process.step4Title'),
      description: t('process.step4Description'),
    },
  ];
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              {t('process.badge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            {t('process.title')}
            <br />
            <span className="text-[#d4af37]">{t('process.titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('process.description')}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-500 h-full flex flex-col">
                {/* Gradient overlay - gold theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border-2 border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] group-hover:from-[#d4af37] group-hover:to-[#e8c968] transition-all duration-500"
                  >
                    <step.icon 
                      className="text-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-500" 
                      size={36} 
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-[#d4af37] text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#a0a0a0] leading-relaxed text-sm group-hover:text-[#c0c0c0] transition-colors duration-300 flex-grow">
                    {step.description}
                  </p>

                  {/* Step indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index 
                              ? 'bg-[#d4af37] w-6' 
                              : 'bg-[#d4af37]/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37] rounded-full filter blur-[100px] opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4af37] rounded-full filter blur-[80px] opacity-15"></div>
                </div>
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex absolute top-24 -right-3 z-20 w-6 h-6 items-center justify-center"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37]/50 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#d4af37]" strokeWidth={3} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#a0a0a0] mb-6">
            {t('process.ctaText')}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>{t('process.ctaButton')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
