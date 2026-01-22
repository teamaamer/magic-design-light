'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Tag, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const projectData: { [key: string]: any } = {
  '1': {
    title: 'Luxury Villa - Palm Jumeirah',
    category: 'Residential',
    location: 'Palm Jumeirah, Dubai',
    date: 'Completed 2023',
    description: 'A comprehensive lighting transformation for a prestigious waterfront villa, combining elegance with cutting-edge technology.',
    challenge: 'The client required a sophisticated lighting system that would highlight the villa\'s architectural features while maintaining energy efficiency and providing flexible control options for different occasions.',
    solution: 'We designed a multi-layered lighting approach featuring custom chandeliers, integrated LED strips, and smart control systems. The solution included accent lighting for art pieces, ambient lighting for living spaces, and dramatic outdoor illumination for the pool and garden areas.',
    results: [
      'Reduced energy consumption by 40% compared to traditional lighting',
      'Seamless integration with home automation system',
      'Enhanced property value and aesthetic appeal',
      'Flexible lighting scenes for different moods and occasions',
    ],
    specifications: [
      'Custom crystal chandeliers',
      'Smart LED control systems',
      'Outdoor waterproof fixtures',
      'Energy-efficient LED technology',
    ],
  },
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id] || projectData['1'];

  return (
    <main className="bg-[#000000]">
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#e8c968] transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
              <span className="font-semibold">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-white mb-6">{project.title}</h1>
              <p className="text-[#a0a0a0] text-xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#d4af37]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <p className="text-[#a0a0a0] text-sm">{project.location}</p>
                  </div>
                </div>
                <div className="h-px bg-[#2a2d35]"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-[#d4af37]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Completion</h4>
                    <p className="text-[#a0a0a0] text-sm">{project.date}</p>
                  </div>
                </div>
                <div className="h-px bg-[#2a2d35]"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                    <Tag className="text-[#d4af37]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Category</h4>
                    <p className="text-[#a0a0a0] text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main project image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#2a2d35] group">
              <div className="absolute inset-0 flex items-center justify-center">
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
                  className="w-96 h-96 bg-[#d4af37] rounded-full filter blur-[150px]"
                ></motion.div>
              </div>
              <div className="absolute inset-0 border-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/40 transition-colors duration-300 rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35]"
            >
              <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-[#d4af37]">01.</span> The Challenge
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35]"
            >
              <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-[#d4af37]">02.</span> Our Solution
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-[#d4af37]">03.</span> Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-6 border border-[#2a2d35] hover:border-[#d4af37]/50 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#d4af37] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} strokeWidth={2} />
                    <p className="text-[#c0c0c0] leading-relaxed">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-[#d4af37]">04.</span> Technical Specifications
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.specifications.map((spec: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-[#c0c0c0]">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-3xl p-12 border border-[#2a2d35] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-[#a0a0a0] text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your lighting vision to life with the same precision and quality.
              </p>
              <Button variant="primary" href="/#contact" size="lg">
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
