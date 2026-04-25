'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Play } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  pillar: 'Empire Reports' | 'AI Automation' | 'Origin Story' | 'Strategy' | 'Container House' | 'Drones & Off-Grid';
  badge: 'STUDIO' | 'FIELD';
  duration: string;
  status: string;
}

const EPISODES: Episode[] = [
  {
    id: 1,
    title: 'Episode Zero: The Full Story',
    pillar: 'Origin Story',
    badge: 'STUDIO',
    duration: '45:00',
    status: 'Coming Soon',
  },
  {
    id: 2,
    title: 'How I Built a 9-Agent AI System',
    pillar: 'AI Automation',
    badge: 'STUDIO',
    duration: '28:00',
    status: 'Coming Soon',
  },
  {
    id: 3,
    title: 'Container House Day 1: Raw Land',
    pillar: 'Container House',
    badge: 'FIELD',
    duration: '32:00',
    status: 'Coming Soon',
  },
  {
    id: 4,
    title: 'Empire Report: Month 1',
    pillar: 'Empire Reports',
    badge: 'STUDIO',
    duration: '15:00',
    status: 'Coming Soon',
  },
  {
    id: 5,
    title: 'Drone Survey: The Property',
    pillar: 'Drones & Off-Grid',
    badge: 'FIELD',
    duration: '12:00',
    status: 'Coming Soon',
  },
  {
    id: 6,
    title: 'Business Strategy: The Ecosystem',
    pillar: 'Strategy',
    badge: 'STUDIO',
    duration: '22:00',
    status: 'Coming Soon',
  },
  {
    id: 7,
    title: 'Open Claw IA: Agent Walkthrough',
    pillar: 'AI Automation',
    badge: 'STUDIO',
    duration: '35:00',
    status: 'Coming Soon',
  },
  {
    id: 8,
    title: 'Foundation Pour Day',
    pillar: 'Container House',
    badge: 'FIELD',
    duration: '25:00',
    status: 'Coming Soon',
  },
  {
    id: 9,
    title: 'Empire Report: Month 2',
    pillar: 'Empire Reports',
    badge: 'STUDIO',
    duration: '18:00',
    status: 'Coming Soon',
  },
];

const PILLARS = [
  'All',
  'Empire Reports',
  'AI Automation',
  'Origin Story',
  'Strategy',
  'Container House',
  'Drones & Off-Grid',
];

const pillarColors: Record<string, { bg: string; text: string }> = {
  'Empire Reports': { bg: 'bg-brand-amber/20', text: 'text-brand-amber' },
  'AI Automation': { bg: 'bg-brand-violet/20', text: 'text-brand-violet' },
  'Origin Story': { bg: 'bg-brand-gold/20', text: 'text-brand-gold' },
  'Strategy': { bg: 'bg-brand-green/20', text: 'text-brand-green' },
  'Container House': { bg: 'bg-brand-gold-light/20', text: 'text-brand-gold-light' },
  'Drones & Off-Grid': { bg: 'bg-brand-muted/20', text: 'text-brand-muted' },
};

const badgeColors: Record<string, string> = {
  STUDIO: 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30',
  FIELD: 'bg-brand-green/15 text-brand-green border border-brand-green/30',
};

export default function EpisodesClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEpisodes = useMemo(() => {
    return EPISODES.filter((episode) => {
      const matchesFilter = activeFilter === 'All' || episode.pillar === activeFilter;
      const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-4">Episodes</h1>
          <div className="accent-line" />
          <p className="text-xl text-brand-gold font-light max-w-2xl mx-auto">
            Every build. Every breakthrough. Every setback. Watch the empire take shape.
          </p>
        </motion.div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-brand-muted" size={20} />
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-brand-card border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {PILLARS.map((pillar, index) => (
            <motion.button
              key={pillar}
              onClick={() => setActiveFilter(pillar)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeFilter === pillar
                  ? 'bg-brand-gold text-brand-dark'
                  : 'bg-brand-card border border-brand-border text-brand-cream hover:border-brand-gold/50'
              }`}
            >
              {pillar}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Episodes Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        {filteredEpisodes.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="card-dark group hover:border-brand-gold/50 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative mb-4 h-40 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/10" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-brand-gold/20 p-4 rounded-full group-hover:bg-brand-gold/30 transition-all">
                      <Play size={28} className="text-brand-gold fill-brand-gold" />
                    </div>
                  </motion.div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeColors[episode.badge]}`}>
                      {episode.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${pillarColors[episode.pillar].bg} ${pillarColors[episode.pillar].text}`}>
                      {episode.pillar}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-3 bg-brand-dark/80 px-2 py-1 rounded text-xs font-semibold text-brand-gold">
                    {episode.duration}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-cream mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors">
                  {episode.title}
                </h3>

                {/* Status Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                  <span className="text-sm font-semibold text-brand-muted">{episode.status}</span>
                  <div className="w-2 h-2 rounded-full bg-brand-gold/50 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-brand-cream mb-2">No episodes found</h3>
            <p className="text-brand-muted max-w-md">
              Try adjusting your search or filter. New episodes are coming soon.
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 border border-brand-border rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-4">New Episodes Coming Soon</h2>
          <p className="text-brand-muted mb-6 max-w-2xl mx-auto">
            Subscribe to the YouTube channel to get notified when new episodes drop. We`re building in real-time and documenting every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@theexiledentrepreneur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              Subscribe on YouTube
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-brand-gold text-brand-gold font-bold rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors"
            >
              Get Updates
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
