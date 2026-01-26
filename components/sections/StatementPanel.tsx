'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { Quote, ArrowRight } from 'lucide-react';
import { ANIMATION_VARIANTS, VIEWPORT_CONFIG } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Illustration } from '../ui/glowing-stars';

export default function StatementPanel() {
  const { t } = useLanguage();
  return (
    <section 
      id="statement-panel" 
      className="relative bg-black overflow-hidden min-h-screen flex items-center py-12 md:py-16"
      aria-labelledby="statement-heading"
    >
      {/* Glowing Stars Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="w-full h-full">
          <Illustration mouseEnter={false} />
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Column */}
          <div className="max-w-2xl">
          <motion.div
            initial={ANIMATION_VARIANTS.fadeInUp.initial}
            whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
            transition={ANIMATION_VARIANTS.fadeInUp.transition}
            viewport={VIEWPORT_CONFIG}
            className="space-y-6 md:space-y-8"
          >
            {/* Quote icon */}
            <motion.div
              initial={ANIMATION_VARIANTS.scaleIn.initial}
              whileInView={ANIMATION_VARIANTS.scaleIn.animate}
              transition={{ ...ANIMATION_VARIANTS.scaleIn.transition, delay: 0.2 }}
              viewport={VIEWPORT_CONFIG}
            >
              <Quote className="w-16 h-16 text-[#d4af37]/30" strokeWidth={1.5} aria-hidden="true" />
            </motion.div>

            {/* Main heading */}
            <motion.h2
              id="statement-heading"
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.1 }}
              viewport={VIEWPORT_CONFIG}
              className="text-white uppercase leading-tight"
            >
              {t("statement.text").split(',')[0]},
              <br />
              <span className="text-[#d4af37]">{t("statement.text").split(',')[1]}</span>
            </motion.h2>
            
            {/* Content paragraphs */}
            <div className="space-y-4 max-w-4xl">
              <motion.p
                initial={ANIMATION_VARIANTS.fadeInUp.initial}
                whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
                transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.2 }}
                viewport={VIEWPORT_CONFIG}
                className="text-[#e0e0e0] text-lg md:text-xl leading-relaxed font-light"
              >
                {t("statement.paragraph1").split(t("statement.paragraph1Highlight"))[0]}
                <span className="text-[#d4af37] font-medium">{t("statement.paragraph1Highlight")}</span>
                {t("statement.paragraph1").split(t("statement.paragraph1Highlight"))[1]}
              </motion.p>
              
              <motion.p
                initial={ANIMATION_VARIANTS.fadeInUp.initial}
                whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
                transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.3 }}
                viewport={VIEWPORT_CONFIG}
                className="text-[#a0a0a0] text-base md:text-lg leading-relaxed"
              >
                {t("statement.paragraph2")}
              </motion.p>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={VIEWPORT_CONFIG}
              className="h-px w-32 bg-gradient-to-r from-[#d4af37] to-transparent origin-left"
              aria-hidden="true"
            ></motion.div>
            
            {/* CTA */}
            <motion.div
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.5 }}
              viewport={VIEWPORT_CONFIG}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              role="group"
              aria-label="Action buttons"
            >
              <Button variant="primary" href="/services" showArrow>
                {t("services.badge")}
              </Button>
              <Button variant="outline" href="/about">
                {t("statement.cta")}
              </Button>
            </motion.div>
          </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={VIEWPORT_CONFIG}
            className="relative lg:order-last flex items-end justify-center h-full"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] max-h-[60vh] lg:max-h-[70vh] w-full rounded-2xl overflow-hidden border border-[#d4af37]/20">
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/20 via-transparent to-transparent z-10"></div>
              
              {/* Image */}
              <Image
                src="/statement-image.avif"
                alt="Magic Design Light - Transformative lighting installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#d4af37] z-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#d4af37] z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
