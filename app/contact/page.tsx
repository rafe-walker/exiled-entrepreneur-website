'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thanks for your message! I'll get back to you soon.");
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#a89a8a] max-w-2xl">
            Have a question, collaboration idea, or just want to say hello? Reach out and let's
            connect.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-[#f5f0e8] mb-8">Contact Info</h2>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4a853]/20 rounded-lg flex items-center justify-center text-[#d4a853] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f5f0e8] mb-1">
                    Email
                  </h3>
                  <p className="text-[#a89a8a] mb-2">For general inquiries:</p>
                  <a
                    href="mailto:contact@theexiledentrepreneur.com"
                    className="text-[#d4a853] hover:text-[#e5c472] transition-colors font-semibold"
                  >
                    contact@theexiledentrepreneur.com
                  </a>
                  <p className="text-[#a89a8a] mt-3 mb-2">For business opportunities:</p>
                  <a
                    href="mailto:business@theexiledentrepreneur.com"
                    className="text-[#d4a853] hover:text-[#e5c472] transition-colors font-semibold"
                  >
                    business@theexiledentrepreneur.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4a853]/20 rounded-lg flex items-center justify-center text-[#d4a853] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f5f0e8] mb-1">
                    Location
                  </h3>
                  <p className="text-[#a89a8a]">Arizona, USA</p>
                  <p className="text-[#a89a8a] text-sm mt-2">
                    (Working remotely and building off-grid)
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4a853]/20 rounded-lg flex items-center justify-center text-[#d4a853] flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f5f0e8] mb-1">
                    Response Time
                  </h3>
                  <p className="text-[#a89a8a]">Usually 24-48 hours</p>
                  <p className="text-[#a89a8a] text-sm mt-2">
                    (Running operations with AI, but still human-powered)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-[#2a2622]/40 border border-[#d4a853]/20 rounded-lg p-8"
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-[#f5f0e8] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#d4a853]/30 rounded-lg text-[#f5f0e8] placeholder-[#a89a8a] focus:outline-none focus:border-[#d4a853] transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-[#f5f0e8] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#d4a853]/30 rounded-lg text-[#f5f0e8] placeholder-[#a89a8a] focus:outline-none focus:border-[#d4a853] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-[#f5f0e8] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#d4a853]/30 rounded-lg text-[#f5f0e8] placeholder-[#a89a8a] focus:outline-none focus:border-[#d4a853] transition-colors"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#f5f0e8] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#d4a853]/30 rounded-lg text-[#f5f0e8] placeholder-[#a89a8a] focus:outline-none focus:border-[#d4a853] transition-colors resize-none"
                placeholder="Tell me what's on your mind..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Message */}
            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  status === 'success'
                    ? 'text-green-400'
                    : status === 'error'
                      ? 'text-red-400'
                      : ''
                }`}
              >
                {message}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 px-4 bg-[#2a2622]/30 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
              Also on Social Media
            </h2>
            <p className="text-[#a89a8a] mb-8 max-w-2xl mx-auto">
              Follow the journey across all platforms. Daily updates, behind-the-scenes content,
              and real-time empire building.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4a853]/20 border border-[#d4a853]/50 text-[#d4a853] font-semibold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4a853]/20 border border-[#d4a853]/50 text-[#d4a853] font-semibold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors"
              >
                Twitter/X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4a853]/20 border border-[#d4a853]/50 text-[#d4a853] font-semibold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
