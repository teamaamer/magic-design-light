'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { Illustration } from '../ui/glowing-stars';
import { Sparkles, Award, Zap } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useRef, useEffect } from 'react';
import { ANIMATION_VARIANTS, VIEWPORT_CONFIG } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  const scrollToContent = () => {
    const nextSection = document.querySelector('#statement-panel');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 pt-24 md:pt-16">
        <motion.div 
          className="max-w-5xl mx-auto"
          style={{ opacity }}
        >
          <div className="text-center space-y-3 md:space-y-4 flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={ANIMATION_VARIANTS.fadeIn.initial}
              animate={ANIMATION_VARIANTS.fadeIn.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeIn.transition, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-sm"
              role="status"
              aria-label="Dubai's Premier Lighting Specialists"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
              <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
                {t("hero.badge")}
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              animate={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] w-full"
            >
              <span className="block mb-1 md:mb-2">{t("hero.title").toUpperCase()}</span>
              <span className="block bg-gradient-to-r from-[#d4af37] via-[#e8c968] to-[#d4af37] bg-clip-text text-transparent">
                {t("hero.titleHighlight").toUpperCase()}
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              animate={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
            
            {/* Trust indicators */}
            <motion.div
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              animate={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 pt-2 text-xs md:text-sm"
              role="list"
              aria-label="Company achievements"
            >
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true"></div>
                <span>{t("hero.stat1")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true"></div>
                <span>{t("hero.stat2")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" aria-hidden="true"></div>
                <span>{t("hero.stat3")}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              animate={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ ...ANIMATION_VARIANTS.fadeInUp.transition, delay: 0.4 }}
              className="flex flex-row gap-3 md:gap-4 justify-center items-center pt-3 md:pt-4"
              role="group"
              aria-label="Call to action buttons"
            >
              <Button variant="primary" href="/projects" showArrow size="lg">
                {t("hero.cta1")}
              </Button>
              <a href="/#contact">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  duration={2}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white font-bold text-sm md:text-lg hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  {t("hero.cta2")}
                </HoverBorderGradient>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-4 md:pt-6"
            >
              <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={scrollToContent}
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-lg p-2"
                aria-label="Scroll to explore content"
              >
                <span className="text-[#d4af37] text-xs font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                  {t('hero.scrollText')}
                </span>
                <div className="w-6 h-10 border-2 border-[#d4af37]/50 group-hover:border-[#d4af37] rounded-full flex items-start justify-center p-2 transition-colors">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-3 bg-[#d4af37] rounded-full"
                  ></motion.div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
