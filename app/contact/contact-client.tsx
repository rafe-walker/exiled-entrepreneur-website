'use client';

import { motion } from 'framer-motion';
import { Mail, Briefcase, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactClient() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Replace with a real Formspree form ID before launch.
    // Sign up at https://formspree.io, create a form, and replace the endpoint below.
    // e.g. https://formspree.io/f/xabc1234
    setStatus('error');
    setMessage(
      'The contact form is coming soon. For now, please email contact@theexiledentrepreneur.com directly.'
    );
  };

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
      {/* Header */}
      <section className="py-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-brand-gold mb-6" />
          <p className="text-xl text-brand-muted max-w-2xl">
            Whether it`s a business inquiry, sponsorship opportunity, or just a question — I`d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-6"
          >
            {/* General Inquiries */}
            <motion.div
              variants={itemVariants}
              className="bg-brand-card border border-brand-border rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-cream mb-2">
                    General Inquiries
                  </h3>
                  <a
                    href="mailto:contact@theexiledentrepreneur.com"
                    className="text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm break-all"
                  >
                    contact@theexiledentrepreneur.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business & Sponsorship */}
            <motion.div
              variants={itemVariants}
              className="bg-brand-card border border-brand-border rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-cream mb-2">
                    Business & Sponsorship
                  </h3>
                  <a
                    href="mailto:business@theexiledentrepreneur.com"
                    className="text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm break-all"
                  >
                    business@theexiledentrepreneur.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="bg-brand-card border border-brand-border rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-cream mb-2">
                    Response Time
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Typically 24-48 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-brand-card border border-brand-border rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Users size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-brand-cream mb-3">
                    Follow the Journey
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm"
                    >
                      YouTube
                    </a>
                    <a
                      href="#"
                      className="block text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm"
                    >
                      Twitter/X
                    </a>
                    <a
                      href="#"
                      className="block text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="block text-brand-gold hover:text-brand-gold-light transition-colors font-semibold text-sm"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-brand-card border border-brand-border rounded-lg p-8"
          >
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-brand-cream mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-brand-cream mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Inquiry Type */}
            <div className="mb-6">
              <label
                htmlFor="inquiryType"
                className="block text-sm font-semibold text-brand-cream mb-2"
              >
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-cream focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="">Select an inquiry type</option>
                <option value="general">General</option>
                <option value="business">Business/Sponsorship</option>
                <option value="press">Press/Media</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-brand-cream mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold transition-colors resize-none"
                placeholder="Tell me what`s on your mind..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Message */}
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center text-sm font-semibold ${
                  status === 'success'
                    ? 'text-green-400'
                    : status === 'error'
                      ? 'text-red-400'
                      : ''
                }`}
              >
                {message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
