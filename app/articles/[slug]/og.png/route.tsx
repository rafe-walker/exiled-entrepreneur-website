import { getAllArticles, getArticle } from '@/lib/articles';
import { renderOgCard } from '@/lib/og';
import { CATEGORY_LABELS } from '@/lib/site';

/**
 * Per-article Open Graph card with the title overlaid. Pre-rendered for
 * every publishable slug; anything else is a 404 (drafts in production).
 */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return new Response('Not found', { status: 404 });
  return renderOgCard({
    title: article.title,
    eyebrow: CATEGORY_LABELS[article.category],
    footer: `${article.readingMinutes} min read · ${article.date}`,
  });
}
