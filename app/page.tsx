'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Plane,
  Building2,
  TrendingUp,
  Lightbulb,
  Cpu,
} from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Empire Reports',
    description:
      'Real-time updates on building a multi-business empire from the ground up.',
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    description:
      'How I built a 9-agent AI system to scale my businesses and eliminate repetitive work.',
  },
  {
    icon: Zap,
    title: 'Origin Story',
    description:
      'The corporate layoff that started it all. Why I decided to build instead of break.',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship',
    description:
      'Strategy, mindset, and the unconventional paths to sustainable business growth.',
  },
  {
    icon: Building2,
    title: 'Container House Build',
    description:
      'Building a $40k off-grid container home in Arizona with sweat equity and systems.',
  },
  {
    icon: Plane,
    title: 'Drones & Off-Grid',
    description:
      'Exploring drone technology, solar power, and life beyond the grid.',
  },
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2622]/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.1),transparent)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f5f0e8] mb-6 leading-tight">
              Building an Empire
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <p className="text-xl sm:text-2xl text-[#d4a853] mb-8 font-light">
              One guy. Laid off. Building from scratch with AI, drones, and his own two
              hands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors text-lg"
            >
              Watch on YouTube
            </a>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-[#d4a853] text-[#d4a853] font-bold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors text-lg"
            >
              Learn the Story
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#d4a853]"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-8 text-center">
            The Story
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-[#a89a8a] mb-6 leading-relaxed">
            After being laid off from the corporate world, I had a choice: break or build.
            I chose to build. This channel documents the real, unfiltered journey of creating
            a multi-business empire from zero, using artificial intelligence, modern tools,
            and old-fashioned hard work.
          </p>

          <p className="text-lg text-[#a89a8a] mb-6 leading-relaxed">
            You'll see everything: the wins, the failures, the systems that work, and the
            ones that don't. From automating business operations with AI agents to building
            a container house off-grid in Arizona to scaling drone operations — this is what
            the future of entrepreneurship looks like.
          </p>

          <p className="text-lg text-[#a89a8a] leading-relaxed">
            Welcome to The Exiled Entrepreneur. Let's build something worth building.
          </p>
        </motion.div>
      </section>

      {/* Content Pillars Section */}
      <section className="py-20 px-4 bg-[#2a2622]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4 text-center">
              What You'll Learn
            </h2>
            <p className="text-center text-[#a89a8a] mb-16 text-lg">
              Covering the six pillars of building an empire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="bg-[#0a0a0f] border border-[#d4a853]/20 rounded-lg p-8 hover:border-[#d4a853]/50 transition-colors"
                >
                  <div className="text-[#d4a853] mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f0e8] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#a89a8a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest YouTube Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4 text-center">
            Latest from YouTube
          </h2>
          <p className="text-center text-[#a89a8a] mb-12 text-lg">
            Subscribe to never miss an episode
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="bg-[#2a2622] rounded-lg p-8 mb-8"
        >
          <div className="aspect-video bg-[#0a0a0f] rounded-lg flex items-center justify-center border border-[#d4a853]/30">
            <p className="text-[#a89a8a] text-center">
              YouTube video embed placeholder
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-center"
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors"
          >
            Visit YouTube Channel
          </a>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-[#2a2622]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4 text-center">
              Join the Community
            </h2>
            <p className="text-center text-[#a89a8a] mb-12 text-lg">
              Get weekly insights and updates delivered to your inbox
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <NewsletterSignup />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-[#d4a853]/20 to-[#2a2622]/50 border border-[#d4a853]/30 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4">
            Ready to Build?
          </h2>
          <p className="text-[#a89a8a] text-lg mb-8 max-w-2xl mx-auto">
            Discover the strategies, tools, and mindset that turned a corporate layoff
            into an empire-building opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors"
            >
              Subscribe on YouTube
            </a>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-[#d4a853] text-[#d4a853] font-bold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
