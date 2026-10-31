import Link from 'next/link';
import { Mail, Github } from 'lucide-react';
import { CONTACT_EMAIL, GITHUB_URL } from '@/lib/site';
import Reveal from './Reveal';

/**
 * TODO(newsletter): the previous NewsletterSignup component never posted
 * anywhere (it set an error state with a "coming soon" message). Until a real
 * list provider is wired up (Buttondown, Resend, etc.) this block stays a plain
 * email/GitHub contact so the site makes no promise it cannot keep.
 */
export default function ContactBlock() {
  return (
    <section className="bg-brand-dark py-20" aria-labelledby="contact-block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="cta-banner !my-0 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 id="contact-block" className="mb-3 text-2xl font-bold text-brand-cream md:text-3xl">
                Working on something similar?
              </h2>
              <p className="mb-0 text-brand-muted">
                If you are setting up power or connectivity on rural land, building under an
                owner-builder permit, or trying to earn from a place like this, email me. I read
                everything and answer what I can.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-glow inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-brand-dark hover:text-brand-dark"
              >
                <Mail size={16} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
          <p className="mb-0 mt-4 text-center text-xs text-brand-dim">
            Or use the <Link href="/contact">contact page</Link>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
