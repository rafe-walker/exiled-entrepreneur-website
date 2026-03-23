'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to add backdrop blur and border on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-border'
          : 'bg-brand-dark/40 backdrop-blur-sm border-b border-brand-border/50'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section with Flame Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              {/* Flame Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-brand-gold group-hover:text-brand-gold-light transition-colors"
              >
                <Flame size={28} className="stroke-2" />
              </motion.div>

              {/* Brand Text */}
              <div className="flex flex-col gap-0">
                <span className="hidden sm:inline text-sm font-bold text-brand-cream tracking-wider">
                  THE EXILED
                </span>
                <span className="hidden sm:inline text-sm font-bold text-brand-gold tracking-wider">
                  ENTREPRENEUR
                </span>
                <span className="sm:hidden text-base font-bold text-brand-gold tracking-wide">
                  TEE
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { href: '/about', label: 'About' },
              { href: '/episodes', label: 'Episodes' },
              { href: '/resources', label: 'Resources' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-brand-muted hover:text-brand-gold transition-colors duration-200 font-medium text-sm tracking-wide relative group"
                >
                  {link.label}
                  {/* Underline animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"
                    layoutId={`underline-${link.href}`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Subscribe Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 168, 83, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-brand-gold text-brand-dark font-semibold rounded-lg transition-all duration-200 text-sm tracking-wide hover:bg-brand-gold-light shadow-lg"
            >
              Subscribe
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-brand-card rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              key={isOpen ? 'close' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X size={24} className="text-brand-gold" strokeWidth={2.5} />
              ) : (
                <Menu size={24} className="text-brand-gold" strokeWidth={2.5} />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu with Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden border-t border-brand-border/50 bg-brand-dark/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-6 px-4 space-y-4">
                {/* Mobile Navigation Links */}
                {[
                  { href: '/about', label: 'About' },
                  { href: '/episodes', label: 'Episodes' },
                  { href: '/resources', label: 'Resources' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-brand-muted hover:text-brand-gold hover:bg-brand-card rounded-lg transition-colors duration-200 font-medium text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Subscribe Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.24 }}
                  className="pt-4 border-t border-brand-border/50"
                >
                  <motion.a
                    href="#"
                    onClick={handleLinkClick}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-4 py-3 bg-brand-gold text-brand-dark font-semibold rounded-lg transition-all duration-200 text-center text-sm tracking-wide hover:bg-brand-gold-light shadow-md"
                  >
                    Subscribe
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
