import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BatteryCharging } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Small calculators for working off-grid: how long a battery runs a Starlink dish, and what it takes to run one around the clock. No sign-up, nothing stored.',
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    title: 'Tools | The Exiled Entrepreneur',
    description: 'Calculators for remote work from off-grid land, starting with Starlink battery runtime.',
    url: `${SITE_URL}/tools`,
    type: 'website',
  },
};

const TOOLS = [
  {
    href: '/tools/starlink-battery-calculator',
    icon: BatteryCharging,
    title: 'Starlink battery runtime calculator',
    summary:
      'Pick a dish, enter your battery and inverter, and get hours of runtime, watt-hours per day and the bank size for 24 hours. Figures come from Starlink spec sheets, cited on the page.',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="Tools"
        title="Calculators for the questions I kept answering by hand"
        lede={
          <p className="mb-0">
            Each one runs in your browser, stores nothing, and shows its formula and its sources.
            The live, sensor-fed version of these calculations is the open-source deadzone
            project linked from each tool.
          </p>
        }
      />

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TOOLS.map((t, i) => (
            <Reveal key={t.href} delay={Math.min(i * 0.05, 0.2)}>
              <li className="list-none">
                <Link
                  href={t.href}
                  className="card-dark group flex h-full flex-col text-brand-cream hover:text-brand-cream"
                >
                  <t.icon size={28} className="mb-4 text-brand-gold" aria-hidden="true" />
                  <span className="mb-2 text-xl font-bold leading-snug transition-colors group-hover:text-brand-gold-light">
                    {t.title}
                  </span>
                  <span className="mb-5 flex-grow text-sm leading-relaxed text-brand-muted">
                    {t.summary}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold">
                    Open the calculator
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
