'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t('testimonials.testimonial1Name'),
      quote: t('testimonials.testimonial1Quote'),
      image: '/testimonial-1.avif',
    },
    {
      name: t('testimonials.testimonial2Name'),
      quote: t('testimonials.testimonial2Quote'),
      image: '/testimonial-2.avif',
    },
  ];
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            {t('testimonials.badge')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('testimonials.title')} <span className="text-[#d4af37]">{t('testimonials.titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('testimonials.description')}
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35] hover:border-[#d4af37]/50 transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center">
                    <Quote className="text-[#d4af37]" size={24} />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors duration-300">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-[#a0a0a0] text-sm">{t('testimonials.clientLabel')}</p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#d4af37]/0 group-hover:border-[#d4af37] transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
