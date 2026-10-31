import Link from 'next/link';
import { Zap, Hammer, Briefcase, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const PILLARS = [
  {
    icon: Zap,
    title: 'Power & connectivity for remote work',
    body: 'Solar, LiFePO4 batteries, parallel inverters, and a usable internet connection where there is no utility pole. The infrastructure under every other thing on this site.',
    href: '/articles/category/off-grid-power',
    cta: 'Power & connectivity articles',
  },
  {
    icon: Hammer,
    title: 'Building off-grid',
    body: 'Two 40 ft high-cube containers on concrete pillars under a Cochise County owner-builder permit. Water hauled, septic installed, propane hot water, mini split cooling. Written as it happens.',
    href: '/the-build',
    cta: 'The build',
  },
  {
    icon: Briefcase,
    title: "Income that doesn't care where you live",
    body: 'One-product digital stores, drone services, rural land data, software. Each one is live and linked; what is written about them is limited to what I can show.',
    href: '/projects',
    cta: 'Projects',
  },
];

export default function Pillars() {
  return (
    <section className="border-y border-brand-border bg-brand-dark py-20" aria-labelledby="pillars">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <h2 id="pillars" className="mb-3 text-3xl font-bold text-brand-cream md:text-4xl">
            What this site covers
          </h2>
          <p className="mb-0 text-brand-muted">
            Three threads, one question: how do you earn a technical living from land with no
            utility connection and no employer nearby?
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="card-dark flex h-full flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-snug text-brand-cream">{p.title}</h3>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-brand-muted">{p.body}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
                  >
                    {p.cta}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
