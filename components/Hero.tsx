'use client';

import Image from 'next/image';
import { ArrowRight, TrendingUp, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-24"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient-dark"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#0d7377]/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 glass-panel-dark rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#0d7377] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Energy. Technology. Trade. Transformation.</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Lahbura24
              <span className="block text-[#0d7377] mt-2">Limited</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Driving Nigeria&apos;s energy value chain through structured trading, marine capacity, digital innovation, and compliant operations.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0d7377] text-white rounded-lg font-semibold hover:bg-[#0a5d61] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#0d7377]" />
                  <div className="text-3xl font-bold text-white">8+</div>
                </div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#d4af37]" />
                  <div className="text-3xl font-bold text-white">100+</div>
                </div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#0d7377]" />
                  <div className="text-3xl font-bold text-white">24/7</div>
                </div>
                <div className="text-sm text-white/60">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-[#0d7377]/30 to-[#d4af37]/20 rounded-3xl blur-2xl"
              ></motion.div>
              <div className="relative glass-panel-dark rounded-3xl p-8 overflow-hidden">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* Professional Hero Image - Replace with your company/business image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/hero-business.png"
                      alt="Lahbura24 - Energy, Technology, Trade, Transformation"
                      fill
                      className="object-cover rounded-2xl opacity-90"
                      priority
                      onError={(e) => {
                        // Fallback to logo if hero image not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  {/* Fallback Logo Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <Image
                      src="/logo.jpg"
                      alt="Lahbura24 Logo"
                      width={200}
                      height={200}
                      className="rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm p-4"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4af37] rounded-full blur-2xl z-0"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0d7377] rounded-full blur-2xl z-0"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
