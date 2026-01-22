'use client';

import { motion } from 'framer-motion';

const metrics = [
  { number: '400+', label: 'Projects Delivered' },
  { number: '200+', label: 'Custom Designs' },
  { number: '10+', label: 'Years of Expertise' },
  { number: '100%', label: 'Client Commitment' },
];

export default function Metrics() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  {metric.number}
                </span>
              </div>
              <div className="h-1 w-16 bg-[#d4af37] mx-auto mb-3"></div>
              <p className="text-[#a0a0a0] text-sm uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
