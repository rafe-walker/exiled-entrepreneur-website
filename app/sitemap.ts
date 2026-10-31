import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().filter((a) => !a.draft);
  const newestArticle = articles[0]?.updated;
  const articlesLastModified = newestArticle ? new Date(newestArticle) : new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: articlesLastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/articles`, lastModified: articlesLastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/the-build`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];

  const activeCategories = Array.from(new Set(articles.map((a) => a.category)));
  const categoryPages: MetadataRoute.Sitemap = activeCategories.map((c) => ({
    url: `${SITE_URL}/articles/category/${c}`,
    lastModified: articlesLastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
