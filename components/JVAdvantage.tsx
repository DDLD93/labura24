'use client';

import Image from 'next/image';
import { CheckCircle2, Ship, Anchor, MapPin, Shield, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  { text: 'Escort vessels', icon: Ship },
  { text: 'Jetty and terminal access', icon: Anchor },
  { text: 'Offshore coordination', icon: MapPin },
  { text: 'Compliance assurance', icon: Shield },
  { text: 'Faster NNPC operational processes', icon: Zap },
  { text: 'Enhanced product movement credibility', icon: TrendingUp },
];

export default function JVAdvantage() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="jv-advantage" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            Joint Venture Advantage
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            Lahbura24 partners with experienced operators to strengthen marine logistics and operational depth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-1 h-10 bg-[#0d7377] rounded-full"></div>
                <h3 className="text-3xl font-serif font-semibold text-[#0a0a0a]">
                  Why Our Joint Ventures Matter
                </h3>
              </div>
              <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
                Our strategic partnerships enable us to deliver comprehensive solutions that combine our expertise in energy trading and technology with proven operational capabilities in marine logistics.
              </p>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="card-modern p-8 border-l-4 border-[#d4af37] bg-gradient-to-br from-white to-[#fafafa] hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <p className="text-[#0a0a0a] font-semibold text-lg leading-relaxed">
                    Together, we create value through integrated operations, enhanced compliance, and accelerated processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Professional Marine/Logistics Image */}
            <div className="relative h-64 mb-8 rounded-2xl overflow-hidden card-modern hover-lift">
              <Image
                src="/jv-marine.png"
                alt="Marine logistics and vessel operations"
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide image on error, will show capabilities list below
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg">Marine Operations Excellence</h4>
              </div>
            </div>
            
            <h3 className="text-3xl font-serif font-semibold text-[#0a0a0a] mb-8">
              Capabilities
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="card-modern p-6 group hover-lift"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 relative">
                        <div className="w-10 h-10 bg-[#0d7377] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {index < capabilities.length - 1 && (
                          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#e5e5e5]"></div>
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-[#0a0a0a] font-medium text-lg">{capability.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
