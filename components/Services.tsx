'use client';

import { Droplet, Flame, Ship, Cpu, FileCheck, FileText, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Oil & Gas Trading',
    description: 'Crude oil, condensate, AGO, PMS, DPK, LPG, base oils.',
    icon: Droplet,
    tags: ['Trading', 'Commodities'],
    color: 'text-[#0d7377]',
    bgColor: 'bg-[#0d7377]/10',
  },
  {
    title: 'LPG Aggregation & Distribution',
    description: 'Supply to estates, industries, retailers, government, and distributors.',
    icon: Flame,
    tags: ['Distribution', 'Supply Chain'],
    color: 'text-[#d4af37]',
    bgColor: 'bg-[#d4af37]/10',
  },
  {
    title: 'Joint Venture Energy Operations',
    description: 'Vessel support (crew boats, SEVs, tugboats), marine logistics, floating storage coordination, STS & shore-to-ship support.',
    icon: Ship,
    tags: ['Marine', 'Logistics'],
    color: 'text-[#0d7377]',
    bgColor: 'bg-[#0d7377]/10',
  },
  {
    title: 'Energy Technology & Digital Systems',
    description: 'Mailing systems, paperless platforms, dashboards, e-government trackers, automation, data governance systems.',
    icon: Cpu,
    tags: ['Technology', 'Digital'],
    color: 'text-[#d4af37]',
    bgColor: 'bg-[#d4af37]/10',
  },
  {
    title: 'Advisory & Compliance',
    description: 'NUPRC permits, NNPC Trading onboarding, NCDMB documentation, contract structuring, submission packs.',
    icon: FileCheck,
    tags: ['Compliance', 'Advisory'],
    color: 'text-[#0d7377]',
    bgColor: 'bg-[#0d7377]/10',
  },
  {
    title: 'General Contracts & Procurement',
    description: 'Public and private sector projects, vendor management, procurement.',
    icon: FileText,
    tags: ['Procurement', 'Contracts'],
    color: 'text-[#0d7377]',
    bgColor: 'bg-[#0d7377]/10',
  },
  {
    title: 'Agro Exports',
    description: 'Agricultural export operations with compliance, logistics, and quality assurance.',
    icon: Wheat,
    tags: ['Exports', 'Agriculture'],
    color: 'text-[#d4af37]',
    bgColor: 'bg-[#d4af37]/10',
  },
];

export default function Services() {
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
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Comprehensive solutions across the energy value chain
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'text-[#0d7377]';
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-glass p-10 group relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${isPrimary ? 'from-[#0d7377]/10' : 'from-[#d4af37]/10'} to-transparent rounded-full blur-2xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${isPrimary ? 'from-[#0d7377]/5' : 'from-[#d4af37]/5'} to-transparent rounded-full blur-xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 ${isPrimary ? 'icon-gradient-primary' : 'icon-gradient-accent'} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-[#0a0a0a] mb-4 leading-tight group-hover:text-[#0d7377] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6b7280] leading-relaxed mb-6 text-base font-medium">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`badge-premium px-4 py-2 ${service.color} text-xs font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-40`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Decorative Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className={`h-0.5 bg-gradient-to-r ${isPrimary ? 'from-[#0d7377]' : 'from-[#d4af37]'} to-transparent rounded-full mt-6`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
