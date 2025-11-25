'use client';

import { Droplet, Ship, Cpu, FileCheck, FileText, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';

const quickBlocks = [
  {
    title: 'Oil & Gas Trading',
    icon: Droplet,
    gradient: 'from-[#0d7377] to-[#0a5d61]',
    size: 'normal',
  },
  {
    title: 'Energy Logistics & JVs',
    icon: Ship,
    gradient: 'from-[#0d7377] to-[#0a5d61]',
    size: 'normal',
  },
  {
    title: 'Digital Energy Solutions',
    icon: Cpu,
    gradient: 'from-[#d4af37] to-[#b8941f]',
    size: 'large',
  },
  {
    title: 'Advisory & Compliance',
    icon: FileCheck,
    gradient: 'from-[#0d7377] to-[#0a5d61]',
    size: 'normal',
  },
  {
    title: 'General Contracts',
    icon: FileText,
    gradient: 'from-[#0d7377] to-[#0a5d61]',
    size: 'normal',
  },
  {
    title: 'Agro Exports',
    icon: Wheat,
    gradient: 'from-[#d4af37] to-[#b8941f]',
    size: 'normal',
  },
];

export default function QuickBlocks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            What We Do
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Comprehensive energy solutions across the value chain
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
        >
          {quickBlocks.map((block, index) => {
            const Icon = block.icon;
            const isLarge = block.size === 'large';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${block.gradient} p-8 text-white hover-lift ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className={`font-semibold ${isLarge ? 'text-2xl' : 'text-xl'} mb-2`}>
                    {block.title}
                  </h3>
                  {isLarge && (
                    <p className="text-white/80 mt-4 text-lg leading-relaxed">
                      Cutting-edge digital platforms and automation solutions for the energy sector.
                    </p>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
