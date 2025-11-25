'use client';

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'JV Advantage', href: '#jv-advantage' },
    { name: 'Technology', href: '#services' },
    { name: 'Contracts & Exports', href: '#services' },
    { name: 'Compliance', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Lahbura24 Limited</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Energy. Technology. Trade. Transformation.
            </p>
            <p className="text-white/60 text-sm">
              Driving Nigeria&apos;s energy value chain through structured trading, marine capacity, digital innovation, and compliant operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white/70 hover:text-[#d4af37] transition-colors text-sm py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@lahbura24.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#d4af37] transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                info@lahbura24.com
              </a>
              <a
                href="tel:+2348032346067"
                className="flex items-center gap-2 text-white/70 hover:text-[#d4af37] transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +234 803 234 6067
              </a>
              <p className="flex items-center gap-2 text-white/60 text-sm mt-4">
                <MapPin className="w-4 h-4" />
                Abuja, Federal Capital Territory
              </p>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Lahbura24 Limited. All Rights Reserved.
            </p>
            <p className="text-white/80 font-serif text-sm">
              Energy. Technology. Trade. Transformation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0d7377] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0a5d61] transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
