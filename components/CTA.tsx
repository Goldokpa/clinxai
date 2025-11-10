'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="waitlist" className="container max-w-7xl mx-auto px-8 lg:px-10 py-20 lg:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] px-12 py-16 lg:px-16 lg:py-20 text-center bg-gradient-primary"
      >
        {/* Animated background pulse */}
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-radial from-white/10 to-transparent animate-pulse-custom"></div>
        
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5"
          >
            Join the AI Healthcare Revolution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto"
          >
            Be part of transforming global healthcare. Sign up for early access to our AI Emergency Triage Tool.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZ2IHVP18hFDmw_Pg5cbR9esUA6AEfCS4RJTKjeO6c8nfxZQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
          >
            Join Waitlist
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

