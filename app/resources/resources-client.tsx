'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckSquare, Wrench, Building, Mail, Download } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'gated' | 'free';
  badge?: string;
}

const RESOURCES: Resource[] = [
  {
    id: 1,
    title: '9-Agent AI Blueprint',
    description:
      'The complete architecture, prompts, and cost breakdown of Open Claw IA — the system that runs 7 businesses.',
    icon: <Brain size={40} className="text-brand-violet" />,
    type: 'gated',
  },
  {
    id: 2,
    title: 'Layoff-to-Empire Checklist',
    description:
      'Step-by-step framework for turning a career setback into a business empire. Mindset, legal, financial, and operational.',
    icon: <CheckSquare size={40} className="text-brand-gold" />,
    type: 'gated',
  },
  {
    id: 3,
    title: 'Off-Grid Build Gear List',
    description:
      'Every tool, material, and piece of equipment used in the container house build. Updated as the project progresses.',
    icon: <Wrench size={40} className="text-brand-green" />,
    type: 'free',
    badge: 'FREE — No Email Required',
  },
  {
    id: 4,
    title: 'Business Entity Starter Guide',
    description:
      'LLC formation, multi-business structure, registered agent setup, and the Stormhaven model explained.',
    icon: <Building size={40} className="text-brand-amber" />,
    type: 'gated',
  },
];

export default function ResourcesClient() {
  const [gatedState, setGatedState] = useState<Record<number, { isOpen: boolean; email: string }>>({
    1: { isOpen: false, email: '' },
    2: { isOpen: false, email: '' },
    4: { isOpen: false, email: '' },
  });

  const toggleGatedForm = (resourceId: number) => {
    setGatedState((prev) => ({
      ...prev,
      [resourceId]: {
        ...prev[resourceId],
        isOpen: !prev[resourceId].isOpen,
      },
    }));
  };

  const handleEmailChange = (resourceId: number, email: string) => {
    setGatedState((prev) => ({
      ...prev,
      [resourceId]: {
        ...prev[resourceId],
        email,
      },
    }));
  };

  const handleGatedSubmit = (resourceId: number) => {
    const email = gatedState[resourceId].email;
    if (!email) return;

    // Submit to Formspree (placeholder URL)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('resource_id', resourceId.toString());

    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        // Reset form and show success
        setGatedState((prev) => ({
          ...prev,
          [resourceId]: {
            ...prev[resourceId],
            email: '',
            isOpen: false,
          },
        }));
        alert('Success! Check your email for access.');
      })
      .catch(() => {
        alert('There was an issue. Please try again.');
      });
  };

  const handleFreeDownload = () => {
    // Placeholder for free download
    alert('Download will start shortly. (Placeholder - implement actual download)');
  };

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
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-4">Resources</h1>
          <div className="accent-line" />
          <p className="text-xl text-brand-gold font-light max-w-2xl mx-auto">
            Everything I`ve learned, organized and free.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESOURCES.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card-dark flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-brand-dark border border-brand-border">
                {resource.icon}
              </div>

              {/* Badge */}
              {resource.badge && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-green/15 text-brand-green border border-brand-green/30">
                    {resource.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-brand-cream mb-3">{resource.title}</h3>

              {/* Description */}
              <p className="text-brand-muted mb-6 flex-grow">{resource.description}</p>

              {/* CTA Button or Form */}
              <div className="mt-auto">
                {resource.type === 'free' ? (
                  <motion.button
                    onClick={handleFreeDownload}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-brand-green text-brand-dark font-bold rounded-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Download Free
                  </motion.button>
                ) : (
                  <>
                    {!gatedState[resource.id]?.isOpen ? (
                      <motion.button
                        onClick={() => toggleGatedForm(resource.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
                      >
                        Get Free Access
                      </motion.button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-brand-cream mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={gatedState[resource.id]?.email || ''}
                            onChange={(e) => handleEmailChange(resource.id, e.target.value)}
                            className="w-full px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-brand-cream placeholder-brand-dim focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                          />
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => handleGatedSubmit(resource.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 px-4 py-2 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2"
                          >
                            <Mail size={16} />
                            Send
                          </motion.button>
                          <motion.button
                            onClick={() => toggleGatedForm(resource.id)}
                            className="flex-1 px-4 py-2 bg-brand-card border border-brand-border text-brand-cream font-bold rounded-lg hover:border-brand-gold/50 transition-colors"
                          >
                            Cancel
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 border border-brand-border rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-4">No Spam. No Pitches. Just Value.</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-8">
            You`ll get access to the resource immediately and updates about new tools, strategies, and empire-building insights. Unsubscribe anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-brand-gold mb-2">100%</div>
              <p className="text-brand-muted text-sm">Free Content</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-gold mb-2">No CC</div>
              <p className="text-brand-muted text-sm">Required</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-gold mb-2">Instant</div>
              <p className="text-brand-muted text-sm">Access</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* More Resources CTA */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-4">Building More Resources</h2>
          <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
            New resources are created as we hit milestones and learn from the building process. Follow the blog and YouTube channel for announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              Read the Blog
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-brand-gold text-brand-gold font-bold rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors"
            >
              Subscribe
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
