import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLatestArticles } from '@/lib/articles';
import ArticleCard from './ArticleCard';
import Reveal from './Reveal';

export default function ArticlesPreview() {
  const articles = getLatestArticles(3);

  return (
    <section className="bg-brand-dark py-20" aria-labelledby="latest-articles">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="latest-articles" className="mb-2 text-3xl font-bold text-brand-cream md:text-4xl">
              Latest articles
            </h2>
            <p className="mb-0 text-brand-muted">
              Working notes, written to answer one question each.
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
          >
            All articles <ArrowRight size={16} />
          </Link>
        </Reveal>

        {articles.length === 0 ? (
          <Reveal>
            <div className="card-dark text-brand-muted">
              <p className="mb-0">
                Nothing published yet. The first articles cover the power system, the connectivity
                setup and the permit process for the build. Until then, see{' '}
                <Link href="/the-build">the build</Link> and <Link href="/projects">projects</Link>.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
