import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 md:pt-44 md:pb-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-card/40 via-brand-dark to-brand-dark" />
        <div className="absolute inset-0 vignette film-grain pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal delay={0.05}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            <MapPin size={14} aria-hidden="true" />
            Off-grid, Cochise County, Arizona
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-brand-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Technical income <span className="text-gradient">from a dead zone.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.25} className="mb-10 max-w-2xl space-y-4 text-lg leading-relaxed text-brand-muted sm:text-xl">
          <p className="mb-0">
            I spent about ten years as a support engineer at Ring, from startup through the Amazon
            years. In 2026 I was laid off. I live off-grid on about five acres in southern Arizona,
            where I&apos;m building a container home under my own owner-builder permit.
          </p>
          <p className="mb-0">
            This site is the working record of how to make a technical living from land with no
            utility connection: the power and connectivity it takes to work remotely, the build
            itself, and the small businesses that don&apos;t care where you live.
          </p>
        </Reveal>

        <Reveal delay={0.35} className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/articles"
            className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wide text-brand-dark hover:text-brand-dark"
          >
            Read the articles
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/the-build"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wide"
          >
            See the build
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
