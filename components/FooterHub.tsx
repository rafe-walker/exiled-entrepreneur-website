'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Youtube } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Is the AI avatar real?',
    answer:
      'Yes — the avatar you see in studio content is AI-generated using HeyGen. Joshua directs everything, approves every script, and handles all field content personally. The AI handles presentation while the human handles judgment.',
  },
  {
    id: 2,
    question: 'How do you make 3-5 videos per week alone?',
    answer:
      'Open Claw IA — a 9-agent AI system that handles research, scripting, editing, thumbnails, SEO, and distribution. Joshua reviews and approves everything. The system costs $248/month total.',
  },
  {
    id: 3,
    question: 'Are the businesses actually making money?',
    answer:
      "Some are, some aren't yet. That's the whole point of this channel — documenting the real numbers, not just the highlight reel. Empire Reports cover revenue, costs, and margins every week.",
  },
  {
    id: 4,
    question: 'What equipment do you use?',
    answer:
      'Full gear list is available on the Resources page. Key items: DJI drones for aerial work, basic camera setup for field content, and a multi-monitor workstation for AI operations.',
  },
  {
    id: 5,
    question: 'Can I use your AI system?',
    answer:
      'The AI Blueprint on the Resources page breaks down the entire system architecture, prompts, and costs. It\'s free — no email gate on the starter version.',
  },
  {
    id: 6,
    question: 'How do I contact you for business/sponsorship inquiries?',
    answer:
      'Email business@theexiledentrepreneur.com or use the Contact page. Response time is typically 24-48 hours.',
  },
  {
    id: 7,
    question: 'How can I support the project or get merch?',
    answer:
      'Subscribe on YouTube, share the content, and join the email list. Merch is coming in 2026 — sign up to be first to know.',
  },
];

export default function FooterHub() {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to subscribe. Please try again.');
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-dark py-20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE: Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-start"
          >
            {/* Newsletter Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-brand-cream mb-4 leading-tight">
                Join the Journey
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-8">
                Weekly empire updates, AI automation breakdowns, and behind-the-scenes dispatches.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="mb-8 space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold pointer-events-none"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-brand-card border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                />
              </div>

              {/* Subscribe Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                className="w-full py-4 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </motion.button>

              {/* Form Message */}
              {formMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    formStatus === 'success' ? 'text-brand-green' : 'text-brand-amber'
                  }`}
                >
                  {formMessage}
                </motion.p>
              )}
            </form>

            {/* YouTube Subscribe Button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-4 border-2 border-brand-gold text-brand-gold font-semibold rounded-lg hover:bg-brand-gold/10 transition-all duration-300 mb-6 self-start"
            >
              <Youtube size={20} />
              Subscribe on YouTube
            </motion.a>

            {/* Lead Magnet Reinforcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 rounded-lg bg-brand-card border border-brand-border"
            >
              <p className="text-sm text-brand-cream">
                <span className="text-brand-gold font-semibold">Plus the free Empire Blueprint</span>
                <span className="block text-brand-muted text-xs mt-1">
                  Complete system breakdown, prompts, and costs — no gatekeeping.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            {/* FAQ Heading */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-brand-cream mb-2">
                Frequently Asked Questions
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-gold to-brand-amber rounded-full" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="card-dark group"
                >
                  {/* FAQ Header - Clickable */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 focus:outline-none transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-brand-cream group-hover:text-brand-gold transition-colors duration-300 pr-4 flex-1">
                      {item.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        size={24}
                        className="text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300"
                      />
                    </motion.div>
                  </button>

                  {/* FAQ Answer - Expandable */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 12 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-brand-border">
                      <p className="text-brand-cream leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-brand-border via-brand-gold/30 to-brand-border mt-20 origin-left"
        />
      </div>
    </section>
  );
}
