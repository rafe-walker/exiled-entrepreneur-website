'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

type TabType = 'start' | 'latest';

const VideoHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('start');

  const startHereVideos = [
    {
      id: 1,
      title: 'Episode Zero: The Full Story',
      duration: '45:00',
      isComing: true,
      image: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=800&h=450&fit=crop',
    },
    {
      id: 2,
      title: 'How I Built a 9-Agent AI System',
      duration: '28:00',
      isComing: false,
      image: 'https://images.unsplash.com/photo-1677442d019cecf8978c01be9e5b57e8?w=800&h=450&fit=crop',
    },
    {
      id: 3,
      title: 'The Container House: Day 1',
      duration: '32:00',
      isComing: false,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=450&fit=crop',
    },
  ];

  const latestVideos = [
    {
      id: 4,
      title: 'Coming Soon — Episode Zero',
      date: 'March 2026',
      duration: '45:00',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=400&h=225&fit=crop',
    },
    {
      id: 5,
      title: 'Coming Soon — AI Deep Dive',
      date: 'April 2026',
      duration: '28:00',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8978c01be9e5b57e8?w=400&h=225&fit=crop',
    },
    {
      id: 6,
      title: 'Coming Soon — Container Day 1',
      date: 'April 2026',
      duration: '32:00',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=225&fit=crop',
    },
  ];

  return (
    <section className="w-full py-16 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream mb-3">
            Video Hub
          </h2>
          <p className="text-brand-muted text-lg">
            Follow the empire build. Episode by episode.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 mb-10 border-b border-brand-border pb-4"
        >
          <button
            onClick={() => setActiveTab('start')}
            className={`px-6 py-3 font-semibold text-lg transition-all duration-300 relative ${
              activeTab === 'start'
                ? 'tab-active text-brand-gold'
                : 'tab-inactive text-brand-muted hover:text-brand-gold-light'
            }`}
          >
            Start Here
            {activeTab === 'start' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold"
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`px-6 py-3 font-semibold text-lg transition-all duration-300 relative ${
              activeTab === 'latest'
                ? 'tab-active text-brand-gold'
                : 'tab-inactive text-brand-muted hover:text-brand-gold-light'
            }`}
          >
            Latest Dispatches
            {activeTab === 'latest' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold"
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              />
            )}
          </button>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'start' && (
            <motion.div
              key="start-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {startHereVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-card border border-brand-border/30 hover:border-brand-gold/50 transition-colors duration-300 mb-4">
                    {/* Gradient Overlay Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/40 to-brand-dark/80" />

                    {/* Placeholder Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-violet/10" />

                    {/* Coming Soon Badge */}
                    {video.isComing && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="absolute top-4 right-4 bg-brand-amber px-3 py-1 rounded-full"
                      >
                        <span className="text-brand-dark text-sm font-bold">
                          Coming Soon
                        </span>
                      </motion.div>
                    )}

                    {/* Play Button Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 group-hover:bg-brand-dark/60 transition-colors duration-300"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.2 }}
                        className="bg-brand-gold rounded-full p-4 shadow-lg"
                      >
                        <Play className="w-8 h-8 text-brand-dark fill-brand-dark" />
                      </motion.div>
                    </motion.div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-brand-dark/90 px-2 py-1 rounded text-brand-gold text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  >
                    <h3 className="text-brand-cream font-bold text-lg leading-snug hover:text-brand-gold-light transition-colors duration-300">
                      {video.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'latest' && (
            <motion.div
              key="latest-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {latestVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-card border border-brand-border/30 hover:border-brand-gold/50 transition-colors duration-300 mb-3">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/40 to-brand-dark/80" />

                      {/* Placeholder Thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-violet/10" />

                      {/* Play Button */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 group-hover:bg-brand-dark/60 transition-colors duration-300"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.2 }}
                          className="bg-brand-gold rounded-full p-3 shadow-lg"
                        >
                          <Play className="w-6 h-6 text-brand-dark fill-brand-dark" />
                        </motion.div>
                      </motion.div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 bg-brand-dark/90 px-2 py-1 rounded text-brand-gold text-xs font-semibold">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                    >
                      <h3 className="text-brand-cream font-bold text-sm leading-snug hover:text-brand-gold-light transition-colors duration-300 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-brand-muted text-xs">
                        {video.date}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/episodes"
                  className="inline-block text-brand-gold hover:text-brand-gold-light font-semibold transition-colors duration-300 flex items-center gap-2"
                >
                  View All Episodes →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoHub;
