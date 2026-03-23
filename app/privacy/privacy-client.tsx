'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyClient() {
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
          <h1 className="text-5xl font-bold text-brand-cream mb-2">Privacy Policy</h1>
          <p className="text-brand-muted mb-8 text-sm">Effective Date: March 2026</p>

          <div className="space-y-8 text-brand-muted leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Introduction</h2>
              <p>
                The Exiled Entrepreneur ("we," "us," "our," or "Company"), operated by Stormhaven Enterprises LLC, operates theexiledentrepreneur.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our Site, use our services, or interact with us in any way.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Communication and inquiry details when you contact us</li>
                <li>Newsletter and subscription preferences</li>
                <li>Form submission data from our contact, media kit, and other pages</li>
                <li>Payment information (if applicable) processed securely through third-party payment processors</li>
              </ul>
              <p>
                We also automatically collect certain information about your device and usage, including IP address, browser type, operating system, referrer pages, and pages visited. This information is collected through cookies, web beacons, and similar tracking technologies.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Respond to inquiries, provide customer support, and communicate with you</li>
                <li>Send newsletters, updates, and promotional content (with your consent)</li>
                <li>Improve, optimize, and enhance our Site and services</li>
                <li>Analyze usage patterns and trends to better understand our audience</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Prevent fraud and protect against security threats</li>
                <li>Fulfill sponsorship, partnership, and collaboration agreements</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Cookies</h2>
              <p className="mb-4">
                Our Site uses cookies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences, track your usage, and improve functionality. You can control cookie settings through your browser, though disabling cookies may limit Site functionality.
              </p>
              <p>
                Types of cookies we use include: essential cookies (required for Site functionality), analytics cookies (to understand usage), preference cookies (to remember your settings), and marketing cookies (to deliver targeted content).
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Third-Party Services
              </h2>
              <p className="mb-4">
                We use third-party services that may collect information about your use of our Site:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>
                  <strong className="text-brand-cream">YouTube:</strong> Embedded videos may collect viewing data
                </li>
                <li>
                  <strong className="text-brand-cream">Formspree:</strong> Form submissions are processed through Formspree for email delivery
                </li>
                <li>
                  <strong className="text-brand-cream">Vercel Analytics:</strong> Web analytics to understand traffic and user behavior
                </li>
                <li>
                  <strong className="text-brand-cream">Email Services:</strong> Newsletter deliveries processed through email service providers
                </li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies, and we are not responsible for their data collection practices. We encourage you to review their privacy policies.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services, fulfill your requests, comply with legal obligations, or as otherwise permitted by law. You can request deletion of your information at any time by contacting us, subject to legal requirements and legitimate business purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on your location and applicable laws, you may have rights regarding your information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access: Request a copy of the information we hold about you</li>
                <li>Correction: Request correction of inaccurate information</li>
                <li>Deletion: Request removal of your information (right to be forgotten)</li>
                <li>Opt-out: Unsubscribe from marketing communications at any time</li>
                <li>Portability: Request your information in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at contact@theexiledentrepreneur.com with your request.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Children`s Privacy
              </h2>
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child`s account. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, and disclosure. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security and encourage you to take precautions to protect your own information.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Effective Date" at the top of this policy and, when appropriate, by providing additional notice. Your continued use of the Site following changes constitutes your acceptance of the revised policy.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-brand-cream mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
