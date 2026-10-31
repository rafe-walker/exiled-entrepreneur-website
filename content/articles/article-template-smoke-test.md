---
title: "Article template: every markdown feature this site renders"
description: "A draft placeholder that exercises headings, tables, code blocks, links, lists and callouts so the article renderer can be checked before real articles land."
date: "2026-10-31"
updated: "2026-10-31"
category: "off-grid-power"
tags: ["template", "smoke-test"]
draft: true
targetQuery: "placeholder, not meant to rank"
---

This is a draft placeholder. It exists so the build has one article to render and so every markdown feature the site supports can be eyeballed in one place. It is excluded from the index, the sitemap and production builds because `draft: true` is set. Delete it once real articles exist.

The rule for real articles: open with the answer, not a story. The first paragraph should resolve the query in the frontmatter's `targetQuery`.

## Headings and the table of contents

Every H2 in the body becomes an entry in the table of contents on the reading page. H3s are allowed for sub-points but do not appear in the TOC. There is no H1 in the body; the title from frontmatter is the H1.

### An H3 under the first section

Short paragraphs. One idea per paragraph. No HTML in the body.

## Numbers you have to supply

Any figure the author has not confirmed is written inline as a marker so it cannot ship by accident:

The array was built in 2022 and feeds two EG4 3000EHV-48 inverters in parallel. Total panel wattage: **[VERIFY: total array wattage]**. Usable battery capacity: **[VERIFY: total kWh of LiFePO4]**.

## Tables

Tables use GitHub-flavored markdown and get the site's table styling.

| Component | Make / model | Notes |
| --- | --- | --- |
| Inverter | EG4 3000EHV-48 (x2, parallel) | 120 V only |
| Panel | Eaton BR | Main distribution |
| Batteries | Eco-Worthy server-rack LiFePO4 | Plus one of another brand |
| Monitoring | Solar Assistant | RS232/RS485 on the older 3000EHV-48 units |

## Code blocks

Fenced code blocks render with a monospace font and horizontal scroll. Language hints are kept on the element for later syntax highlighting but are not styled yet.

```bash
# Read the inverter over RS485 with a USB adapter
ls /dev/ttyUSB*
stty -F /dev/ttyUSB0 2400 cs8 -cstopb -parenb
```

```ts
export function wattHours(volts: number, ampHours: number): number {
  return volts * ampHours;
}
```

Inline code looks like `NEXT_PUBLIC_SHOW_DRAFTS=1`.

## Lists

Unordered:

- Ground-mount array, built 2022
- Two inverters in parallel
- Equipment in a sub-200 sq ft utility shed

Ordered:

1. Pull the accessory-structure permit.
2. Set the posts.
3. Mount the rails, then the panels.

Task list:

- [x] Frontmatter parsed
- [x] Table of contents generated from H2s
- [ ] Real article content

## Links

Internal links use the site-relative form: [the build page](/the-build) and [another article](/articles/article-template-smoke-test). External links open in a new tab and need a source in the text, for example the [EG4 product page](https://eg4electronics.com/) or the [Cochise County building division](https://www.cochise.az.gov/).

## Blockquotes and emphasis

> Every claim on the site must be true and verifiable. If you do not have the number, write the marker.

*Italic* for emphasis, **bold** for the thing you must not miss, and ~~strikethrough~~ for corrections kept in place.

## Related

- [The build](/the-build)
- [Projects](/projects)
