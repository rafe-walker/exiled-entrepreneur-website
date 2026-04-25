'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Youtube,
  Twitter,
  Instagram,
  MessageCircle,
  ExternalLink,
  Flame,
} from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center pb-12 border-b border-brand-border"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-brand-gold"
            >
              <Flame size={32} />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-black text-brand-gold tracking-tight">
              THE EXILED ENTREPRENEUR
            </h3>
          </div>
          <p className="text-brand-muted text-base md:text-lg font-medium">
            Veteran-built. AI-powered. Documented in real time.
          </p>
        </motion.div>

        {/* Divider: Gold Gradient Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-12 origin-left"
        />

        {/* Three-Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12"
        >
          {/* Column 1: Navigate */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-brand-cream mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold" />
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About', href: '/about' },
                { label: 'Episodes', href: '/episodes' },
                { label: 'Resources', href: '/resources' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Projects */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-brand-cream mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold" />
              Projects
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Stronghold Precision Aerials', href: '#', external: true },
                { label: 'Cochise Land Management', href: '#', external: true },
                { label: 'Flycensed', href: '#', external: true },
                { label: 'Open Claw IA', href: '#', external: true },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-brand-muted hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-brand-cream mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold" />
              Connect
            </h4>
            <div className="space-y-4">
              {/* Email Links */}
              <div className="space-y-2">
                <a
                  href="mailto:contact@theexiledentrepreneur.com"
                  className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors duration-300 text-sm group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  contact@theexiledentrepreneur.com
                </a>
                <a
                  href="mailto:business@theexiledentrepreneur.com"
                  className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors duration-300 text-sm group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  business@theexiledentrepreneur.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 pt-2">
                {[
                  { icon: Youtube, href: 'https://www.youtube.com/@theexiledentrepreneur', label: 'YouTube', size: 20 },
                  { icon: Twitter, href: 'https://twitter.com/theexiledent', label: 'Twitter', size: 20 },
                  { icon: Instagram, href: 'https://www.instagram.com/theexiledentrepreneur', label: 'Instagram', size: 20 },
                  { icon: MessageCircle, href: '#', label: 'Discord — coming soon', size: 20 },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand-muted hover:text-brand-gold transition-colors duration-300 p-2 rounded-full hover:bg-brand-card"
                    >
                      <Icon size={social.size} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Merch Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 text-brand-dim text-sm font-medium tracking-wide"
        >
          Merch — Coming 2026
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mb-8 origin-left"
        />

        {/* Bottom Bar: Copyright & Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-brand-muted"
        >
          <p>&copy; 2026 Stormhaven Enterprises LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-brand-gold transition-colors duration-300"
            >
              Privacy
            </Link>
            <span className="text-brand-border">|</span>
            <Link
              href="/terms"
              className="hover:text-brand-gold transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
