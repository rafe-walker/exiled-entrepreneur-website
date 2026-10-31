import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  /** Narrow (prose) or wide (grid) content below. */
  width?: 'narrow' | 'wide';
}

export default function PageHeader({ eyebrow, title, lede, width = 'wide' }: PageHeaderProps) {
  const max = width === 'narrow' ? 'max-w-3xl' : 'max-w-7xl';
  return (
    <header className={`mx-auto ${max} px-4 pt-32 pb-12 sm:px-6 lg:px-8 md:pt-40`}>
      <Reveal>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">{eyebrow}</p>
        )}
        <h1 className="mb-4 text-4xl font-black tracking-tight text-brand-cream md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mb-6 h-1 w-20 rounded bg-gradient-to-r from-brand-gold to-brand-amber" />
        {lede && <div className="max-w-2xl text-lg leading-relaxed text-brand-muted">{lede}</div>}
      </Reveal>
    </header>
  );
}
