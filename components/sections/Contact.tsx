'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Contact() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.addressTitle'),
      content: t('contact.address'),
    },
    {
      icon: Phone,
      title: t('contact.phoneTitle'),
      content: t('contact.phone'),
    },
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      content: t('contact.email'),
    },
    {
      icon: Clock,
      title: t('contact.hoursTitle'),
      content: t('contact.hours'),
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-[#0a0a0a] via-[#000000] to-[#000000] relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37] rounded-full filter blur-[150px]"
        ></motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%]"
        >
          <Sparkles className="w-12 h-12 text-[#d4af37]" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-[10%]"
        >
          <Sparkles className="w-16 h-16 text-[#d4af37]" />
        </motion.div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              {t('contact.badge')}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white mb-6 uppercase leading-tight text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {t('contact.title')}
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#e8c968] to-[#d4af37] bg-clip-text text-transparent">
              {t('contact.titleHighlight')}
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#c0c0c0] text-xl mb-8 leading-relaxed"
          >
            {t('contact.description')}
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-[#a0a0a0]">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              <span className="text-sm">{t('contact.trustIndicator1')}</span>
            </div>
            <div className="flex items-center gap-2 text-[#a0a0a0]">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              <span className="text-sm">{t('contact.trustIndicator2')}</span>
            </div>
            <div className="flex items-center gap-2 text-[#a0a0a0]">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              <span className="text-sm">{t('contact.trustIndicator3')}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                {t('contact.getInSectionTitle')}
              </h3>
              <p className="text-[#a0a0a0]">
                {t('contact.getInSectionDescription')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-2xl p-6 border border-[#2a2d35] hover:border-[#d4af37] transition-all duration-300"
                >
                  {/* Gradient overlay - gold theme */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full filter blur-[80px] opacity-15"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#d4af37] group-hover:to-[#e8c968] transition-all duration-300">
                      <info.icon className="text-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300" size={24} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed whitespace-pre-line group-hover:text-[#c0c0c0] transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="outline" href="https://wa.me/" className="flex-1">
                <MessageCircle size={18} />
                <span>{t('contact.whatsappButton')}</span>
              </Button>
              <Button variant="outline" href="tel:+971XXXXXXXX" className="flex-1">
                <Phone className="w-5 h-5 mr-2" />
                <span>{t('contact.callButton')}</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-3xl p-8 md:p-10 border border-[#2a2d35] relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full filter blur-[150px] opacity-10"></div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase block mb-4">
                    {t('contact.formSubtitle')}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    {t('contact.formTitle')}
                  </h3>
                </motion.div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                        {t('contact.nameLabel')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-6 py-4 bg-[#000000] border-2 rounded-xl text-white placeholder-[#6b7280] focus:outline-none transition-all duration-300 ${
                          focusedField === 'name' ? 'border-[#d4af37] shadow-lg shadow-[#d4af37]/20' : 'border-[#2a2d35]'
                        }`}
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                        {t('contact.phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-6 py-4 bg-[#000000] border-2 rounded-xl text-white placeholder-[#6b7280] focus:outline-none transition-all duration-300 ${
                          focusedField === 'phone' ? 'border-[#d4af37] shadow-lg shadow-[#d4af37]/20' : 'border-[#2a2d35]'
                        }`}
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                        {t('contact.emailLabel')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-6 py-4 bg-[#000000] border-2 rounded-xl text-white placeholder-[#6b7280] focus:outline-none transition-all duration-300 ${
                          focusedField === 'email' ? 'border-[#d4af37] shadow-lg shadow-[#d4af37]/20' : 'border-[#2a2d35]'
                        }`}
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                        {t('contact.messageTitle')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        required
                        className={`w-full px-6 py-4 bg-[#000000] border-2 rounded-xl text-white placeholder-[#6b7280] focus:outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' ? 'border-[#d4af37] shadow-lg shadow-[#d4af37]/20' : 'border-[#2a2d35]'
                        }`}
                        placeholder={t('contact.messagePlaceholder')}
                      ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#d4af37] to-[#e8c968] text-[#0a0a0a] px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Send size={20} />
                      <span>{t('contact.submitButton')}</span>
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-[#d4af37] flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-[#0a0a0a]" strokeWidth={3} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-8">{t('contact.successMessage')}</h3>
                    <p className="text-[#a0a0a0] text-lg">
                      {t('contact.successDescription')}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
