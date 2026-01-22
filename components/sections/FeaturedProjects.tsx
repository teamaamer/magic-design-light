'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Home, Building, Trees } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FeaturedProjects() {
  const { t, locale } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: t('projects.project1Title'),
      category: t('projects.project1Category'),
      icon: Home,
    },
    {
      id: 2,
      title: t('projects.project2Title'),
      category: t('projects.project2Category'),
      icon: Building,
    },
    {
      id: 3,
      title: t('projects.project3Title'),
      category: t('projects.project3Category'),
      icon: Building,
    },
    {
      id: 4,
      title: t('projects.project4Title'),
      category: t('projects.project4Category'),
      icon: Trees,
    },
  ];
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
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
            <Lightbulb className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase">
              {t('projects.badge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            {t('projects.title')} <span className="text-[#d4af37]">{t('projects.titleHighlight')}</span> {t('projects.titleSuffix')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('projects.description')}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href={`/${locale}/projects/${project.id}`} className="group block">
                <div className="relative rounded-3xl overflow-hidden h-[450px] bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#2a2d35] group-hover:border-[#d4af37] transition-all duration-500">
                  {/* Gradient overlay - gold theme */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#d4af37]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-64 h-64 bg-[#d4af37] rounded-full filter blur-[120px]"
                    ></motion.div>
                  </motion.div>

                  {/* Icon */}
                  <div className="absolute top-8 right-8 z-20">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 rounded-xl bg-[#d4af37]/10 backdrop-blur-sm border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-300"
                    >
                      <project.icon className="w-8 h-8 text-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300" strokeWidth={2} />
                    </motion.div>
                  </div>

                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Category badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                        <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* View project link */}
                      <div className="flex items-center gap-2 text-[#a0a0a0] group-hover:text-[#d4af37] transition-colors duration-300">
                        <span className="text-sm font-semibold">View Project Details</span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-all duration-500 z-[5]"></div>

                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{
                    backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-[#000000] border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-xl hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d4af37]/30 group"
          >
            <span>{t('projects.viewAll')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
