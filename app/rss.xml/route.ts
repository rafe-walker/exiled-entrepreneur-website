import { getAllArticles, getArticle } from '@/lib/articles';
import {
  AUTHOR_NAME,
  CATEGORY_LABELS,
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';

/**
 * RSS 2.0 feed of published articles, newest first. Built once per deploy;
 * /feed.xml 301s here (next.config.ts). Drafts are excluded even when
 * NEXT_PUBLIC_SHOW_DRAFTS renders them on the site.
 */
export const dynamic = 'force-static';

const FEED_URL = `${SITE_URL}/rss.xml`;
const MAX_ITEMS = 50;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** CDATA cannot contain "]]>"; split it if an article ever does. */
function cdata(html: string): string {
  return `<![CDATA[${html.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

/** YYYY-MM-DD → RFC 822 at 12:00 UTC, matching the dates shown on the page. */
function rfc822(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toUTCString();
}

export async function GET() {
  const published = getAllArticles()
    .filter((a) => !a.draft)
    .slice(0, MAX_ITEMS);

  const items = await Promise.all(
    published.map(async (meta) => {
      const article = await getArticle(meta.slug);
      const url = `${SITE_URL}/articles/${meta.slug}`;
      const body = article?.html ?? `<p>${escapeXml(meta.description)}</p>`;
      const categories = [CATEGORY_LABELS[meta.category], ...meta.tags]
        .map((c) => `      <category>${escapeXml(c)}</category>`)
        .join('\n');
      return [
        '    <item>',
        `      <title>${escapeXml(meta.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${rfc822(meta.date)}</pubDate>`,
        `      <dc:creator>${escapeXml(AUTHOR_NAME)}</dc:creator>`,
        `      <description>${escapeXml(meta.description)}</description>`,
        `      <content:encoded>${cdata(body)}</content:encoded>`,
        categories,
        '    </item>',
      ].join('\n');
    }),
  );

  const lastBuildDate = published[0] ? rfc822(published[0].updated) : new Date().toUTCString();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"',
    '  xmlns:atom="http://www.w3.org/2005/Atom"',
    '  xmlns:content="http://purl.org/rss/1.0/modules/content/"',
    '  xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${escapeXml(SITE_NAME)}</title>`,
    `    <link>${SITE_URL}</link>`,
    `    <description>${escapeXml(SITE_DESCRIPTION)}</description>`,
    '    <language>en-us</language>',
    `    <managingEditor>${CONTACT_EMAIL} (${escapeXml(AUTHOR_NAME)})</managingEditor>`,
    `    <webMaster>${CONTACT_EMAIL} (${escapeXml(AUTHOR_NAME)})</webMaster>`,
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    '    <ttl>1440</ttl>',
    `    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
