'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const teamMembers = [
  {
    name: 'Mahmoud Kalout',
    role: 'Managing Director',
    image: '/team/mahmoud.avif',
    featured: true,
  },
  {
    name: 'Glenda Pon-An',
    role: 'Office Manager',
    image: '/team/glenda.avif',
  },
  {
    name: 'Alaa Edden Kalout',
    role: 'Accounting Executive',
    image: '/team/alaa.avif',
  },
  {
    name: 'Mohammed Ayad',
    role: 'Projects Executive',
    image: '/team/ayad.avif',
  },
  {
    name: 'Abdulrahman Alkattan',
    role: 'Sales Executive',
    image: '/team/abdruhman.avif',
  },
  {
    name: 'Beverly De Jesus',
    role: 'Sr. Lighting Designer',
    image: '/team/bev.avif',
  },
  {
    name: 'Naziya Khan',
    role: 'Q&E Coordinator',
    image: '/team/nazyia.avif',
  },
  {
    name: 'Maged Samy',
    role: 'Storekeeper',
    image: '/team/maged.avif',
  },
  {
    name: 'Murshid Ahmed',
    role: 'Lighting Designer',
    image: '/team/murshed.avif',
  },
  {
    name: 'Harsha Muthurai',
    role: 'Lighting Designer',
    image: '/team/harsha.avif',
  },
  {
    name: 'Jalal Khan',
    role: 'Products H&C',
    image: '/team/jalal.avif',
  },
];

export default function Team() {
  const { t } = useLanguage();
  const managingDirector = teamMembers.find(member => member.featured);
  const otherMembers = teamMembers.filter(member => !member.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[200px]"></div>
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
            {t('team.badge')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-bold mb-6"
          >
            {t('team.title')} <span className="text-[#d4af37]">{t('team.titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#a0a0a0] text-xl max-w-3xl mx-auto"
          >
            {t('team.description')}
          </motion.p>
        </motion.div>

        {/* Managing Director - Featured */}
        {managingDirector && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-20"
          >
            <div className="group">
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border-2 border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500 max-w-sm">
                <div className="relative w-64 h-80 mx-auto mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={managingDirector.image}
                    alt={managingDirector.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">{managingDirector.name}</h3>
                  <p className="text-[#d4af37] font-semibold">{managingDirector.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {otherMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-4 border border-[#2a2d35] hover:border-[#d4af37]/50 transition-all duration-500">
                <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-sm font-bold mb-1">{member.name}</h3>
                  <p className="text-[#d4af37] text-xs">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
