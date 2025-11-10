'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#market', label: 'Market' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="relative z-50">
      <div className="container max-w-7xl mx-auto px-8 lg:px-10 py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gradient"
          >
            CLINIX AI
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-10 list-none"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#waitlist"
            className="hidden md:inline-block bg-gradient-primary px-8 py-3 rounded-full text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,150,255,0.3)] transition-all duration-300"
          >
            Join Waitlist
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 glass rounded-2xl p-6"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-base font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#waitlist"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-primary px-6 py-3 rounded-full text-white font-semibold text-center"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

