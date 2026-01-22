'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] rounded-full"></span>
    </motion.a>
  );
}
