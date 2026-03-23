'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, TrendingUp, Mail, Zap, Youtube, Twitter, Instagram, MessageCircle } from 'lucide-react';

export default function MediaKitClient() {
  const contentPillars = [
    { title: 'Business & Entrepreneurship', icon: '💼' },
    { title: 'AI & Automation', icon: '🤖' },
    { title: 'Off-Grid Living', icon: '🌿' },
    { title: 'Technology & Drones', icon: '🚁' },
    { title: 'Container Homes & Building', icon: '🏗️' },
    { title: 'Journey Documentation', icon: '📹' },
  ];

  const sponsorshipTiers = [
    {
      title: 'Brand Integration',
      description: 'Product placement and mentions in video episodes',
      icon: '✨',
    },
    {
      title: 'Sponsored Episode',
      description: 'Full episode partnership with branded content',
      icon: '🎬',
    },
    {
      title: 'Newsletter Sponsor',
      description: 'Featured in weekly email to the community',
      icon: '📧',
    },
  ];

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
    <div className="bg-brand-dark min-h-screen">
      <article className="max-w-6xl mx-auto px-4 py-20 pt-32">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-4">
            Media Kit
          </h1>
          <div className="h-1 w-24 bg-brand-gold mb-6" />
          <p className="text-xl text-brand-muted max-w-2xl">
            Everything you need to know about partnering with The Exiled Entrepreneur. Let`s build something together.
          </p>
        </motion.div>

        {/* Section 1: Channel Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">Channel Overview</h2>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: 'Subscribers', value: 'Launching 2026', icon: Users },
              { label: 'Monthly Views', value: '—', icon: TrendingUp },
              { label: 'Email List', value: '500+ builders', icon: Mail },
              { label: 'Social Reach', value: 'Growing', icon: Zap },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-brand-card border border-brand-border rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-brand-muted text-sm font-semibold mb-2">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-brand-cream">
                        {stat.value}
                      </p>
                    </div>
                    <IconComponent className="text-brand-gold" size={28} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-brand-muted leading-relaxed"
          >
            The Exiled Entrepreneur documents the journey of building a 7-business empire from a corporate layoff. We explore entrepreneurship, AI automation, off-grid living, and technology through authentic, in-depth storytelling. Our audience consists of builders, makers, and entrepreneurs who value transparency, innovation, and real-world results.
          </motion.p>
        </motion.section>

        {/* Section 2: Audience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">Our Audience</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-brand-card border border-brand-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">
                Target Demographics
              </h3>
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>25-45 years old, primarily male (75%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Tech-forward entrepreneurs and founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Off-grid living and sustainability enthusiasts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>AI and automation professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Business strategists and remote workers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-brand-card border border-brand-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-brand-cream mb-4">
                Key Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Entrepreneurship & Business Building',
                  'AI & Technology Innovation',
                  'Off-Grid Living',
                  'Business Strategy & Growth',
                  'Drone Technology & Innovation',
                  'Autonomous Systems',
                  'Real Estate & Building',
                  'Content Creation & Documentation',
                ].map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full" />
                    <span className="text-brand-muted">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 3: Content Pillars */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">Content Pillars</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contentPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-brand-card border border-brand-border rounded-lg p-6 hover:border-brand-gold transition-colors"
              >
                <div className="text-4xl mb-3">{pillar.icon}</div>
                <h3 className="text-lg font-semibold text-brand-cream">
                  {pillar.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 4: Sponsorship Opportunities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">
            Sponsorship Opportunities
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {sponsorshipTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-brand-card border border-brand-border rounded-lg p-8 hover:border-brand-gold transition-colors flex flex-col"
              >
                <div className="text-5xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold text-brand-cream mb-3">
                  {tier.title}
                </h3>
                <p className="text-brand-muted mb-6 flex-grow">
                  {tier.description}
                </p>
                <p className="text-sm font-semibold text-brand-gold">
                  Inquire for Rates
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 5: Work With Me CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-brand-card to-brand-card border border-brand-border rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-cream mb-4">
              Ready to Reach Builders, Makers, and Entrepreneurs?
            </h2>
            <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
              Let`s explore how your brand can be part of this growth story. Whether it`s a product integration, sponsored content, or a full partnership — we`ve got options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:business@theexiledentrepreneur.com"
                className="px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
              >
                Get in Touch
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 bg-brand-card border border-brand-gold text-brand-gold font-bold rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Social Channels */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">Connect</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'YouTube', icon: Youtube, href: '#' },
              { label: 'Twitter/X', icon: Twitter, href: '#' },
              { label: 'Instagram', icon: Instagram, href: '#' },
              { label: 'Discord', icon: MessageCircle, href: '#' },
            ].map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-card border border-brand-border rounded-lg p-6 hover:border-brand-gold transition-colors flex flex-col items-center justify-center gap-3"
                >
                  <IconComponent className="text-brand-gold" size={32} />
                  <span className="text-brand-cream font-semibold">{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.section>
      </article>
    </div>
  );
}
