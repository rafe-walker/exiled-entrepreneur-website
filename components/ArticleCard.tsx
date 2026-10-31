import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ArticleMeta } from '@/lib/articles';
import { CATEGORY_LABELS } from '@/lib/site';
import { formatDate } from '@/lib/format';

interface ArticleCardProps {
  article: ArticleMeta;
  headingLevel?: 'h2' | 'h3';
}

export default function ArticleCard({ article, headingLevel = 'h3' }: ArticleCardProps) {
  const Heading = headingLevel;
  return (
    <article className="card-dark group flex h-full flex-col">
      <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
        <span className="category-badge !mb-0">{CATEGORY_LABELS[article.category]}</span>
        {article.draft && (
          <span className="rounded-full border border-brand-amber/50 px-2 py-0.5 text-[10px] text-brand-amber">
            Draft
          </span>
        )}
      </div>
      <Heading className="mb-2 text-xl font-bold leading-snug text-brand-cream group-hover:text-brand-gold-light transition-colors">
        <Link href={`/articles/${article.slug}`} className="text-inherit hover:text-inherit">
          {article.title}
        </Link>
      </Heading>
      <p className="mb-4 flex-grow text-sm leading-relaxed text-brand-muted">{article.description}</p>
      <div className="flex items-center justify-between border-t border-brand-border/50 pt-4 text-xs text-brand-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span className="inline-flex items-center gap-1.5 font-semibold text-brand-gold">
          {article.readingMinutes} min read
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
