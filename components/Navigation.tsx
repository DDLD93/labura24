'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'JV Advantage', href: '#jv-advantage' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-panel rounded-2xl shadow-xl py-2'
          : 'bg-transparent py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Lahbura24 Logo"
                width={44}
                height={44}
                className="rounded-full transition-transform duration-300 group-hover:scale-110 ring-2 ring-white/20"
              />
            </div>
            <span className="text-xl font-serif font-bold text-[#6b7280] hover:text-[#0d7377] transition-colors duration-200 tracking-tight">
              Lahbura24
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-[#6b7280] hover:text-[#0d7377] transition-colors duration-200 relative group"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0d7377] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-2.5 bg-[#0d7377] text-white text-sm font-semibold rounded-lg hover:bg-[#0a5d61] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:ring-offset-2"
              aria-label="Contact us"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1a1a1a] hover:bg-[#0d7377]/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 glass-panel rounded-xl mt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 text-[#6b7280] hover:text-[#0d7377] hover:bg-[#0d7377]/10 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:ring-inset"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="block w-full text-left px-4 py-3 bg-[#0d7377] text-white rounded-lg font-semibold mt-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d7377]"
                  aria-label="Contact us"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
