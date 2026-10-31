import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-brand-dark">
      <div className="mx-auto max-w-2xl px-4 pt-32 pb-24 text-center sm:px-6">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-gold">404</p>
        <h1 className="mb-4 text-4xl font-black text-brand-cream md:text-5xl">Nothing out here</h1>
        <p className="mb-8 text-brand-muted">
          That page does not exist or has moved. The old episode, resource and blog pages were retired
          when the site changed direction.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-glow px-6 py-3 text-sm font-bold text-brand-dark hover:text-brand-dark">
            Home
          </Link>
          <Link href="/articles" className="btn-secondary px-6 py-3 text-sm font-bold">
            Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
