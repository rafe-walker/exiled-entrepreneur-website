'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-[#2a2622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#d4a853]">⬆️</div>
            <span className="hidden sm:inline text-lg font-bold text-[#f5f0e8]">
              The Exiled Entrepreneur
            </span>
            <span className="sm:hidden text-lg font-bold text-[#f5f0e8]">
              TEE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[#a89a8a] hover:text-[#d4a853] transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#d4a853] text-[#0a0a0f] rounded-lg font-semibold hover:bg-[#e5c472] transition-colors"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[#2a2622] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#d4a853]" />
            ) : (
              <Menu size={24} className="text-[#d4a853]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[#2a2622] py-4 space-y-4">
            <Link
              href="/about"
              className="block text-[#a89a8a] hover:text-[#d4a853] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-[#a89a8a] hover:text-[#d4a853] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-[#a89a8a] hover:text-[#d4a853] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-[#d4a853] text-[#0a0a0f] rounded-lg font-semibold hover:bg-[#e5c472] transition-colors text-center"
            >
              Subscribe
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
