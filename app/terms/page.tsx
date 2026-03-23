'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
          <h1 className="text-5xl font-bold text-[#f5f0e8] mb-8">Terms of Service</h1>

          <div className="space-y-6 text-[#a89a8a] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using The Exiled Entrepreneur website (the "Site"), you accept
                and agree to be bound by the terms and provision of this agreement. If you do not
                agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (including
                information and software) from The Exiled Entrepreneur website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software contained on the Site
                </li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Disclaimer
              </h2>
              <p>
                The materials on The Exiled Entrepreneur website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim and negate all
                other warranties including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Limitations
              </h2>
              <p>
                In no event shall The Exiled Entrepreneur or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data or profit, or due
                to business interruption) arising out of the use or inability to use the materials
                on The Exiled Entrepreneur website, even if we or our authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Accuracy of Materials
              </h2>
              <p>
                The materials appearing on The Exiled Entrepreneur website could include technical,
                typographical, or photographic errors. We do not warrant that any of the materials
                on the website are accurate, complete, or current. We may make changes to the
                materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Links
              </h2>
              <p>
                We have not reviewed all of the sites linked to our website and are not responsible
                for the contents of any such linked site. The inclusion of any link does not imply
                endorsement by us of the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Modifications
              </h2>
              <p>
                We may revise these terms of service for the website at any time without notice. By
                using this website, you are agreeing to be bound by the then current version of
                these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the
                laws of Arizona, and you irrevocably submit to the exclusive jurisdiction of the
                courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f0e8] mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
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
