'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      title: 'Our Vision',
      content: 'To be the global leader in AI-driven healthcare innovation, ensuring equitable access to cutting-edge medical solutions and transforming patient care worldwide.',
    },
    {
      title: 'Our Mission',
      content: 'To empower healthcare providers, organizations, and policymakers with AI-powered solutions that enhance diagnostics, optimize telemedicine, improve emergency response, and revolutionize workforce recruitment for a smarter and more inclusive healthcare ecosystem.',
    },
  ];

  return (
    <section id="about" className="bg-white/[0.02] py-20 lg:py-28">
      <div ref={ref} className="container max-w-7xl mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              className="glass rounded-3xl p-10 lg:p-12"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-5">
                {card.title}
              </h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

