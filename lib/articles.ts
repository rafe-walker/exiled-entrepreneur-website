import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import { toString as hastToString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';
import type { Root as HastRoot, Element as HastElement } from 'hast';
import { CATEGORIES, isCategory, type Category } from './site';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

/**
 * Drafts render in development, or anywhere NEXT_PUBLIC_SHOW_DRAFTS=1 is set.
 * In a production build without that flag they are excluded from the index,
 * the sitemap and static params (and 404 because dynamicParams is false).
 */
export const SHOW_DRAFTS =
  process.env.NEXT_PUBLIC_SHOW_DRAFTS === '1' || process.env.NODE_ENV === 'development';

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD
  category: Category;
  tags: string[];
  draft: boolean;
  targetQuery?: string;
  readingMinutes: number;
}

export interface TocEntry {
  id: string;
  text: string;
}

export interface Article extends ArticleMeta {
  html: string;
  toc: TocEntry[];
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function fail(slug: string, message: string): never {
  throw new Error(`content/articles/${slug}.md: ${message}`);
}

function readingMinutes(body: string): number {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

function parseFrontmatter(slug: string, data: Record<string, unknown>, body: string): ArticleMeta {
  if (!SLUG_RE.test(slug)) fail(slug, 'file name must be a lowercase kebab-case slug');
  const title = typeof data.title === 'string' ? data.title.trim() : '';
  if (!title) fail(slug, 'frontmatter "title" is required');
  const description = typeof data.description === 'string' ? data.description.trim() : '';
  if (!description) fail(slug, 'frontmatter "description" is required');

  const toDate = (v: unknown): string | null => {
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    if (typeof v === 'string' && DATE_RE.test(v)) return v;
    return null;
  };
  const date = toDate(data.date);
  if (!date) fail(slug, 'frontmatter "date" must be YYYY-MM-DD');
  const updated = toDate(data.updated) ?? date;

  const category = typeof data.category === 'string' ? data.category : '';
  if (!isCategory(category)) {
    fail(slug, `frontmatter "category" must be one of: ${CATEGORIES.join(', ')}`);
  }

  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === 'string').map((t) => t.trim())
    : [];

  const draft = data.draft === true;
  const targetQuery = typeof data.targetQuery === 'string' ? data.targetQuery.trim() : undefined;

  return {
    slug,
    title,
    description,
    date,
    updated,
    category,
    tags,
    draft,
    targetQuery,
    readingMinutes: readingMinutes(body),
  };
}

interface RawArticle {
  meta: ArticleMeta;
  body: string;
}

let cache: RawArticle[] | null = null;

function loadAll(): RawArticle[] {
  if (cache && process.env.NODE_ENV === 'production') return cache;
  if (!fs.existsSync(ARTICLES_DIR)) {
    cache = [];
    return cache;
  }
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  const all = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    return { meta: parseFrontmatter(slug, data, content), body: content };
  });
  all.sort((a, b) => (a.meta.date < b.meta.date ? 1 : a.meta.date > b.meta.date ? -1 : 0));
  cache = all;
  return all;
}

function visible(a: RawArticle): boolean {
  return SHOW_DRAFTS || !a.meta.draft;
}

/** All publishable articles, newest first. Drafts only when SHOW_DRAFTS. */
export function getAllArticles(): ArticleMeta[] {
  return loadAll()
    .filter(visible)
    .map((a) => a.meta);
}

export function getArticlesByCategory(category: Category): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getLatestArticles(limit = 3): ArticleMeta[] {
  return getAllArticles().slice(0, limit);
}

export function getRelatedArticles(article: ArticleMeta, limit = 3): ArticleMeta[] {
  const sameCategory = getAllArticles().filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const sharedTag = getAllArticles().filter(
    (a) =>
      a.slug !== article.slug &&
      a.category !== article.category &&
      a.tags.some((t) => article.tags.includes(t)),
  );
  return [...sameCategory, ...sharedTag].slice(0, limit);
}

/** Categories that currently have at least one visible article. */
export function getActiveCategories(): Category[] {
  const present = new Set(getAllArticles().map((a) => a.category));
  return CATEGORIES.filter((c) => present.has(c));
}

function rehypeCollectToc(toc: TocEntry[]) {
  return () => (tree: HastRoot) => {
    visit(tree, 'element', (node: HastElement) => {
      if (node.tagName === 'h2' && typeof node.properties?.id === 'string') {
        toc.push({ id: node.properties.id, text: hastToString(node) });
      }
    });
  };
}

function rehypeExternalLinks() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: HastElement) => {
      if (node.tagName !== 'a' || typeof node.properties?.href !== 'string') return;
      const href = node.properties.href;
      if (/^https?:\/\//i.test(href) && !href.startsWith('https://theexiledentrepreneur.com')) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }
    });
  };
}

async function render(body: string): Promise<{ html: string; toc: TocEntry[] }> {
  const toc: TocEntry[] = [];
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeCollectToc(toc))
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: { className: ['heading-anchor'] },
    })
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(body);
  return { html: String(file), toc };
}

export async function getArticle(slug: string): Promise<Article | null> {
  const raw = loadAll().find((a) => a.meta.slug === slug);
  if (!raw || !visible(raw)) return null;
  const { html, toc } = await render(raw.body);
  return { ...raw.meta, html, toc };
}
