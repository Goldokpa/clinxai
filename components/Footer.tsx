'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'AI Diagnostics', href: '#services' },
        { label: 'Telemedicine', href: '#services' },
        { label: 'Emergency Response', href: '#services' },
        { label: 'Recruitment', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Market', href: '#market' },
        { label: 'Partnership', href: 'https://docs.google.com/forms/d/e/1FAIpQLSe4ZCR3rn0BFEwjP3ZAfD7NQd4j38JggHfjDjFWRPOP22xwhA/viewform' },
        { label: 'Careers', href: 'https://linkedin.com/company/clinixai-enterprise' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Email Us', href: 'mailto:Clinixailtd@gmail.com' },
        { label: '+234 816 267 3771', href: 'tel:+2348162673771' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/clinixai-enterprise' },
      ],
    },
  ];

  return (
    <footer id="contact" className="border-t border-white/10 py-16 lg:py-20">
      <div ref={ref} className="container max-w-7xl mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">CLINIX AI</h3>
            <p className="text-gray-400 leading-relaxed">
              Pioneering AI-driven healthcare innovation for a smarter, more inclusive global healthcare ecosystem.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: 'easeOut' }}
            >
              <h4 className="text-base font-semibold mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>&copy; 2025 ClinixAI Enterprise. All rights reserved. Transforming healthcare through AI innovation.</p>
        </motion.div>
      </div>
    </footer>
  );
}

