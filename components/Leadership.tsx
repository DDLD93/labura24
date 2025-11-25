'use client';

import Image from 'next/image';
import { Award, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            Leadership
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Driving excellence through strategic vision and execution
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="card-modern p-8 md:p-12 gradient-primary text-white relative overflow-hidden hover-lift"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/20">
                  <Image
                    src="/leadership-hauwa.jpg"
                    alt="Hauwa Allahbura - Managing Director"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-[#d4af37] flex items-center justify-center text-5xl font-serif font-bold text-white">
                            HA
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                  Hauwa Allahbura
                </h3>
                <p className="text-xl text-[#d4af37] mb-6 font-semibold flex items-center justify-center md:justify-start gap-2">
                  <Award className="w-5 h-5" />
                  Managing Director
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed opacity-95">
                    An energy entrepreneur and digital transformation strategist experienced in IT systems, structured oil & gas trading, and governance-based execution.
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-lg leading-relaxed opacity-95 italic flex items-start gap-2">
                      <Target className="w-5 h-5 mt-1 flex-shrink-0" />
                      &ldquo;Her leadership drives the company&apos;s commitment to efficiency, compliance, and long-term strategic value.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
