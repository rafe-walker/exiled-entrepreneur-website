import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { AUTHOR_NAME, CONTACT_EMAIL, GITHUB_URL, LEGAL_ENTITY, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Joshua Bryan: about ten years as a support engineer at Ring, laid off in 2026, now building an off-grid container home in Cochise County, Arizona and documenting how to earn a technical living from rural land.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About | The Exiled Entrepreneur',
    description:
      'Former Ring support engineer, laid off in 2026, building off-grid in Cochise County and writing it down.',
    url: `${SITE_URL}/about`,
    type: 'profile',
  },
};

const TIMELINE = [
  {
    period: '2016',
    title: 'Joined Ring as a support engineer',
    body: 'Ring was still a startup. I came in on the support engineering side, which at a hardware company means the place where customer problems, firmware, networking and the backend all collide.',
  },
  {
    period: '2018',
    title: 'Amazon acquired Ring',
    body: 'The job got bigger. Over the following years I was promoted from Support Engineer I through IV and worked executive escalations, DevOps support, on-call rotations and outage communications, with Splunk, Tableau, Redshift and AWS as the daily toolset. I was also on a team that built in-app Wi-Fi and network self-diagnostics so customers could find their own connectivity problems.',
  },
  {
    period: '2022',
    title: 'Built the solar array',
    body: 'Ground-mount array on the Cochise County property, permitted as its own accessory structure. It still runs the place: two EG4 inverters in parallel, server-rack LiFePO4 batteries, Solar Assistant for monitoring.',
  },
  {
    period: '2026',
    title: 'Laid off',
    body: 'After about ten years, the role ended in a layoff. The land and the power system were already here. The question stopped being hypothetical: can you earn a technical living from five acres with no grid?',
  },
  {
    period: 'Now',
    title: 'Building, and writing it down',
    body: 'An owner-built container home going up under the county owner-builder permit, a handful of small businesses that run from anywhere, and this site as the record of both.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="About"
        title="Laid off. Off-grid. Writing it down."
        width="narrow"
        lede={
          <p className="mb-0">
            I&apos;m {AUTHOR_NAME}. For about ten years I was a support engineer at Ring, from the
            startup days through the Amazon years. In 2026 that ended. I live on about five acres in
            Cochise County, Arizona, with no utility connection, building a container home under an
            owner-builder permit and figuring out how to make a technical living from here.
          </p>
        }
      />

      <div className="mx-auto max-w-3xl space-y-16 px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <section aria-labelledby="why">
            <h2 id="why" className="mb-4 text-2xl font-bold text-brand-cream md:text-3xl">
              What this site is for
            </h2>
            <div className="space-y-4 leading-relaxed text-brand-muted">
              <p>
                Most writing about off-grid living is about the living. Most writing about remote
                income assumes you have a fiber line and a coffee shop. This site is the overlap: the
                power and connectivity it takes to hold a technical job or run a small business from a
                place with neither, the build itself, and the specific businesses I run to pay for it.
              </p>
              <p>
                The rule is simple. Everything here about my own setup is something I have actually
                done. Where I have not confirmed a number, it is marked{' '}
                <strong className="font-mono text-brand-amber">[VERIFY]</strong> instead of guessed.
                External facts link to a source. No subscriber counts, no revenue screenshots, no
                milestones I cannot show.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="timeline">
            <h2 id="timeline" className="mb-8 text-2xl font-bold text-brand-cream md:text-3xl">
              How I got here
            </h2>
            <ol className="relative space-y-8 border-l border-brand-border pl-8">
              {TIMELINE.map((t) => (
                <li key={t.period} className="relative">
                  <span
                    className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand-gold bg-brand-dark"
                    aria-hidden="true"
                  />
                  <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    {t.period}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-brand-cream">{t.title}</h3>
                  <p className="mb-0 text-sm leading-relaxed text-brand-muted">{t.body}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="businesses">
            <h2 id="businesses" className="mb-4 text-2xl font-bold text-brand-cream md:text-3xl">
              What I run
            </h2>
            <p className="leading-relaxed text-brand-muted">
              A PDF guide store for DJI pilots (RotorCards), a drone services company with my wife
              (Stronghold Precision Aerials), a Part 107 study app (Flycensed), a vacant-parcel data
              product for Arizona land investors (AZ Land List), a digital-twin tool for rural land
              (PlotNode) and an AI agent substrate in closed alpha (IsoKron). Each one is described
              honestly, with a live link, on the <Link href="/projects">projects page</Link>. The
              site itself is operated by {LEGAL_ENTITY}.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="reach" className="rounded-xl border border-brand-border bg-brand-card/40 p-6 md:p-8">
            <h2 id="reach" className="mb-3 text-xl font-bold text-brand-cream">
              Reach me
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-brand-muted">
              Corrections, questions about the setup, or notes from your own build are all welcome.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                <Mail size={16} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
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
          </section>
        </Reveal>
      </div>
    </div>
  );
}
