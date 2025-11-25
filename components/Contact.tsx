'use client';

import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-modern p-8 hover-lift"
          >
            <h3 className="text-2xl font-serif font-semibold text-[#0a0a0a] mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#0d7377] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a] mb-1">Head Office</p>
                  <p className="text-[#6b7280]">
                    Abuja, Federal Capital Territory
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#0d7377] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a] mb-2">Email</p>
                  <a
                    href="mailto:info@lahbura24.com"
                    className="block text-[#0d7377] hover:text-[#0a5d61] transition-colors mb-1"
                  >
                    info@lahbura24.com
                  </a>
                  <a
                    href="mailto:hauwa@lahbura24.com"
                    className="block text-[#0d7377] hover:text-[#0a5d61] transition-colors"
                  >
                    hauwa@lahbura24.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#0d7377] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a] mb-1">Phone</p>
                  <a
                    href="tel:+2348032346067"
                    className="text-[#0d7377] hover:text-[#0a5d61] transition-colors"
                  >
                    +234 803 234 6067
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-modern p-8 hover-lift"
          >
            <h3 className="text-2xl font-serif font-semibold text-[#0a0a0a] mb-8 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#0d7377]" />
              Working Hours
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex items-center justify-between p-5 bg-[#f5f5f5] rounded-xl group hover:bg-[#0d7377] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="font-semibold text-[#0a0a0a] group-hover:text-white">Monday - Friday</span>
                <span className="text-[#6b7280] group-hover:text-white/90 font-medium">9AM - 5PM</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex items-center justify-between p-5 bg-[#f5f5f5] rounded-xl group hover:bg-[#0d7377] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="font-semibold text-[#0a0a0a] group-hover:text-white">Saturday</span>
                <span className="text-[#6b7280] group-hover:text-white/90 font-medium">By Appointment Only</span>
              </motion.div>
              <div className="flex items-center justify-between p-5 bg-[#f5f5f5] rounded-xl">
                <span className="font-semibold text-[#0a0a0a]">Sunday</span>
                <span className="text-[#6b7280] font-medium">Closed</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#e5e5e5]">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@lahbura24.com"
                className="btn-primary w-full text-center inline-block"
              >
                Send us a Message
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
