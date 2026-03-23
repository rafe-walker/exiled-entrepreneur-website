'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e5c472] transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold text-[#f5f0e8] mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-[#a89a8a] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Introduction
              </h2>
              <p>
                The Exiled Entrepreneur ("we," "us," or "our") operates the
                theexiledentrepreneur.com website (the "Site"). This Privacy Policy explains how
                we collect, use, disclose, and otherwise handle your information when you visit
                our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when you contact us,
                subscribe to our newsletter, or fill out any forms on our Site. This may include
                your name, email address, and other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Improve and optimize our Site and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Third-Party Services
              </h2>
              <p>
                We may use third-party services for analytics, email delivery, and other
                functions. These services may collect information about your use of our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:contact@theexiledentrepreneur.com"
                  className="text-[#d4a853] hover:text-[#e5c472]"
                >
                  contact@theexiledentrepreneur.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
