'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/articles', label: 'Articles' },
  { href: '/the-build', label: 'The Build' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-border'
          : 'bg-brand-dark/40 backdrop-blur-sm border-b border-brand-border/50'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-brand-gold group-hover:text-brand-gold-light transition-colors">
              <Flame size={26} className="stroke-2" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="hidden sm:inline text-xs font-bold text-brand-cream tracking-[0.2em]">
                THE EXILED
              </span>
              <span className="hidden sm:inline text-xs font-bold text-brand-gold tracking-[0.2em]">
                ENTREPRENEUR
              </span>
              <span className="sm:hidden text-base font-bold text-brand-gold tracking-wide">TEE</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  isActive(link.href) ? 'text-brand-cream' : 'text-brand-muted hover:text-brand-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/the-build"
              className="px-5 py-2 bg-brand-gold text-brand-dark hover:text-brand-dark font-semibold rounded-lg text-sm tracking-wide hover:bg-brand-gold-light transition-colors duration-200 shadow-lg"
            >
              Follow the build
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-brand-card rounded-lg transition-colors duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-brand-gold" strokeWidth={2.5} />
            ) : (
              <Menu size={24} className="text-brand-gold" strokeWidth={2.5} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden border-t border-brand-border/50 bg-brand-dark/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="py-6 px-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`block py-2 px-3 rounded-lg transition-colors duration-200 font-medium text-sm tracking-wide ${
                      isActive(link.href)
                        ? 'text-brand-cream bg-brand-card'
                        : 'text-brand-muted hover:text-brand-gold hover:bg-brand-card'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
