'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Brain } from 'lucide-react';

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

const storyBeats = [
  {
    icon: Briefcase,
    title: 'The Layoff',
    description:
      'After 10 years at Amazon, the safety net disappeared overnight.',
  },
  {
    icon: Rocket,
    title: 'The Pivot',
    description:
      'Instead of job hunting, he started building. Not one business — seven.',
  },
  {
    icon: Brain,
    title: 'The System',
    description:
      'A 9-agent AI system called Open Claw IA runs the empire 24/7.',
  },
];

export default function StoryCapture() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'empire-blueprint',
        }),
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message:
            'Check your email for the Empire Blueprint — no spam, just pure value.',
        });
        setEmail('');
        setTimeout(() => {
          setFormState({ status: 'idle', message: '' });
        }, 5000);
      } else {
        setFormState({
          status: 'error',
          message: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message:
          'Failed to subscribe. Check your connection and try again.',
      });
    }
  };

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Desert texture background */}
      <div className="absolute inset-0 desert-texture pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-center mb-4"
        >
          <div className="accent-line" />
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream mb-6">
            The Story So Far
          </h2>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-gold to-brand-gold/30 hidden md:block -translate-x-1/2" />

          {/* Story Beats */}
          <div className="space-y-8 md:space-y-12">
            {storyBeats.map((beat, index) => {
              const Icon = beat.icon;
              return (
                <motion.div
                  key={beat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Connector dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:flex z-10">
                    <div className="w-4 h-4 bg-brand-gold rounded-full border-4 border-brand-dark shadow-lg shadow-brand-gold/50" />
                  </div>

                  {/* Card content */}
                  <div
                    className={`card-dark hover:shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 w-full ${
                      index % 2 === 0 ? 'md:pr-12 md:w-[45%]' : 'md:pl-12 md:w-[45%]'
                    }`}
                  >
                    <div className="flex gap-4 items-start">
                      {/* Icon container */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                          <Icon className="text-brand-gold" size={24} />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-brand-cream mb-2">
                          {beat.title}
                        </h3>
                        <p className="text-brand-muted leading-relaxed">
                          {beat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-lg text-brand-muted leading-relaxed italic">
            This channel documents every step. No filter. Just the raw truth of
            building something from nothing.
          </p>
        </motion.div>

        {/* Email Capture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          id="email-capture"
          className="bg-brand-card border border-brand-border rounded-xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-cream mb-3">
              Get the Empire Blueprint
            </h3>
            <p className="text-brand-muted text-lg">
              The exact AI prompts, business frameworks, and off-grid gear list
              I use — free.
            </p>
          </div>

          {/* Email form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4 mb-6">
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={formState.status === 'submitting'}
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={formState.status === 'submitting'}
              className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState.status === 'submitting' ? (
                <>
                  <span>Sending...</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full"
                  />
                </>
              ) : (
                'Send It'
              )}
            </button>
          </form>

          {/* Status messages */}
          {formState.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-center text-sm p-3 rounded-lg mb-4 ${
                formState.status === 'success'
                  ? 'bg-brand-green/10 text-brand-green border border-brand-green/30'
                  : 'bg-brand-amber/10 text-brand-amber border border-brand-amber/30'
              }`}
            >
              {formState.message}
            </motion.div>
          )}

          {/* Trust line */}
          <p className="text-center text-xs text-brand-dim">
            Join 500+ builders. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
