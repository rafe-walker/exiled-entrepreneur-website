'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

export default function Hero() {
  const handleScrollToEmail = () => {
    const emailSection = document.getElementById('email-capture');
    emailSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEpisodeClick = () => {
    // Placeholder for episode playback logic
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark pt-20 md:pt-0">
      {/* Video Placeholder with Dark Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Simulated video background with cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark to-brand-dark" />

        {/* Dark gradient overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/40 to-brand-dark" />

        {/* Radial gradient for subtle light center effect */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-card/30 via-transparent to-brand-dark opacity-40" />
      </div>

      {/* Vignette and Film Grain Effects */}
      <div className="absolute inset-0 vignette film-grain pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        {/* Badge Pill Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-gold/70 bg-transparent hover:border-brand-gold-light transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-brand-gold uppercase">
              Building an Empire in Real Time
            </span>
          </div>
        </motion.div>

        {/* Main Headline with Text Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gradient">
            One Guy. <br className="hidden sm:block" />
            Laid Off. <br className="hidden sm:block" />
            Building an Empire.
          </h1>
        </motion.div>

        {/* Subtitle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream leading-relaxed font-light">
            From corporate layoff to 7 businesses, a 9-agent AI system, and a container house in the Arizona desert.
            <span className="block mt-2 text-brand-gold">Every win and failure — documented.</span>
          </p>
        </motion.div>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16"
        >
          {/* Primary CTA - Subscribe on YouTube */}
          <motion.a
            href="https://www.youtube.com/@theexiledentrepreneur"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 168, 83, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 sm:px-10 py-4 rounded-lg font-bold text-base sm:text-lg tracking-wide inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </motion.a>

          {/* Secondary CTA - Email Capture */}
          <motion.button
            onClick={handleScrollToEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 sm:px-10 py-4 rounded-lg font-bold text-base sm:text-lg tracking-wide inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Get the Free Empire Blueprint
          </motion.button>
        </motion.div>

        {/* Animated Chevron Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs sm:text-sm text-brand-muted uppercase tracking-widest font-semibold">
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </div>

      {/* Latest Episode Floating Card - Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(212, 168, 83, 0.2)' }}
        onClick={handleEpisodeClick}
        className="hidden lg:block absolute bottom-24 right-8 xl:right-16 z-20 cursor-pointer group"
      >
        <div className="relative bg-brand-card border border-brand-border rounded-lg overflow-hidden w-56 shadow-lg hover:border-brand-gold/50 transition-colors duration-300">
          {/* Placeholder Video Thumbnail */}
          <div className="relative h-32 sm:h-36 bg-gradient-to-br from-brand-border to-brand-dark overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/10 animate-pulse" />

            {/* Play Button Overlay */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-brand-dark fill-brand-dark" />
              </div>
            </motion.div>

            {/* Film grain on thumbnail */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
              <div className="w-full h-full bg-repeat" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,.15), rgba(0,0,0,.15) 1px, transparent 1px, transparent 2px)'
              }} />
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-brand-cream mb-1 group-hover:text-brand-gold-light transition-colors duration-200">
              Episode Zero
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted group-hover:text-brand-gold transition-colors duration-200 font-medium">
              Coming Soon
            </p>
          </div>

          {/* Decorative border accent on hover */}
          <motion.div
            className="absolute top-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Stats Bar - Pinned to Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-brand-dark/80 backdrop-blur-md border-t border-brand-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {/* Stat Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-gold mb-1 sm:mb-2">
                7
              </div>
              <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                Businesses
              </div>
            </motion.div>

            {/* Stat Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-gold mb-1 sm:mb-2">
                9
              </div>
              <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                AI Agents
              </div>
            </motion.div>

            {/* Stat Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-gold mb-1 sm:mb-2">
                1
              </div>
              <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                Container House
              </div>
            </motion.div>

            {/* Stat Item 4 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-gold mb-1 sm:mb-2">
                0
              </div>
              <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">
                Regrets
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
