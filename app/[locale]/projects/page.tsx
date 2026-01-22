'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Exterior Lighting Design', 'Interior Lighting Design', 'Unique Lighting Design', 'Landscape Design'];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa - Palm Jumeirah',
    category: 'Interior Lighting Design',
    description: 'Complete interior and exterior lighting design for a 12,000 sq ft waterfront villa.',
    image: '/images/project-1.jpg',
  },
  {
    id: 2,
    title: 'Five-Star Hotel Lobby',
    category: 'Unique Lighting Design',
    description: 'Grand chandelier installation and ambient lighting for luxury hotel entrance.',
    image: '/images/project-2.jpg',
  },
  {
    id: 3,
    title: 'Corporate Office Tower',
    category: 'Interior Lighting Design',
    description: 'Energy-efficient LED system with smart controls for 40-floor office building.',
    image: '/images/project-3.jpg',
  },
  {
    id: 4,
    title: 'Landscape Garden Estate',
    category: 'Landscape Design',
    description: 'Architectural landscape lighting highlighting natural features and pathways.',
    image: '/images/project-4.jpg',
  },
  {
    id: 5,
    title: 'Modern Penthouse',
    category: 'Interior Lighting Design',
    description: 'Minimalist lighting design with integrated smart home automation.',
    image: '/images/project-5.jpg',
  },
  {
    id: 6,
    title: 'Restaurant & Lounge',
    category: 'Unique Lighting Design',
    description: 'Mood lighting and decorative fixtures creating intimate dining atmosphere.',
    image: '/images/project-6.jpg',
  },
  {
    id: 7,
    title: 'Retail Shopping Mall',
    category: 'Exterior Lighting Design',
    description: 'Dynamic facade lighting and interior retail space illumination.',
    image: '/images/project-7.jpg',
  },
  {
    id: 8,
    title: 'Private Garden & Pool',
    category: 'Landscape Design',
    description: 'Underwater pool lighting and garden accent lighting for evening ambiance.',
    image: '/images/project-8.jpg',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="bg-[#000000]">
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
        <div className="container mx-auto px-6 max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-[#d4af37]">Project</span> Showcase
            </h1>
            <p className="text-[#a0a0a0] text-xl max-w-3xl mx-auto">
              Explore our collection of transformative lighting installations across Dubai and the UAE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c968] text-[#000000] shadow-[0_0_24px_rgba(212,175,55,0.3)]'
                    : 'bg-gradient-to-br from-[#1a1a1a] to-[#000000] text-white hover:border-[#d4af37] border border-[#2a2d35]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#2a2d35] group-hover:border-[#d4af37] transition-all duration-500 mb-6">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    
                    {/* Animated glow effect */}
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
                        className="w-64 h-64 bg-[#d4af37] rounded-full filter blur-[120px]"
                      ></motion.div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:to-[#d4af37]/5 transition-all duration-500 z-20"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                      <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider block mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#d4af37] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#d4af37]/0 group-hover:border-[#d4af37] transition-all duration-500 z-30"></div>
                  </div>

                  <div className="px-2">
                    <p className="text-[#a0a0a0] mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex items-center text-[#d4af37] group-hover:text-[#e8c968] transition-colors">
                      <span className="text-sm font-semibold">View Project</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
