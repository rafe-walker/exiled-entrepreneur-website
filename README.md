# theexiledentrepreneur.com

Next.js 16 (App Router, Turbopack) + Tailwind 4 + framer-motion + lucide. Deployed on Vercel.

Positioning: **technical income from a dead zone** — remote-work power and connectivity, building off-grid, and income that does not depend on location. Every claim on the site must be true and verifiable; numbers the author has not confirmed are written as `[VERIFY: ...]`.

## Develop

```bash
npm install
npm run dev     # drafts render in dev
npm run build   # drafts excluded unless NEXT_PUBLIC_SHOW_DRAFTS=1
npm run lint
```

## Routes

| Route | Source |
| --- | --- |
| `/` | `app/page.tsx` |
| `/articles`, `/articles/[slug]` | `app/articles/**`, content from `content/articles/*.md` |
| `/the-build` | `app/the-build/page.tsx` |
| `/projects` | `app/projects/page.tsx` (data in `lib/site.ts`) |
| `/about`, `/contact`, `/privacy`, `/terms` | `app/<route>/page.tsx` |
| `/sitemap.xml` | `app/sitemap.ts` (static pages + non-draft articles) |

Retired routes (`/episodes`, `/resources`, `/media-kit`, `/blog/*`) 301 to their nearest replacement in `next.config.ts`.

## Articles

Drop a markdown file in `content/articles/<slug>.md`. The file name is the URL slug (lowercase kebab-case). Frontmatter:

```yaml
---
title: "..."
description: "150–160 char meta description"
date: "2026-11-03"
updated: "2026-11-03"
category: "off-grid-power" | "connectivity" | "building" | "land" | "income" | "drones" | "layoff"
tags: ["eg4", "solar-assistant"]
draft: true            # drafts: dev only, or NEXT_PUBLIC_SHOW_DRAFTS=1
targetQuery: "the Google query this article answers"
---
```

Body rules: H2/H3 only (the title is the H1), no HTML, internal links as `/articles/<slug>`, external facts with a source link, unconfirmed numbers as `**[VERIFY: what is needed]**`. H2s become the table of contents. "Related" pulls from the same category.

The loader (`lib/articles.ts`) validates frontmatter at build time and fails the build on a bad file. `content/articles/article-template-smoke-test.md` is a draft that exercises every supported markdown feature; delete it once real articles exist.
