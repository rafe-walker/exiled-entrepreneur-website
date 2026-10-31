import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ArticleList from '@/components/ArticleList';
import { getActiveCategories, getAllArticles } from '@/lib/articles';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles on off-grid power, rural connectivity, owner-builder container construction, land data, drone work and location-independent income, written from a working build in Cochise County, Arizona.',
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    title: 'Articles | The Exiled Entrepreneur',
    description:
      'Off-grid power, rural connectivity, owner-builder construction, land data, drone work and location-independent income.',
    url: `${SITE_URL}/articles`,
    type: 'website',
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getActiveCategories();

  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="Articles"
        title="Working notes from a dead zone"
        lede={
          <p className="mb-0">
            Each article is written to answer one question someone types into Google. Facts about my
            own setup are things I have actually done; numbers I have not confirmed are marked rather
            than guessed.
          </p>
        }
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ArticleList articles={articles} categories={categories} active={null} />
      </section>
    </div>
  );
}
