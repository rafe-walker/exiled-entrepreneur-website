import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { VENTURES } from '@/lib/site';
import Reveal from './Reveal';

export default function BuildingStrip() {
  return (
    <section className="border-t border-brand-border bg-brand-card/30 py-20" aria-labelledby="building">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="building" className="mb-2 text-3xl font-bold text-brand-cream md:text-4xl">
              What I&apos;m building
            </h2>
            <p className="mb-0 text-brand-muted">
              Every link goes to a live site. No revenue claims here; where I have numbers, they go in
              the articles.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
          >
            About each project <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VENTURES.map((v, i) => (
            <Reveal key={v.url} delay={i * 0.05} className="h-full">
              <li className="h-full list-none">
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-dark group flex h-full flex-col justify-between gap-3 text-brand-cream hover:text-brand-cream"
                >
                  <div>
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="text-lg font-bold">{v.name}</span>
                      <ExternalLink
                        size={16}
                        className="text-brand-dim transition-colors group-hover:text-brand-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mb-0 text-sm text-brand-muted">{v.summary}</p>
                  </div>
                  <span className="text-xs font-mono text-brand-dim">
                    {v.url.replace(/^https?:\/\/(www\.)?/, '')}
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
