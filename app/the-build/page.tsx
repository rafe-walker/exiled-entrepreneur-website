import type { Metadata } from 'next';
import Link from 'next/link';
import { Sun, Droplets, Flame, Wind, Home, FileCheck, Wifi, Layers } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Verify from '@/components/Verify';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Build: an off-grid container home in Cochise County',
  description:
    'Two 40 ft high-cube shipping containers on concrete pillars, built under a Cochise County owner-builder permit. Solar, LiFePO4 batteries, hauled water, septic and propane, documented as it happens.',
  alternates: { canonical: `${SITE_URL}/the-build` },
  openGraph: {
    title: 'The Build | The Exiled Entrepreneur',
    description:
      'An owner-built container home on five off-grid acres in Cochise County, Arizona: structure, permit, power, water, heat and cooling.',
    url: `${SITE_URL}/the-build`,
    type: 'website',
  },
};

interface SpecRow {
  label: string;
  value: React.ReactNode;
}

interface SystemSection {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  intro: React.ReactNode;
  specs: SpecRow[];
}

const SYSTEMS: SystemSection[] = [
  {
    id: 'site',
    icon: Home,
    title: 'The site',
    intro: (
      <p>
        About five acres of RU-4 zoned land in Cochise County, Arizona, with no utility connection.
        Everything the house uses is generated, hauled or stored on the parcel. I do not publish the
        address.
      </p>
    ),
    specs: [
      { label: 'Parcel', value: '~5 acres, RU-4 zoning, Cochise County, AZ' },
      { label: 'Utilities', value: 'None at the lot line. Off-grid power, hauled water, septic, propane.' },
      { label: 'Elevation', value: <Verify>site elevation in feet</Verify> },
    ],
  },
  {
    id: 'permit',
    icon: FileCheck,
    title: 'The permit',
    intro: (
      <p>
        The house is going up under the Cochise County owner-builder opt-out permit, which lets an
        owner build their own residence without a general contractor. The pole barn and chicken coop
        and the ground-mount solar array each needed their own accessory-structure permit.
      </p>
    ),
    specs: [
      { label: 'Residence', value: 'Cochise County owner-builder opt-out permit; no general contractor' },
      { label: 'Accessory structures', value: 'Separate permits for the pole barn/coop and the ground-mount solar array' },
      { label: 'Inspections to date', value: <Verify>which inspections have been passed</Verify> },
    ],
  },
  {
    id: 'structure',
    icon: Layers,
    title: 'The structure',
    intro: (
      <p>
        Two 40 ft high-cube shipping containers set side by side for a 16 ft by 40 ft footprint,
        resting on concrete pillars roughly two feet off the ground. Steel sweats and conducts heat, so
        the insulation plan is a closed-cell foam layer bonded to the steel with Rockwool batts in
        front of it, and the roof is coated with a white silicone.
      </p>
    ),
    specs: [
      { label: 'Shell', value: 'Two 40 ft high-cube containers, side by side (16 ft × 40 ft)' },
      { label: 'Foundation', value: 'Concrete pillars, ~2 ft above grade' },
      { label: 'Insulation', value: '1" closed-cell spray foam on the steel, then Rockwool batts' },
      { label: 'Roof', value: 'Henry Tropi-Cool silicone roof coating' },
      { label: 'Interior area', value: <Verify>finished square footage</Verify> },
    ],
  },
  {
    id: 'power',
    icon: Sun,
    title: 'Power',
    intro: (
      <p>
        A ground-mount solar array built in 2022 feeds two EG4 3000EHV-48 inverters running in parallel.
        The system is 120 V only, landing in an Eaton BR load center. Storage is server-rack LiFePO4,
        mostly Eco-Worthy units plus one of another brand. Monitoring runs through Solar Assistant,
        which talks to the older 3000EHV-48 revision over its RS232/RS485 ports. All of it lives in a
        utility shed under 200 square feet.
      </p>
    ),
    specs: [
      { label: 'Array', value: <>Ground mount, built 2022. <Verify>panel count, panel wattage, total kW</Verify></> },
      { label: 'Inverters', value: 'Two EG4 3000EHV-48 in parallel, 120 V only' },
      { label: 'Distribution', value: 'Eaton BR panel' },
      { label: 'Batteries', value: <>Eco-Worthy server-rack LiFePO4 plus one other brand. <Verify>count and total kWh</Verify></> },
      { label: 'Monitoring', value: 'Solar Assistant via RS232/RS485 (older 3000EHV-48 ports)' },
      { label: 'Equipment room', value: 'Utility shed, under 200 sq ft' },
    ],
  },
  {
    id: 'cooling',
    icon: Wind,
    title: 'Cooling',
    intro: (
      <p>
        Southern Arizona summers are the hard case for an off-grid house made of steel. Cooling is a
        single EG4 12k BTU hybrid mini split.
      </p>
    ),
    specs: [
      { label: 'Unit', value: 'EG4 12k BTU hybrid mini split' },
      { label: 'Measured draw', value: <Verify>watts at steady state on a summer afternoon</Verify> },
    ],
  },
  {
    id: 'water',
    icon: Droplets,
    title: 'Water and waste',
    intro: (
      <p>
        There is no well. Water is hauled in and stored in a tank, pressurized by a SEAFLO 55-series
        12 V pump with a pressure tank, and run through whole-house filtration. Waste goes to a septic
        system. A gray-water diverter for the washing machine is planned.
      </p>
    ),
    specs: [
      { label: 'Source', value: <>Hauled water into a storage tank. <Verify>tank capacity in gallons</Verify></> },
      { label: 'Pressure', value: 'SEAFLO 55-series 12 V pump + pressure tank' },
      { label: 'Treatment', value: 'Whole-house filtration' },
      { label: 'Waste', value: 'Septic system' },
      { label: 'Planned', value: 'Gray-water diverter on the washer' },
    ],
  },
  {
    id: 'hot-water',
    icon: Flame,
    title: 'Hot water',
    intro: (
      <p>
        Heating water with electricity is a poor trade on a battery system. Hot water here is propane:
        a Rinnai REP160eP outdoor tankless unit, fed from 100 lb cylinders to start, with a 330 gallon
        tank planned.
      </p>
    ),
    specs: [
      { label: 'Heater', value: 'Rinnai REP160eP outdoor propane tankless' },
      { label: 'Propane', value: '100 lb cylinders initially; 330 gal tank later' },
    ],
  },
  {
    id: 'connectivity',
    icon: Wifi,
    title: 'Connectivity',
    intro: (
      <p>
        Working remotely from here depends on a connection the land does not come with. The hardware
        and measured results belong in the connectivity articles; the summary goes here once confirmed.
      </p>
    ),
    specs: [
      { label: 'Current link', value: <Verify>provider, hardware, measured down/up and latency</Verify> },
      { label: 'Backup', value: <Verify>backup connection, if any</Verify> },
    ],
  },
];

export default function TheBuildPage() {
  const articles = getArticlesByCategory('building').slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="The Build"
        title="An off-grid container home, owner-built"
        lede={
          <>
            <p>
              Two 40 ft high-cube containers on concrete pillars, on about five acres in Cochise County,
              Arizona, built under the county&apos;s owner-builder permit. This page is the current
              state of every system in the house. Anything marked{' '}
              <Verify>like this</Verify> is a number I have not confirmed yet and will not guess at.
            </p>
            <p className="mb-0">
              Current stage: <Verify>where the build stands today</Verify>
            </p>
          </>
        }
      />

      <nav aria-label="Systems" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-2">
          {SYSTEMS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-full border border-brand-border px-4 py-1.5 text-sm font-semibold text-brand-muted hover:border-brand-gold/60 hover:text-brand-gold"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-24 sm:px-6 lg:px-8">
        {SYSTEMS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.id} delay={Math.min(i * 0.03, 0.15)}>
              <section id={s.id} className="card-dark scroll-mt-28 !p-0 overflow-hidden" aria-labelledby={`${s.id}-title`}>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                  <div className="p-6 md:p-8 lg:border-r lg:border-brand-border">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h2 id={`${s.id}-title`} className="mb-3 text-2xl font-bold text-brand-cream">
                      {s.title}
                    </h2>
                    <div className="text-brand-muted [&>p]:mb-0 [&>p]:leading-relaxed">{s.intro}</div>
                  </div>
                  <dl className="divide-y divide-brand-border/70 bg-brand-dark/40 p-6 md:p-8">
                    {s.specs.map((row) => (
                      <div key={row.label} className="grid grid-cols-1 gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-brand-dim sm:pt-0.5">
                          {row.label}
                        </dt>
                        <dd className="text-sm leading-relaxed text-brand-cream">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <section className="pt-8" aria-labelledby="build-articles">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="build-articles" className="mb-0 text-2xl font-bold text-brand-cream md:text-3xl">
                Build articles
              </h2>
              <Link href="/articles/category/building" className="text-sm font-semibold">
                All building articles →
              </Link>
            </div>
            {articles.length === 0 ? (
              <p className="mb-0 text-brand-muted">
                No build articles published yet. The specs above are the current source of truth.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {articles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            )}
          </section>
        </Reveal>
      </div>
    </div>
  );
}
