'use client';

import { Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Promise() {
  return (
    <section className="py-24 gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
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
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
        >
          <span className="text-sm font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Our Commitment
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-8"
        >
          Our Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
        >
          At Lahbura24, we deliver{' '}
          <span className="font-bold text-[#d4af37] relative inline-block group">
            <Zap className="w-5 h-5 inline-block mr-1" />
            clarity
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37] opacity-30"></span>
          </span>
          ,{' '}
          <span className="font-bold text-[#d4af37] relative inline-block group">
            <Zap className="w-5 h-5 inline-block mr-1" />
            capacity
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37] opacity-30"></span>
          </span>
          , and{' '}
          <span className="font-bold text-[#d4af37] relative inline-block group">
            <Shield className="w-5 h-5 inline-block mr-1" />
            confidence
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37] opacity-30"></span>
          </span>{' '}
          in every transaction.
        </motion.p>
      </div>
    </section>
  );
}
