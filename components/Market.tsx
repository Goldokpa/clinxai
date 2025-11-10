'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Market() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projections = [
    {
      year: 'Year 1',
      revenue: '$2M Revenue',
      target: '50+ AI Deployments',
    },
    {
      year: 'Year 3',
      revenue: '$25M Revenue',
      target: 'Multi-Country Expansion',
    },
    {
      year: 'Year 5',
      revenue: '$1B Revenue',
      target: 'Global Scale',
    },
  ];

  return (
    <section id="market" className="container max-w-7xl mx-auto px-8 lg:px-10 py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
          Market Opportunity
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Positioned at the forefront of healthcare&apos;s digital transformation
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] p-12 lg:p-16 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.1), rgba(147, 51, 234, 0.1))',
        }}
      >
        <div className="absolute inset-0 glass"></div>
        
        <div className="relative z-10">
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            The global AI in healthcare market is experiencing unprecedented growth, with LMICs 
            presenting a <span className="text-primary font-bold">$50 billion+</span> opportunity 
            for digital healthcare solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {projections.map((projection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              >
                <h4 className="text-4xl lg:text-5xl font-extrabold text-primary mb-3">
                  {projection.year}
                </h4>
                <p className="text-gray-300 text-base leading-relaxed">
                  {projection.revenue}
                  <br />
                  {projection.target}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

