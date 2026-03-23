'use client';

import Link from 'next/link';
import { Mail, Youtube, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2622] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#d4a853] mb-4">
              The Exiled Entrepreneur
            </h3>
            <p className="text-[#a89a8a] text-sm">
              Building an empire from scratch with AI, drones, and determination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#f5f0e8] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-[#f5f0e8] mb-4">
              Topics
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Empire Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  AI Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Off-Grid Living
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                >
                  Entrepreneurship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-[#f5f0e8] mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@theexiledentrepreneur.com"
                className="flex items-center gap-2 text-[#a89a8a] hover:text-[#d4a853] transition-colors text-sm"
              >
                <Mail size={16} />
                contact@theexiledentrepreneur.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2622] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a89a8a]">
            <p>&copy; 2026 The Exiled Entrepreneur. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-[#d4a853] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#d4a853] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
