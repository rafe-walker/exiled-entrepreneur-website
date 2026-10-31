import type { Metadata } from 'next';
import { ExternalLink, Github } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { GITHUB_URL, SITE_URL, VENTURES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'The businesses and software behind the site: RotorCards, Stronghold Precision Aerials, Flycensed, AZ Land List, PlotNode and IsoKron. One honest paragraph each, with live links.',
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: 'Projects | The Exiled Entrepreneur',
    description:
      'RotorCards, Stronghold Precision Aerials, Flycensed, AZ Land List, PlotNode and IsoKron, described without hype.',
    url: `${SITE_URL}/projects`,
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="Projects"
        title="What I'm building, and why each one exists"
        lede={
          <p className="mb-0">
            Six things, all live, all linked. Some are further along than others; one is a closed
            alpha. There are no revenue figures on this page. When I publish numbers they go in an
            article with the date attached.
          </p>
        }
      />

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ol className="space-y-6">
          {VENTURES.map((v, i) => (
            <Reveal key={v.url} delay={Math.min(i * 0.04, 0.2)}>
              <li className="card-dark list-none">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h2 className="mb-0 text-2xl font-bold text-brand-cream">{v.name}</h2>
                      {v.status && (
                        <span className="rounded-full border border-brand-violet/50 px-2.5 py-0.5 text-xs font-semibold text-brand-violet">
                          {v.status}
                        </span>
                      )}
                    </div>
                    <p className="mb-3 font-medium text-brand-gold">{v.summary}</p>
                    <p className="mb-0 max-w-3xl leading-relaxed text-brand-muted">{v.detail}</p>
                  </div>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex shrink-0 items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold"
                  >
                    {v.url.replace(/^https?:\/\/(www\.)?/, '')}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex flex-col gap-4 rounded-xl border border-brand-border bg-brand-card/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-xl font-bold text-brand-cream">Code</h2>
              <p className="mb-0 text-sm text-brand-muted">
                Open-source pieces, when I release them, land on GitHub under rafe-walker.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              <Github size={16} aria-hidden="true" />
              github.com/rafe-walker
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
