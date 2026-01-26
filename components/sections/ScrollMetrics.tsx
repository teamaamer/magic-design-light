'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Lightbulb, Award, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Illustration } from '../ui/glowing-stars';

export default function ScrollMetrics() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Background color transitions - black throughout
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ['#0a0a0a', '#0f0f0f', '#1a1a1a', '#0f0f0f', '#0a0a0a']
  );

  // Stats counter animations - start at 10% and complete by 25%
  const projectsCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 400], {
    clamp: true,
  });
  const yearsCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 10], {
    clamp: true,
  });
  const satisfactionCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 100], {
    clamp: true,
  });
  
  // Round values for display
  const projectsRounded = useTransform(projectsCount, Math.round);
  const yearsRounded = useTransform(yearsCount, Math.round);
  const satisfactionRounded = useTransform(satisfactionCount, Math.round);

  // Opacity animations - fade in at 10%, stay visible until end
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.2, 1], [0, 1, 1]);
  const iconsOpacity = useTransform(scrollYProgress, [0.05, 0.15, 1], [0, 0.4, 0.4]);
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.2, 1], [0, 0.3, 0.3]);

  // Transform animations - stats slide up and stay in place
  const statsY = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  const statsScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

  // Heading animations - appear slightly before stats
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.15, 1], [0, 1, 1]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);

  // Icon rotation and movement
  const iconRotate = useTransform(scrollYProgress, [0.05, 0.9], [0, 360]);
  const iconY = useTransform(scrollYProgress, [0.05, 0.3], [100, -50]);

  // Scroll indicator fade
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);

  // Stars glow intensity - increases as user scrolls
  const starsGlowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  const floatingIcons = [
    { Icon: Sparkles, position: 'left-[10%] top-[20%]', delay: 0 },
    { Icon: Lightbulb, position: 'right-[15%] top-[30%]', delay: 0.1 },
    { Icon: Award, position: 'left-[20%] bottom-[25%]', delay: 0.2 },
    { Icon: Users, position: 'right-[25%] bottom-[35%]', delay: 0.3 },
    { Icon: Sparkles, position: 'left-[15%] top-[50%]', delay: 0.4 },
    { Icon: Lightbulb, position: 'right-[20%] top-[60%]', delay: 0.5 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full"
      style={{ zIndex: 1 }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Glowing Stars Background with increasing intensity */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: starsGlowIntensity }}
        >
          <div className="w-full h-full">
            <Illustration mouseEnter={false} />
          </div>
        </motion.div>

        {/* Additional Glow Effect */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: glowOpacity }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37] rounded-full filter blur-[150px] opacity-10"></div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: iconsOpacity }}
        >
          {floatingIcons.map(({ Icon, position, delay }, index) => (
            <motion.div
              key={index}
              className={`absolute ${position}`}
              style={{
                rotate: iconRotate,
                y: iconY,
              }}
            >
              <Icon className="h-12 w-12 text-[#d4af37]" strokeWidth={1.5} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20"
          style={{
            opacity: statsOpacity,
            y: statsY,
            scale: statsScale,
          }}
        >
          {/* Animated Heading */}
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-4">
              {t('metrics.heading')}
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-4">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-[#d4af37] rounded-full"></div>
              <p className="text-[#d4af37] text-sm sm:text-base lg:text-lg font-semibold">{t('metrics.subheading')}</p>
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-[#d4af37] rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center px-4 sm:px-0">
            <motion.div className="transform">
              <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-1 sm:mb-2">
                  <motion.span>{projectsRounded}</motion.span>+
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">{t('metrics.projects')}</div>
                <div className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">{t('metrics.projectsDetail')}</div>
              </div>
            </motion.div>

            <motion.div className="transform">
              <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-1 sm:mb-2">
                  <motion.span>{yearsRounded}</motion.span>+
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">{t('metrics.years')}</div>
                <div className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">{t('metrics.yearsDetail')}</div>
              </div>
            </motion.div>

            <motion.div className="transform">
              <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-1 sm:mb-2">
                  <motion.span>{satisfactionRounded}</motion.span>%
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">{t('metrics.satisfaction')}</div>
                <div className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">{t('metrics.satisfactionDetail')}</div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-12"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <div className="animate-bounce">
              <div className="flex flex-col items-center text-[#d4af37]">
                <span className="text-sm font-semibold mb-2">{t('metrics.scrollText')}</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
