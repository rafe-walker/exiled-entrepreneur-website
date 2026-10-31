import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ArticleList from '@/components/ArticleList';
import { getActiveCategories, getArticlesByCategory } from '@/lib/articles';
import { CATEGORIES, CATEGORY_LABELS, SITE_URL, isCategory } from '@/lib/site';

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

const CATEGORY_BLURBS: Record<(typeof CATEGORIES)[number], string> = {
  'off-grid-power':
    'Solar, LiFePO4 storage, parallel inverters, monitoring and the loads that matter when the grid is not an option.',
  connectivity: 'Getting and keeping a usable internet connection on rural land, measured rather than hoped for.',
  building: 'The owner-built container home: permits, foundations, insulation, water, septic, propane and cooling.',
  land: 'Rural parcels, county records, zoning and the data behind buying and using land in Arizona.',
  income: 'One-product digital stores, services and software that earn from anywhere.',
  drones: 'Part 107, drone services work and the reference material that comes out of it.',
  layoff: 'What a big-tech layoff looks like from the inside and what to do with the time after.',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const label = CATEGORY_LABELS[category];
  const count = getArticlesByCategory(category).filter((a) => !a.draft).length;
  const url = `${SITE_URL}/articles/category/${category}`;
  return {
    title: `${label} articles`,
    description: CATEGORY_BLURBS[category],
    alternates: { canonical: url },
    // An empty category page has nothing for a search engine to index yet.
    robots: count === 0 ? { index: false, follow: true } : undefined,
    openGraph: { title: `${label} | The Exiled Entrepreneur`, description: CATEGORY_BLURBS[category], url, type: 'website' },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const articles = getArticlesByCategory(category);
  const categories = getActiveCategories();

  return (
    <div className="min-h-screen bg-brand-dark">
      <PageHeader
        eyebrow="Articles"
        title={CATEGORY_LABELS[category]}
        lede={<p className="mb-0">{CATEGORY_BLURBS[category]}</p>}
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ArticleList articles={articles} categories={categories} active={category} />
      </section>
    </div>
  );
}
