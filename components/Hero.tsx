'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="container max-w-7xl mx-auto px-8 lg:px-10 py-20 lg:py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
      >
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          AI-Powered
        </span>
        <br />
        <span className="text-gradient">Healthcare Transformation</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Revolutionizing clinical practice through cutting-edge artificial intelligence. 
        Enhancing diagnostics, telemedicine, and emergency response globally.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
      >
        <a
          href="#services"
          className="bg-gradient-primary px-10 py-4 rounded-full text-white font-semibold text-base lg:text-lg hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,150,255,0.4)] transition-all duration-300 inline-block w-full sm:w-auto text-center"
        >
          Explore Solutions
        </a>
        <a
          href="#contact"
          className="glass glass-hover px-10 py-4 rounded-full text-white font-semibold text-base lg:text-lg transition-all duration-300 inline-block w-full sm:w-auto text-center"
        >
          Partner With Us
        </a>
      </motion.div>
    </section>
  );
}

