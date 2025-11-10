'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

function StatCard({ value, label, index }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      className="glass rounded-3xl p-10 text-center hover:-translate-y-2 glass-hover transition-all duration-300"
    >
      <h3 className="text-5xl lg:text-6xl font-extrabold text-gradient mb-3">
        {value}
      </h3>
      <p className="text-gray-400 text-base lg:text-lg">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: '$188B', label: 'Global AI Healthcare Market by 2030' },
    { value: '37%', label: 'Annual Growth Rate (CAGR)' },
    { value: '$432B', label: 'Telemedicine Market by 2032' },
  ];

  return (
    <section className="container max-w-7xl mx-auto px-8 lg:px-10 py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

