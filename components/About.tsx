'use client';

import { Building2, Fuel, FileText, Cpu, CheckCircle2, Eye, Zap, Target, Shield, Ship, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const strengths = [
    { text: 'Strong compliance foundation', icon: Shield },
    { text: 'NITDA-registered technology partner', icon: Cpu },
    { text: 'Understanding of NNPC processes', icon: Fuel },
    { text: 'Digital innovation capabilities', icon: Zap },
    { text: 'General contract execution capacity', icon: FileText },
    { text: 'Agro export capability', icon: Target },
    { text: 'Marine & logistics JV capacity', icon: Ship },
    { text: 'Proven track record', icon: Award },
  ];

  const registrations = [
    { label: 'RC Number', value: '1759438', icon: Building2 },
    { label: 'NNPC Retail Vendor', value: '11002512', icon: Fuel },
    { label: 'NUPRC Number', value: 'NUPRC/OGISP/25/4116203/R450911', icon: FileText },
    { label: 'NITDA', value: 'Registered Technology Partner', icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            About Us
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Building compliant, transparent, and high-capacity operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-1 h-8 bg-[#0d7377] rounded-full"></div>
                <h3 className="text-3xl font-serif font-semibold text-[#0a0a0a]">
                  Who We Are
                </h3>
              </div>
              <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
                Lahbura24 Limited is a Nigerian energy, technology, and contract services company delivering structured trading, digital systems, marine support, general contracting, and agro-export operations.
              </p>
              <p className="text-lg text-[#6b7280] leading-relaxed">
                We operate at the intersection of energy, technology, logistics, and trade—building compliant, transparent, and high-capacity operations.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="card-gradient p-10 relative overflow-hidden"
            >
              {/* Gradient Background Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0d7377]/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-2xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 icon-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-[#0d7377] to-[#0a5d61] rounded-full"></div>
                      <h3 className="text-3xl font-serif font-bold text-[#0a0a0a]">
                        Vision
                      </h3>
                    </div>
                    <p className="text-lg text-[#6b7280] leading-relaxed font-medium">
                      To become one of Africa&apos;s most trusted energy trading and technology companies—known for integrity, capacity, and consistent results.
                    </p>
                  </div>
                </div>
                
                {/* Decorative Line */}
                <div className="h-1 w-24 bg-gradient-to-r from-[#0d7377] via-[#0a5d61] to-transparent rounded-full mt-6"></div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="card-gradient p-10 relative overflow-hidden"
            >
              {/* Gradient Background Overlay */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl -ml-32 -mt-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#0d7377]/5 to-transparent rounded-full blur-2xl -mr-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 icon-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-full"></div>
                      <h3 className="text-3xl font-serif font-bold text-[#0a0a0a]">
                        Mission
                      </h3>
                    </div>
                    <p className="text-lg text-[#6b7280] leading-relaxed font-medium">
                      To deliver reliable energy trading services, digital infrastructure, and strategic value.
                    </p>
                  </div>
                </div>
                
                {/* Decorative Line */}
                <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] via-[#b8941f] to-transparent rounded-full mt-6"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-semibold text-[#0a0a0a] mb-8 text-center">
            Our Strengths
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="card-modern p-6 group hover-lift"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0d7377]/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-[#0d7377] transition-colors">
                      <Icon className="w-5 h-5 text-[#0d7377] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[#0a0a0a] font-medium">{strength.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-serif font-semibold text-[#0a0a0a] mb-8 text-center">
            Registrations & Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {registrations.map((reg, index) => {
              const Icon = reg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="card-modern p-6 border-l-4 border-[#d4af37] group hover:border-[#0d7377] transition-colors hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d7377]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#d4af37] group-hover:text-[#0d7377] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0d7377] mb-1">{reg.label}</p>
                      <p className="text-[#6b7280] text-sm">{reg.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
