'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Lightbulb, Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import Team from '@/components/sections/Team';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Uncompromising quality in every project, from design to installation.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision drives our work. We listen, collaborate, and deliver.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge technology meets timeless design principles.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail ensures flawless execution.',
  },
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '400+', label: 'Projects Completed' },
  { number: '200+', label: 'Custom Designs' },
  { number: '100%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#000000]">
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Magic Design Light
            </span>
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-[#d4af37]">Our Story:</span>
              <br />
              The Vision Behind the Light
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2">
                  <span className="text-5xl lg:text-6xl font-bold text-white">
                    {stat.number}
                  </span>
                </div>
                <div className="h-1 w-16 bg-[#d4af37] mx-auto mb-3"></div>
                <p className="text-[#a0a0a0] text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-lg leading-relaxed mb-6">
                Our story began when our Managing Director, <span className="text-[#d4af37] font-semibold">Mahmoud Kaltout</span>, transformed over 20 years of technical expertise and a passion for aesthetics into a new kind of lighting design firm; one dedicated to turning light into emotion, not just illumination.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                Under Mahmoud's leadership, Magic Design Light has grown from a specialized company into a trusted industry leader, mastering projects from the serene glow of luxury villas to the spiritual ambiance of mosques and the purposeful brilliance of modern offices.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                Every project reflects Mahmoud's vision and our team's dedication, combining artistic intuition with technical precision. He has built a culture focused on truly serving clients, delivering contemporary lighting designs that bring joy while honoring the spirit of every space.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Today, Magic Design Light is both youthful and seasoned, driven by the conviction that Dubai deserves lighting partners who dream boldly and execute meticulously; committed to turning visions into reality across the United Arab Emirates and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] border border-[#2a2d35]">
                <Image
                  src="/mahmoud-portrait.avif"
                  alt="Mahmoud Kaltout - Managing Director, Magic Design Light"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]"></div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35]"
            >
              <h2 className="text-[#d4af37] text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-white leading-relaxed">
                To be a trusted leader in lighting innovation, delivering exceptional designs, products, and services that enrich spaces, inspire experiences, and set new standards of excellence both locally and regionally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-8 border border-[#2a2d35]"
            >
              <h2 className="text-[#d4af37] text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white leading-relaxed">
                To illuminate spaces with creativity, innovation, and precision, utilizing quality modern products and reliable services that enhance our customers' experiences and way of life.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-white mb-6">Our Values</h2>
              <p className="text-[#a0a0a0] text-xl max-w-3xl mx-auto">
                The principles that guide every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#2a2d35] flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-[#d4af37]" size={32} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-3xl p-12 border border-[#2a2d35]"
          >
            <h2 className="text-white text-3xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your lighting vision to life? Our team is here to help you create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/#contact">
                Start a Project
              </Button>
              <Button variant="outline" href="/projects">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
