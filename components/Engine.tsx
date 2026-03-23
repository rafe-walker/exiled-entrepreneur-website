'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Bot,
  Search,
  Send,
  Megaphone,
  TrendingUp,
  Wrench,
  Archive,
  Shield,
  Sparkles,
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
}

const agents: Agent[] = [
  {
    id: 'director',
    name: 'DIRECTOR',
    icon: <Bot size={28} />,
  },
  {
    id: 'scout',
    name: 'SCOUT',
    icon: <Search size={28} />,
  },
  {
    id: 'courier',
    name: 'COURIER',
    icon: <Send size={28} />,
  },
  {
    id: 'herald',
    name: 'HERALD',
    icon: <Megaphone size={28} />,
  },
  {
    id: 'analyst',
    name: 'ANALYST',
    icon: <TrendingUp size={28} />,
  },
  {
    id: 'valet',
    name: 'VALET',
    icon: <Wrench size={28} />,
  },
  {
    id: 'archivist',
    name: 'ARCHIVIST',
    icon: <Archive size={28} />,
  },
  {
    id: 'sentinel',
    name: 'SENTINEL',
    icon: <Shield size={28} />,
  },
  {
    id: 'oracle',
    name: 'ORACLE',
    icon: <Sparkles size={28} />,
  },
];

const stats = [
  {
    label: '24/7 Operation',
    value: 'Always working',
  },
  {
    label: '3-5 Videos/Week',
    value: 'Content pipeline',
  },
  {
    label: '$248/mo Total Cost',
    value: 'Lean & efficient',
  },
];

export default function Engine() {
  return (
    <section className="py-20 px-4 bg-brand-dark relative overflow-hidden desert-texture">
      {/* Desert texture background */}
      <div className="absolute inset-0 desert-texture pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-center mb-12"
        >
          <div className="accent-line" />
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream mb-6">
            The System Behind the Empire
          </h2>
        </motion.div>

        {/* Hook text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg text-brand-muted max-w-3xl mx-auto mb-16"
        >
          9 AI agents running 24/7 so one person can build everything. Every
          script, video, and message — human-approved.
        </motion.p>

        {/* 3x3 Agent Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.06,
                ease: 'easeOut',
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group card-dark relative overflow-hidden cursor-default"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/10 group-hover:via-brand-gold/5 group-hover:to-brand-gold/0 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                {/* Icon container with glow */}
                <div className="relative mb-4 group/icon">
                  <div className="absolute inset-0 bg-brand-gold/0 group-hover/icon:bg-brand-gold/20 rounded-lg blur-xl transition-all duration-300" />
                  <div className="relative w-14 h-14 rounded-lg bg-brand-gold/10 border border-brand-gold/30 group-hover:border-brand-gold/60 flex items-center justify-center transition-all duration-300">
                    <div className="text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                      {agent.icon}
                    </div>
                  </div>
                </div>

                {/* Agent name */}
                <h3 className="font-bold text-brand-cream text-sm tracking-wider group-hover:text-brand-gold transition-colors duration-300">
                  {agent.name}
                </h3>

                {/* Subtle accent line appears on hover */}
                <div className="w-6 h-0.5 bg-brand-gold/0 group-hover:bg-brand-gold/60 mt-3 transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
              }}
              className="text-center p-6 bg-brand-card/50 rounded-lg border border-brand-border/50 hover:border-brand-gold/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-2">
                {stat.label}
              </div>
              <p className="text-brand-muted text-sm">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/about#open-claw"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-all duration-300 hover:gap-3 group"
          >
            <span>Explore the System</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="group-hover:text-brand-dark"
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Decorative element - subtle accent dots */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-gold/3 rounded-full blur-3xl pointer-events-none hidden lg:block" />
      </div>
    </section>
  );
}
