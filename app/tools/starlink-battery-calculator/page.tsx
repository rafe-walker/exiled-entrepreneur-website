import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import StarlinkBatteryCalculator from '@/components/StarlinkBatteryCalculator';
import { DISH_MODELS, STARLINK_SPECS_RETRIEVED } from '@/lib/starlink';
import { AUTHOR_NAME, LEGAL_ENTITY, SITE_NAME, SITE_URL } from '@/lib/site';

const PAGE_URL = `${SITE_URL}/tools/starlink-battery-calculator`;
const DEADZONE_URL = 'https://github.com/rafe-walker/deadzone';
const TITLE = 'Starlink battery runtime calculator';
const DESCRIPTION =
  'How long will a battery run a Starlink dish? Pick Standard, Mini, Performance or Flat High Performance, enter Ah or kWh, inverter efficiency and reserve, and get hours of runtime, Wh per day and the bank size for 24 hours. Power figures from Starlink spec sheets.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'starlink power consumption',
    'how much battery to run starlink',
    'starlink battery runtime',
    'starlink watts',
    'starlink mini power',
    'starlink off grid',
    'starlink power consumption per day',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: TITLE,
  url: PAGE_URL,
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: AUTHOR_NAME, url: `${SITE_URL}/about` },
  publisher: { '@type': 'Organization', name: LEGAL_ENTITY, url: SITE_URL },
  isBasedOn: DEADZONE_URL,
  dateModified: STARLINK_SPECS_RETRIEVED,
};

const serialize = (o: unknown) => JSON.stringify(o).replace(/</g, '\\u003c');

export default function StarlinkBatteryCalculatorPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-muted">
          <Link href="/tools" className="inline-flex items-center gap-1.5">
            <ArrowLeft size={14} aria-hidden="true" />
            Tools
          </Link>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Calculator
          </p>
          <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
            {TITLE}
          </h1>
          <div className="mb-6 h-1 w-20 rounded bg-gradient-to-r from-brand-gold to-brand-amber" />
          <p className="mb-0 text-lg leading-relaxed text-brand-muted">
            How long a battery runs a Starlink dish with no sun, how many watt-hours the dish eats
            per day, and how big a bank you need to run it around the clock. Dish figures are the
            averages Starlink prints on its own spec sheets, linked below.
          </p>
        </header>

        <StarlinkBatteryCalculator />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="min-w-0 space-y-12">
            <section aria-labelledby="how">
              <h2 id="how" className="mb-4 text-2xl font-bold text-brand-cream">
                How we computed this
              </h2>
              <ol className="list-decimal space-y-3 pl-6 text-brand-muted">
                <li>
                  <strong className="text-brand-cream">Load.</strong> Dish watts plus whatever else is
                  on the battery. Heater off uses the midpoint of Starlink&apos;s published range;
                  heater on uses the top of it.
                </li>
                <li>
                  <strong className="text-brand-cream">Battery watts</strong> = load ÷ inverter
                  efficiency. A 90 % inverter turns 88 W of AC load into about 98 W pulled from the
                  bank. If the dish runs on DC (Mini, or a Gen 3 with a DC conversion kit) set
                  efficiency to 100.
                </li>
                <li>
                  <strong className="text-brand-cream">Usable Wh</strong> = nameplate Wh × (1 −
                  reserve). Ah is converted at the nominal voltage you pick: 100 Ah at 12 V is
                  1,200 Wh.
                </li>
                <li>
                  <strong className="text-brand-cream">Runtime</strong> = usable Wh ÷ battery
                  watts. This is the no-sun, no-generator number.
                </li>
                <li>
                  <strong className="text-brand-cream">Wh per day</strong> = battery watts × 24.{' '}
                  <strong className="text-brand-cream">Bank for 24 h</strong> = Wh per day ÷ (1 −
                  reserve), so the reserve is still there in the morning.
                </li>
              </ol>
              <p className="mt-4 mb-0 text-sm text-brand-muted">
                The same arithmetic, fed by live inverter and dish data instead of typed numbers,
                is the &ldquo;hours at current state of charge&rdquo; answer in{' '}
                <a href={DEADZONE_URL} target="_blank" rel="noopener noreferrer">
                  deadzone
                </a>
                , the open-source Go binary I run in the shed.
              </p>
            </section>

            <section aria-labelledby="caveats">
              <h2 id="caveats" className="mb-4 text-2xl font-bold text-brand-cream">
                Caveats
              </h2>
              <ul className="list-disc space-y-3 pl-6 text-brand-muted">
                <li>
                  <strong className="text-brand-cream">Starlink publishes a range, not a number.</strong>{' '}
                  &ldquo;Average: 75–100 W&rdquo; is all the Standard sheet says. Real draw moves
                  with satellite handoffs, obstruction, weather and firmware. Owners with plug-in
                  meters commonly report Gen 3 Standard kits below the published range when idle and
                  above it in rain or snow; put your own meter reading in the dish-draw field.
                </li>
                <li>
                  <strong className="text-brand-cream">There is no published heater wattage.</strong>{' '}
                  The toggle only moves you to the top of Starlink&apos;s range. In a real storm with
                  snow melt on, expect more than that and plan for it.
                </li>
                <li>
                  <strong className="text-brand-cream">Nameplate Ah is not usable Ah.</strong> Cold
                  LiFePO4 delivers less, lead-acid loses capacity at high discharge rates, and BMS
                  low-voltage cutoffs land above zero. The reserve field is the only margin here;
                  it does not model temperature or ageing.
                </li>
                <li>
                  <strong className="text-brand-cream">Inverter idle draw is not included.</strong>{' '}
                  Many inverters burn 15–60 W doing nothing. If yours is on only for the dish, add
                  its idle draw to &ldquo;other loads&rdquo;.
                </li>
                <li>
                  <strong className="text-brand-cream">Sleep schedule changes everything.</strong>{' '}
                  Starlink&apos;s app can power the dish down overnight; this tool assumes it runs
                  continuously.
                </li>
                <li>
                  This is arithmetic, not advice. Verify against your own system before you depend
                  on it for a call you cannot miss.
                </li>
              </ul>
            </section>
          </div>

          <aside className="min-w-0 space-y-8">
            <section
              aria-labelledby="sources"
              className="rounded-xl border border-brand-border bg-brand-card/40 p-6"
            >
              <h2 id="sources" className="mb-1 text-lg font-bold text-brand-cream">
                Sources
              </h2>
              <p className="mb-4 text-xs text-brand-muted">
                Starlink specification sheets, retrieved {STARLINK_SPECS_RETRIEVED}. Each prints a
                single &ldquo;Power Consumption — Average&rdquo; line for the kit.
              </p>
              <ul className="space-y-3 text-sm">
                {DISH_MODELS.map((m) => (
                  <li key={m.id} className="border-b border-brand-border/60 pb-3 last:border-0 last:pb-0">
                    <a
                      href={m.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold"
                    >
                      {m.label}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <p className="mb-0 mt-1 text-brand-muted">
                      Average {m.avgLowW}–{m.avgHighW} W. Snow melt: {m.snowMelt.toLowerCase()}.
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="live"
              className="rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-6"
            >
              <h2 id="live" className="mb-2 text-lg font-bold text-brand-cream">
                The live version
              </h2>
              <p className="mb-4 text-sm text-brand-muted">
                deadzone reads your Solar Assistant inverter data over MQTT, your dish over local
                gRPC and the weather forecast, and answers &ldquo;how many hours do I have&rdquo;
                from measured load and state of charge instead of nameplate guesses.
              </p>
              <a
                href={DEADZONE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                <Github size={16} aria-hidden="true" />
                rafe-walker/deadzone
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
