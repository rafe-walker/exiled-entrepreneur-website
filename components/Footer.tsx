import Link from 'next/link';
import { Mail, Github, ExternalLink, Flame } from 'lucide-react';
import { CONTACT_EMAIL, GITHUB_URL, LEGAL_ENTITY, SITE_TAGLINE, VENTURES } from '@/lib/site';

const NAV_LINKS = [
  { label: 'Articles', href: '/articles' },
  { label: 'The Build', href: '/the-build' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center pb-12 border-b border-brand-border">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Flame size={28} className="text-brand-gold" aria-hidden="true" />
            <p className="mb-0 text-xl md:text-2xl font-black text-brand-gold tracking-tight">
              THE EXILED ENTREPRENEUR
            </p>
          </div>
          <p className="mb-0 text-brand-muted text-base">{SITE_TAGLINE}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <div>
            <h2 className="text-base font-bold text-brand-cream mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Site
            </h2>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-cream mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              What I&apos;m building
            </h2>
            <ul className="space-y-3 text-sm">
              {VENTURES.map((v) => (
                <li key={v.url}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-muted hover:text-brand-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    {v.name}
                    <ExternalLink
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-cream mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors duration-300 break-all"
                >
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors duration-300"
                >
                  <Github size={16} aria-hidden="true" />
                  github.com/rafe-walker
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-brand-muted">
          <p className="mb-0">&copy; {new Date().getFullYear()} {LEGAL_ENTITY}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors duration-300">
              Privacy
            </Link>
            <span className="text-brand-border">|</span>
            <Link href="/terms" className="hover:text-brand-gold transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
