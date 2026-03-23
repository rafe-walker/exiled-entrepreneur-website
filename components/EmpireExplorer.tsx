'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Brain,
  Film,
  Target,
  Home,
  Plane,
  ArrowRight,
} from 'lucide-react';

const EmpireExplorer = () => {
  const [activeTab, setActiveTab] = useState('pillars');

  const contentPillars = [
    {
      title: 'Empire Reports',
      icon: BarChart3,
      mode: 'STUDIO',
      description: 'Weekly updates — revenue, milestones, pivots',
      playlist: '#',
    },
    {
      title: 'AI Automation',
      icon: Brain,
      mode: 'STUDIO',
      description: 'Open Claw IA — agents, pipelines, real costs',
      playlist: '#',
    },
    {
      title: 'Origin Story',
      icon: Film,
      mode: 'STUDIO',
      description: 'The layoff, the pivot, starting from zero',
      playlist: '#',
    },
    {
      title: 'Strategy',
      icon: Target,
      mode: 'STUDIO',
      description: 'Business lessons, frameworks, breakdowns',
      playlist: '#',
    },
    {
      title: 'Container House',
      icon: Home,
      mode: 'FIELD',
      description: 'Off-grid construction — every nail, every mistake',
      playlist: '#',
    },
    {
      title: 'Drones & Off-Grid',
      icon: Plane,
      mode: 'FIELD',
      description: 'Aerial footage, solar, water, land projects',
      playlist: '#',
    },
  ];

  const ecosystemNodes = [
    {
      name: 'Stronghold Precision Aerials',
      role: 'Drone services',
      url: 'https://strongholdprecisionaerials.com',
      position: 'top',
    },
    {
      name: 'Cochise Land Management',
      role: 'Rural land services',
      url: 'https://cochiselandmanagement.com',
      position: 'top-right',
    },
    {
      name: 'Flycensed',
      role: 'Drone exam prep app',
      url: 'https://flycensed.com',
      position: 'right',
    },
    {
      name: 'The Exiled Entrepreneur',
      role: 'YouTube/media',
      url: '#',
      position: 'bottom-right',
    },
    {
      name: 'Open Claw IA',
      role: '9-agent AI system',
      url: '#',
      position: 'bottom',
    },
    {
      name: 'Container House',
      role: 'Off-grid build project',
      url: '#',
      position: 'bottom-left',
    },
  ];

  const getNodePosition = (position: string) => {
    const positions: Record<string, string> = {
      top: 'top-0 left-1/2 -translate-x-1/2',
      'top-right': 'top-1/4 right-0 translate-x-12',
      right: 'top-1/2 right-0 -translate-y-1/2 translate-x-16',
      'bottom-right': 'bottom-1/4 right-0 translate-x-12',
      bottom: 'bottom-0 left-1/2 -translate-x-1/2',
      'bottom-left': 'bottom-1/4 left-0 -translate-x-12',
    };
    return positions[position] || '';
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-cream mb-4">
            The Empire
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Explore the interconnected businesses, content pillars, and ecosystem
            that fuel continuous growth and innovation.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-8 mb-12 border-b border-brand-border"
        >
          <button
            onClick={() => setActiveTab('pillars')}
            className={`pb-4 px-2 text-lg font-semibold transition-colors relative ${
              activeTab === 'pillars'
                ? 'text-brand-gold tab-active'
                : 'text-brand-muted tab-inactive hover:text-brand-cream'
            }`}
          >
            What You'll See
            {activeTab === 'pillars' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold"
                initial={false}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('ecosystem')}
            className={`pb-4 px-2 text-lg font-semibold transition-colors relative ${
              activeTab === 'ecosystem'
                ? 'text-brand-gold tab-active'
                : 'text-brand-muted tab-inactive hover:text-brand-cream'
            }`}
          >
            The Businesses
            {activeTab === 'ecosystem' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold"
                initial={false}
              />
            )}
          </button>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'pillars' && (
            <motion.div
              key="pillars"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Content Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contentPillars.map((pillar, index) => {
                  const IconComponent = pillar.icon;
                  const isModeStudio = pillar.mode === 'STUDIO';

                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.05 + index * 0.08,
                      }}
                      className="group relative"
                    >
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                      {/* Card */}
                      <div className="relative card-dark bg-brand-card border border-brand-border rounded-xl p-8 hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="inline-flex p-3 rounded-lg bg-brand-dark/50 border border-brand-border group-hover:border-brand-gold/30 transition-all duration-300">
                            <IconComponent
                              size={32}
                              className="text-brand-muted group-hover:text-brand-gold transition-colors duration-300"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-brand-cream mb-3">
                          {pillar.title}
                        </h3>

                        {/* Mode Badge */}
                        <div className="mb-4 inline-flex w-fit">
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              isModeStudio
                                ? 'bg-brand-violet text-brand-cream'
                                : 'bg-brand-green text-brand-dark font-bold'
                            }`}
                          >
                            {pillar.mode}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-brand-muted text-sm mb-6 flex-grow">
                          {pillar.description}
                        </p>

                        {/* Watch Playlist Link */}
                        <a
                          href={pillar.playlist}
                          className="inline-flex items-center gap-2 text-brand-gold-light hover:text-brand-gold transition-colors duration-300 font-semibold group/link"
                        >
                          Watch Playlist
                          <ArrowRight
                            size={16}
                            className="group-hover/link:translate-x-1 transition-transform duration-300"
                          />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'ecosystem' && (
            <motion.div
              key="ecosystem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Desktop Ecosystem View */}
              <div className="hidden lg:block relative w-full h-[600px] mb-12">
                {/* SVG Lines from Center */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Line to Top */}
                  <line
                    x1="500"
                    y1="300"
                    x2="500"
                    y2="50"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Line to Top Right */}
                  <line
                    x1="500"
                    y1="300"
                    x2="750"
                    y2="150"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Line to Right */}
                  <line
                    x1="500"
                    y1="300"
                    x2="850"
                    y2="300"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Line to Bottom Right */}
                  <line
                    x1="500"
                    y1="300"
                    x2="750"
                    y2="450"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Line to Bottom */}
                  <line
                    x1="500"
                    y1="300"
                    x2="500"
                    y2="550"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Line to Bottom Left */}
                  <line
                    x1="500"
                    y1="300"
                    x2="250"
                    y2="450"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#d4af37"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Hub - Stormhaven Enterprises */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="border-2 border-brand-gold bg-brand-dark p-8 rounded-xl w-64 text-center shadow-lg shadow-brand-gold/20">
                    <h3 className="text-2xl font-bold text-brand-gold mb-2">
                      Stormhaven Enterprises LLC
                    </h3>
                    <p className="text-brand-muted text-sm">
                      Central hub
                    </p>
                  </div>
                </motion.div>

                {/* Surrounding Nodes */}
                {ecosystemNodes.map((node, index) => (
                  <motion.div
                    key={node.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.08,
                    }}
                    className={`absolute ${getNodePosition(node.position)} z-10 w-56`}
                  >
                    <a
                      href={node.url}
                      target={node.url !== '#' ? '_blank' : '_self'}
                      rel={node.url !== '#' ? 'noopener noreferrer' : ''}
                      className="group cursor-pointer"
                    >
                      <div className="bg-brand-card border border-brand-border rounded-lg p-6 hover:border-brand-gold/50 hover:bg-brand-dark/50 transition-all duration-300 h-full">
                        <h4 className="text-brand-cream font-bold text-sm mb-2 group-hover:text-brand-gold transition-colors">
                          {node.name}
                        </h4>
                        <p className="text-brand-muted text-xs group-hover:text-brand-cream transition-colors">
                          {node.role}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Ecosystem View - Vertical Stack */}
              <div className="lg:hidden space-y-4 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="card-dark bg-brand-card border-2 border-brand-gold rounded-lg p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-brand-gold mb-1">
                    Stormhaven Enterprises LLC
                  </h3>
                  <p className="text-brand-muted text-sm">Central hub</p>
                </motion.div>

                {ecosystemNodes.map((node, index) => (
                  <motion.div
                    key={node.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.08,
                    }}
                  >
                    <a
                      href={node.url}
                      target={node.url !== '#' ? '_blank' : '_self'}
                      rel={node.url !== '#' ? 'noopener noreferrer' : ''}
                      className="block"
                    >
                      <div className="card-dark bg-brand-card border border-brand-border rounded-lg p-5 hover:border-brand-gold/50 transition-all duration-300 group">
                        <h4 className="text-brand-cream font-bold text-sm mb-1 group-hover:text-brand-gold transition-colors">
                          {node.name}
                        </h4>
                        <p className="text-brand-muted text-xs group-hover:text-brand-cream transition-colors">
                          {node.role}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Ecosystem Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12 p-8 bg-brand-dark border border-brand-border/50 rounded-lg"
              >
                <p className="text-brand-cream text-lg font-semibold">
                  Every business feeds the others. That's not diversification —{' '}
                  <span className="text-brand-gold">that's an ecosystem.</span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EmpireExplorer;
