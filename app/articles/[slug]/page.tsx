import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import TableOfContents from '@/components/TableOfContents';
import { getAllArticles, getArticle, getRelatedArticles } from '@/lib/articles';
import { formatDate } from '@/lib/format';
import {
  AUTHOR_NAME,
  CATEGORY_LABELS,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

/** Only slugs returned here are served; drafts 404 in production. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  const url = `${SITE_URL}/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: AUTHOR_NAME, url: `${SITE_URL}/about` }],
    alternates: { canonical: url },
    robots: article.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.description,
      siteName: SITE_NAME,
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [`${SITE_URL}/about`],
      section: CATEGORY_LABELS[article.category],
      tags: article.tags,
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/og-image.svg'],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const url = `${SITE_URL}/articles/${article.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated,
    articleSection: CATEGORY_LABELS[article.category],
    keywords: article.tags.join(', '),
    inLanguage: 'en-US',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: `${SITE_URL}/og-image.svg`,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: LEGAL_ENTITY,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.svg` },
    },
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-muted">
          <Link href="/articles" className="inline-flex items-center gap-1.5">
            <ArrowLeft size={14} aria-hidden="true" />
            All articles
          </Link>
          <span className="mx-2 text-brand-border">/</span>
          <Link href={`/articles/category/${article.category}`}>{CATEGORY_LABELS[article.category]}</Link>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
          <article className="min-w-0">
            <header className="mb-10 border-b border-brand-border pb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="category-badge !mb-0">{CATEGORY_LABELS[article.category]}</span>
                {article.draft && (
                  <span className="rounded-full border border-brand-amber/50 px-2.5 py-0.5 text-xs font-semibold text-brand-amber">
                    Draft — not indexed
                  </span>
                )}
              </div>
              <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
                {article.title}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-brand-muted">{article.description}</p>
              <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Published</dt>
                  <dd>
                    Published <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </dd>
                </div>
                {article.updated !== article.date && (
                  <div className="flex items-center gap-2">
                    <dt className="sr-only">Updated</dt>
                    <dd>
                      Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
                    </dd>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock size={14} aria-hidden="true" />
                  <dt className="sr-only">Reading time</dt>
                  <dd>{article.readingMinutes} min read</dd>
                </div>
              </dl>
            </header>

            {article.toc.length > 1 && (
              <div className="mb-10 lg:hidden">
                <TableOfContents entries={article.toc} />
              </div>
            )}

            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.html }} />

            <footer className="mt-12 border-t border-brand-border pt-8">
              {article.tags.length > 0 && (
                <ul className="mb-6 flex flex-wrap items-center gap-2 text-xs">
                  <li className="text-brand-dim">
                    <Tag size={14} aria-hidden="true" />
                    <span className="sr-only">Tags</span>
                  </li>
                  {article.tags.map((t) => (
                    <li key={t} className="rounded-full border border-brand-border px-3 py-1 font-mono text-brand-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mb-0 text-sm text-brand-muted">
                Spotted an error or have a number I marked as unverified?{' '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Re: ${article.title}`)}`}>
                  Email me
                </a>{' '}
                and I will fix it and note the update date above.
              </p>
            </footer>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {article.toc.length > 1 && <TableOfContents entries={article.toc} />}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-brand-border pt-12" aria-labelledby="related">
            <h2 id="related" className="mb-8 text-2xl font-bold text-brand-cream md:text-3xl">
              Related
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
