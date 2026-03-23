'use client';

import { motion } from 'framer-motion';
import { Users, Eye, Mail } from 'lucide-react';

export default function ProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-brand-card border-b border-brand-border/50 overflow-hidden"
    >
      {/* Warm gradient background with gold tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-brand-card/90 to-brand-card" />

      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent opacity-40" />

      {/* Decorative accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left: "Join the Exiles" Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0 text-center sm:text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold text-brand-cream tracking-wide flex items-center justify-center sm:justify-start gap-2">
              <span className="relative">
                Join the Exiles
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-brand-gold"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </h3>
          </motion.div>

          {/* Right: Stats/Counters Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-6 sm:gap-8 md:gap-12 flex-wrap sm:flex-nowrap w-full sm:w-auto">
            {/* Counter 1: YouTube Subscribers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 bg-brand-dark/50 rounded-lg group-hover:bg-brand-dark transition-colors duration-300 border border-brand-border/30 group-hover:border-brand-gold/50">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                  YouTube
                </div>
                <div className="text-sm sm:text-base font-bold text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                  Coming Soon
                </div>
              </div>
            </motion.div>

            {/* Divider - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-brand-border/50 to-transparent"
            />

            {/* Counter 2: Total Views */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 bg-brand-dark/50 rounded-lg group-hover:bg-brand-dark transition-colors duration-300 border border-brand-border/30 group-hover:border-brand-gold/50">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                  Total Views
                </div>
                <div className="text-sm sm:text-base font-bold text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                  —
                </div>
              </div>
            </motion.div>

            {/* Divider - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-brand-border/50 to-transparent"
            />

            {/* Counter 3: Email List */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 bg-brand-dark/50 rounded-lg group-hover:bg-brand-dark transition-colors duration-300 border border-brand-border/30 group-hover:border-brand-gold/50">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                  Email List
                </div>
                <div className="text-sm sm:text-base font-bold text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                  500+ builders
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-60" />

      {/* Responsive adjustments for mobile stacking */}
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding: 1rem 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
}
