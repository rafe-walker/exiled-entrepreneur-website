'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Bot, Youtube, Radio } from 'lucide-react';

const ProgressTracker: React.FC = () => {
  const statusCards = [
    {
      id: 1,
      title: 'Container House',
      icon: Home,
      phase: 'Phase: Foundation',
      progress: 30,
      hasImage: true,
      description: 'Building from the ground up',
    },
    {
      id: 2,
      title: 'AI Agents',
      icon: Bot,
      status: '9/9 Active',
      cost: '$248/mo',
      statusType: 'green' as const,
      pulsing: true,
    },
    {
      id: 3,
      title: 'Channel',
      icon: Youtube,
      episodes: '0',
      status: 'Launching Soon',
      statusType: 'gold' as const,
      pulsing: false,
    },
    {
      id: 4,
      title: 'Latest Dispatch',
      icon: Radio,
      label: 'Coming Soon',
      timestamp: 'March 2026',
      statusType: 'gold' as const,
      pulsing: false,
    },
  ];

  return (
    <section className="w-full py-16 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream mb-3">
            Empire in Motion
          </h2>
          <p className="text-brand-muted text-lg">
            Watch the systems come alive in real-time.
          </p>
        </motion.div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statusCards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="card-dark border border-brand-border/40 hover:border-brand-gold/40 rounded-xl p-6 transition-colors duration-300"
              >
                {/* Card Header with Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="bg-gradient-to-br from-brand-gold/20 to-brand-amber/10 rounded-lg p-3">
                    <IconComponent className="w-6 h-6 text-brand-gold" />
                  </div>
                  {card.statusType && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`w-3 h-3 rounded-full ${
                        card.statusType === 'green'
                          ? 'bg-brand-green'
                          : 'bg-brand-gold'
                      } ${card.pulsing ? 'pulseGold' : ''}`}
                      style={
                        card.pulsing
                          ? {
                              animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                            }
                          : undefined
                      }
                    />
                  )}
                </motion.div>

                {/* Card Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-brand-cream font-bold text-lg mb-4"
                >
                  {card.title}
                </motion.h3>

                {/* Card-specific Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                  className="space-y-4"
                >
                  {/* Container House - Progress Bar */}
                  {card.id === 1 && (
                    <>
                      <p className="text-brand-gold-light text-sm font-semibold">
                        {card.phase}
                      </p>
                      <div className="w-full bg-brand-card/50 rounded-full h-2 overflow-hidden border border-brand-border/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${card.progress}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-brand-gold to-brand-amber"
                        />
                      </div>
                      <p className="text-brand-muted text-xs">
                        {card.progress}% Complete
                      </p>

                      {/* Placeholder Image Area */}
                      <div className="mt-4 aspect-square rounded-lg bg-gradient-to-br from-brand-gold/10 to-brand-amber/5 border border-brand-border/20 flex items-center justify-center">
                        <p className="text-brand-muted text-xs text-center px-2">
                          Project Photo
                        </p>
                      </div>
                    </>
                  )}

                  {/* AI Agents - Status */}
                  {card.id === 2 && (
                    <>
                      <div className="space-y-2">
                        <p className="text-brand-cream text-sm font-semibold">
                          {card.status}
                        </p>
                        <p className="text-brand-muted text-sm">
                          Running costs: <span className="text-brand-gold">{card.cost}</span>
                        </p>
                      </div>
                      <div className="bg-brand-card/40 rounded-lg p-3 border border-brand-border/20">
                        <p className="text-brand-muted text-xs">
                          All systems operational
                        </p>
                      </div>
                    </>
                  )}

                  {/* Channel - Episodes */}
                  {card.id === 3 && (
                    <>
                      <div className="space-y-2">
                        <p className="text-brand-cream text-sm font-semibold">
                          Episodes: <span className="text-brand-gold">{card.episodes}</span>
                        </p>
                        <p className="text-brand-gold-light text-sm font-semibold">
                          {card.status}
                        </p>
                      </div>
                      <div className="bg-brand-card/40 rounded-lg p-3 border border-brand-border/20">
                        <p className="text-brand-muted text-xs">
                          First episode coming soon
                        </p>
                      </div>
                    </>
                  )}

                  {/* Latest Dispatch */}
                  {card.id === 4 && (
                    <>
                      <p className="text-brand-gold-light text-sm font-semibold">
                        {card.label}
                      </p>
                      <div className="bg-brand-card/40 rounded-lg p-3 border border-brand-border/20">
                        <p className="text-brand-muted text-xs">
                          {card.timestamp}
                        </p>
                      </div>
                      <p className="text-brand-muted text-xs">
                        New updates and insights arriving soon
                      </p>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/dashboard"
            className="inline-block px-8 py-3 rounded-lg bg-brand-gold/10 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/20 hover:border-brand-gold/60 font-semibold transition-all duration-300"
          >
            View Full Dashboard →
          </a>
        </motion.div>
      </div>

      {/* CSS for Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .pulseGold {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ProgressTracker;
