'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsClient() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-20 pt-32">
        {/* Back Link */}
        <div
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div
        >
          <h1 className="text-5xl font-bold text-brand-cream mb-2">Terms of Service</h1>
          <p className="text-brand-muted mb-8 text-sm">Effective Date: March 2026</p>

          <div className="space-y-8 text-brand-muted leading-relaxed">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using The Exiled Entrepreneur website (the "Site"), including any content, functionality, and services offered on or through the Site, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these Terms of Service, please do not use or access this Site.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Description of Service
              </h2>
              <p>
                The Exiled Entrepreneur, operated by Stormhaven Enterprises LLC, provides informational, educational, and entertainment content related to entrepreneurship, business building, technology, off-grid living, and personal development. The Site offers video content, articles, blog posts, newsletters, community features, and other resources. The Company reserves the right to modify or discontinue the Service, or any portion thereof, at any time with or without notice.
              </p>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">User Conduct</h2>
              <p className="mb-4">When using the Site, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Harass, threaten, abuse, or defame any person or entity</li>
                <li>Post or transmit obscene, offensive, or inappropriate content</li>
                <li>Engage in spam, phishing, or unauthorized access to the Site</li>
                <li>Reverse engineer, decompile, or attempt to discover source code or algorithms</li>
                <li>Use the Site for commercial purposes without authorization</li>
                <li>Manipulate or scrape the Site or its content</li>
                <li>Interfere with the proper functioning of the Site</li>
                <li>Impersonate others or misrepresent your identity</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Intellectual Property
              </h2>
              <p className="mb-4">
                All content on the Site, including text, graphics, videos, audio, logos, images, and software, is the property of The Exiled Entrepreneur or its content suppliers and is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes only.
              </p>
              <p className="mb-4">You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                <li>Reproduce or copy any materials for commercial use</li>
                <li>Distribute, modify, adapt, or translate any content</li>
                <li>Remove copyright, trademark, or other proprietary notations</li>
                <li>Transfer or assign materials to third parties</li>
                <li>Create derivative works based on the Site`s content</li>
              </ul>
              <p>
                User-generated content submitted to the Site (comments, reviews, etc.) grants the Company a non-exclusive, perpetual license to use, display, and distribute such content.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Disclaimer</h2>
              <p>
                The materials, information, and services on The Exiled Entrepreneur website are provided on an "as is" and "as available" basis. The Company makes no warranties, either express or implied, and hereby disclaims and negates all other warranties, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement of intellectual property or other rights.
              </p>
              <p className="mt-4">
                The Company does not warrant that the Site will be uninterrupted, error-free, or free from harmful components. You assume all responsibility and risk for your use of the Site and the Internet in general.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Limitation of Liability
              </h2>
              <p>
                In no event shall The Exiled Entrepreneur, Stormhaven Enterprises LLC, or their suppliers, affiliates, or authorized representatives be liable for any damages (including but not limited to damages for loss of data, profit, business interruption, or loss of business information) arising from the use or inability to use materials on the Site, even if we have been notified of the possibility of such damages.
              </p>
              <p className="mt-4">
                This limitation applies whether the alleged liability is based on warranty, contract, negligence, strict liability, or any other legal theory. Some jurisdictions do not allow the limitation of liability, so this limitation may not apply to you.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Accuracy of Materials
              </h2>
              <p>
                The materials, information, and services appearing on The Exiled Entrepreneur website may include technical, typographical, or photographic errors. We do not warrant that any materials on the Site are accurate, complete, or current. The Company may make changes to materials on the Site at any time without notice. We are not responsible for outdated information, and we cannot guarantee the accuracy of any information provided by third-party sources.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">External Links</h2>
              <p>
                The Site may contain links to external websites and third-party resources. We have not reviewed all linked sites and are not responsible for their content, accuracy, or practices. The inclusion of any link does not imply endorsement by The Exiled Entrepreneur. Use of any linked website is at your own risk, and you should review their terms, privacy policies, and other policies before use.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Changes to Terms
              </h2>
              <p>
                We may revise these Terms of Service at any time without notice. By using the Site, you are agreeing to be bound by the then-current version of these Terms of Service. We will notify you of material changes by updating the "Effective Date" above and, when appropriate, by providing additional notice.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be invalid or unenforceable, such provision shall be severable and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Arizona, USA, without regard to its conflict of law provisions. You irrevocably submit to the exclusive jurisdiction of the state and federal courts located in Arizona for resolution of any disputes arising from or relating to these terms.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Entire Agreement</h2>
              <p>
                These Terms of Service, along with our Privacy Policy and any other policies or guidelines published on the Site, constitute the entire agreement between you and The Exiled Entrepreneur regarding the Site and supersede all prior negotiations, understandings, and agreements.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-brand-card border border-brand-border rounded-lg p-6 space-y-2">
                <p>
                  <strong className="text-brand-cream">Email:</strong>{' '}
                  <a
                    href="mailto:contact@theexiledentrepreneur.com"
                    className="text-brand-gold hover:text-brand-gold-light transition-colors"
                  >
                    contact@theexiledentrepreneur.com
                  </a>
                </p>
                <p>
                  <strong className="text-brand-cream">Company:</strong> Stormhaven Enterprises LLC
                </p>
                <p>
                  <strong className="text-brand-cream">Website:</strong>{' '}
                  <a
                    href="https://theexiledentrepreneur.com"
                    className="text-brand-gold hover:text-brand-gold-light transition-colors"
                  >
                    theexiledentrepreneur.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
