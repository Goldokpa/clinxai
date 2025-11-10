'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 glass-hover transition-all duration-300"
    >
      {/* Top border gradient on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: '🧬',
      title: 'AI-Powered Diagnostics',
      description: 'Leveraging cutting-edge artificial intelligence to enhance accuracy in disease detection and medical imaging, improving clinical decision-making for healthcare providers.',
    },
    {
      icon: '💻',
      title: 'Telemedicine Solutions',
      description: 'Providing seamless virtual healthcare consultations, enabling patients to connect with doctors remotely for efficient and timely medical attention.',
    },
    {
      icon: '🚑',
      title: 'Emergency Response System',
      description: 'Real-time AI-based triage system optimizing emergency medical response, ensuring critical cases receive immediate attention.',
    },
    {
      icon: '👥',
      title: 'Healthcare Workforce Recruitment',
      description: 'Connecting healthcare institutions with AI-proficient professionals while offering specialized AI training programs for medical personnel.',
    },
    {
      icon: '⚙️',
      title: 'AI Integration & Consultancy',
      description: 'Expert guidance for healthcare organizations navigating AI implementation and digital transformation strategies.',
    },
    {
      icon: '📋',
      title: 'Policy Advocacy & Education',
      description: 'Engaging with policymakers and stakeholders to drive ethical AI adoption, regulatory compliance, and industry education.',
    },
  ];

  return (
    <section id="services" className="container max-w-7xl mx-auto px-8 lg:px-10 py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
          Comprehensive AI Healthcare Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Integrated services designed to transform healthcare delivery and outcomes
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

