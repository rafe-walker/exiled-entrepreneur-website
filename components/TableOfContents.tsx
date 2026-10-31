import type { TocEntry } from '@/lib/articles';

export default function TableOfContents({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <nav aria-labelledby="toc-heading" className="toc rounded-xl border border-brand-border bg-brand-card/40 p-5">
      <p id="toc-heading" className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">
        On this page
      </p>
      <ol className="space-y-0.5">
        {entries.map((e) => (
          <li key={e.id}>
            <a href={`#${e.id}`}>{e.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
