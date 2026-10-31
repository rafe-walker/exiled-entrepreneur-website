import Link from 'next/link';
import type { ArticleMeta } from '@/lib/articles';
import { CATEGORY_LABELS, type Category } from '@/lib/site';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: ArticleMeta[];
  /** Categories that have at least one visible article. */
  categories: Category[];
  /** The category this page is filtered to, or null for all. */
  active: Category | null;
}

function pillClass(selected: boolean) {
  return `inline-block rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
    selected
      ? 'border-brand-gold bg-brand-gold text-brand-dark hover:text-brand-dark'
      : 'border-brand-border text-brand-muted hover:border-brand-gold/60 hover:text-brand-gold'
  }`;
}

/**
 * Server-rendered article grid with category filter links. Filtering is by
 * route (/articles, /articles/category/<slug>) so every view is static HTML.
 */
export default function ArticleList({ articles, categories, active }: ArticleListProps) {
  return (
    <>
      <nav aria-label="Filter by category" className="mb-10 flex flex-wrap gap-2">
        <Link href="/articles" className={pillClass(active === null)} aria-current={active === null ? 'page' : undefined}>
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/articles/category/${c}`}
            className={pillClass(active === c)}
            aria-current={active === c ? 'page' : undefined}
          >
            {CATEGORY_LABELS[c]}
          </Link>
        ))}
      </nav>

      {articles.length === 0 ? (
        <div className="card-dark text-brand-muted">
          <p className="mb-0">
            {active
              ? `Nothing in ${CATEGORY_LABELS[active]} yet.`
              : 'Nothing published yet. Articles are being written and reviewed; the first batch covers the power system, connectivity and the permit process.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} headingLevel="h2" />
          ))}
        </div>
      )}
    </>
  );
}
