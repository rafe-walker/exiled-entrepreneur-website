'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MessageSquare, Wrench } from 'lucide-react';
import { CONTACT_EMAIL, GITHUB_URL } from '@/lib/site';

const TOPICS = [
  { value: 'setup', label: 'Question about the power / water / connectivity setup' },
  { value: 'build', label: 'Owner-builder permit or container build' },
  { value: 'income', label: 'One of the projects or the income side' },
  { value: 'correction', label: 'Correction to an article' },
  { value: 'other', label: 'Something else' },
];

/**
 * TODO(contact-form): there is no form backend. The previous version posted
 * nowhere and showed a "coming soon" error. This version composes a mailto:
 * link from the fields so it works today with zero infrastructure. Replace
 * handleSubmit with a real endpoint (Formspree, Resend, a route handler) when
 * one exists, and update the privacy policy's third-party list to match.
 */
export default function ContactClient() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState(TOPICS[0].value);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const topicLabel = TOPICS.find((t) => t.value === topic)?.label ?? 'Contact';
    const subject = `[TEE] ${topicLabel}${name ? ` — ${name}` : ''}`;
    const body = `${message}\n\n— ${name || 'Anonymous'}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pt-32 pb-12 sm:px-6 lg:px-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">Contact</p>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-brand-cream md:text-5xl">
            Email is the whole system
          </h1>
          <div className="mb-6 h-1 w-20 rounded bg-gradient-to-r from-brand-gold to-brand-amber" />
          <p className="mb-0 max-w-2xl text-lg leading-relaxed text-brand-muted">
            One inbox, read by me. Questions about the setup, the permit process, or any of the
            projects are welcome, and so are corrections. If I marked something{' '}
            <strong className="font-mono text-brand-amber">[VERIFY]</strong> and you know the answer,
            send it.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 lg:col-span-1"
          >
            <div className="card-dark">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="mb-1 text-base font-semibold text-brand-cream">Email</h2>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-sm font-semibold">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <Github size={22} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="mb-1 text-base font-semibold text-brand-cream">GitHub</h2>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-sm font-semibold"
                  >
                    github.com/rafe-walker
                  </a>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <Wrench size={22} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="mb-1 text-base font-semibold text-brand-cream">Good questions</h2>
                  <p className="mb-0 text-sm leading-relaxed text-brand-muted">
                    Specific ones. Model numbers, what you have tried, what the inspector said. I can
                    answer those; I cannot answer &quot;how do I go off-grid&quot;.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <MessageSquare size={22} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="mb-1 text-base font-semibold text-brand-cream">Response time</h2>
                  <p className="mb-0 text-sm leading-relaxed text-brand-muted">
                    I am usually on the build during the day and answer email in the evening. If it
                    takes a few days, it is the build, not you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="card-dark lg:col-span-2 md:!p-8"
            aria-describedby="form-note"
          >
            <p id="form-note" className="mb-6 text-sm text-brand-muted">
              This form opens your email client with the message filled in. Nothing is stored on this
              site.
            </p>

            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-cream">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-brand-border bg-brand-dark px-4 py-3 text-brand-cream placeholder-brand-dim focus:border-brand-gold focus:outline-none"
                placeholder="Optional"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-brand-cream">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-lg border border-brand-border bg-brand-dark px-4 py-3 text-brand-cream focus:border-brand-gold focus:outline-none"
              >
                {TOPICS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-brand-cream">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-y rounded-lg border border-brand-border bg-brand-dark px-4 py-3 text-brand-cream placeholder-brand-dim focus:border-brand-gold focus:outline-none"
                placeholder="What are you working on, and what specifically do you want to know?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-gold py-3 font-bold text-brand-dark transition-colors hover:bg-brand-gold-light"
            >
              Open in your email client
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
