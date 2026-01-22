'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Palette, Building2, Lightbulb, Shield, Wrench, Sparkles, ArrowUpRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const services = [
  {
    icon: Palette,
    title: 'Custom Lighting Design',
    description: 'Bespoke lighting solutions tailored to your architectural vision and functional needs.',
    image: '/service-design.avif',
    features: [
      'Conceptual design and visualization',
      'Technical specifications and drawings',
      'Material and fixture selection',
      'Lighting calculations and simulations',
    ],
  },
  {
    icon: Sparkles,
    title: 'Energy-Efficient Solutions',
    description: 'Sustainable LED systems that reduce energy consumption without compromising quality.',
    image: '/service-energy.avif',
    features: [
      'LED retrofit and upgrades',
      'Energy consumption analysis',
      'Sustainable lighting design',
      'Long-term cost savings',
    ],
  },
  {
    icon: Shield,
    title: 'Smart Lighting & Control Systems',
    description: 'Integrated automation for seamless control and enhanced user experience.',
    image: '/service-smart.avif',
    features: [
      'Home automation integration',
      'Mobile app control',
      'Scene programming',
      'Voice control compatibility',
    ],
  },
  {
    icon: Building2,
    title: 'Architectural Facade Lighting',
    description: 'Dramatic exterior illumination that enhances building aesthetics and visibility.',
    image: '/service-facade.avif',
    features: [
      'Building facade enhancement',
      'Landmark and monument lighting',
      'Dynamic color-changing systems',
      'Energy-efficient LED solutions',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Landscape & Outdoor Lighting',
    description: 'Transform outdoor spaces with strategic lighting that creates ambiance and security.',
    image: '/service-landscape.webp',
    features: [
      'Garden and pathway lighting',
      'Pool and water feature illumination',
      'Security and accent lighting',
      'Weather-resistant fixtures',
    ],
  },
  {
    icon: Wrench,
    title: 'Installation & Maintenance',
    description: 'Professional installation and ongoing support to ensure optimal performance.',
    image: '/service-installation.avif',
    features: [
      'Expert installation services',
      'System testing and commissioning',
      'Preventive maintenance programs',
      '24/7 technical support',
    ],
  },
];

export default function Services() {
  const { t, locale } = useLanguage();
  
  const services = [
    {
      icon: Palette,
      title: t('services.service1Title'),
      description: t('services.service1Description'),
      image: '/service-design.avif',
      features: [
        t('services.service1Feature1'),
        t('services.service1Feature2'),
        t('services.service1Feature3'),
        t('services.service1Feature4'),
      ],
    },
    {
      icon: Sparkles,
      title: t('services.service2Title'),
      description: t('services.service2Description'),
      image: '/service-energy.avif',
      features: [
        t('services.service2Feature1'),
        t('services.service2Feature2'),
        t('services.service2Feature3'),
        t('services.service2Feature4'),
      ],
    },
    {
      icon: Shield,
      title: t('services.service3Title'),
      description: t('services.service3Description'),
      image: '/service-smart.avif',
      features: [
        t('services.service3Feature1'),
        t('services.service3Feature2'),
        t('services.service3Feature3'),
        t('services.service3Feature4'),
      ],
    },
    {
      icon: Building2,
      title: t('services.service4Title'),
      description: t('services.service4Description'),
      image: '/service-facade.avif',
      features: [
        t('services.service4Feature1'),
        t('services.service4Feature2'),
        t('services.service4Feature3'),
        t('services.service4Feature4'),
      ],
    },
    {
      icon: Lightbulb,
      title: t('services.service5Title'),
      description: t('services.service5Description'),
      image: '/service-landscape.webp',
      features: [
        t('services.service5Feature1'),
        t('services.service5Feature2'),
        t('services.service5Feature3'),
        t('services.service5Feature4'),
      ],
    },
    {
      icon: Wrench,
      title: t('services.service6Title'),
      description: t('services.service6Description'),
      image: '/service-installation.avif',
      features: [
        t('services.service6Feature1'),
        t('services.service6Feature2'),
        t('services.service6Feature3'),
        t('services.service6Feature4'),
      ],
    },
  ];
  
  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
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
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              {t('services.badge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {t('services.title')} <span className="text-[#d4af37]">{t('services.titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('services.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-500 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-[#1a1a1a] group-hover:to-[#0a0a0a]">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Icon overlay on image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute bottom-4 left-4 z-20 w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/90 to-[#e8c968]/90 flex items-center justify-center backdrop-blur-sm group-hover:from-[#d4af37] group-hover:to-[#e8c968] transition-all duration-500"
                  >
                    <service.icon 
                      className="text-[#0a0a0a]" 
                      size={24} 
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>

                {/* Hover gradient overlay - gold theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37] rounded-full filter blur-[100px] opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4af37] rounded-full filter blur-[80px] opacity-15"></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col p-6">
                  
                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#a0a0a0] leading-relaxed mb-6 group-hover:text-[#c0c0c0] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-[#d4af37] flex-shrink-0 mt-0.5" size={16} strokeWidth={2} />
                        <span className="text-[#a0a0a0] text-sm group-hover:text-[#c0c0c0] transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-3xl"></div>
                </div>
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 -z-10 bg-[#d4af37] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-105"></div>
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
            {t('services.ctaText')}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c968] text-[#0a0a0a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>{t('services.ctaButton')}</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
