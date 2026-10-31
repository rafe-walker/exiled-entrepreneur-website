---
title: "How I sell a $10–$20 PDF online with Stripe and Vercel from the middle of nowhere: the RotorCards stack"
description: "How to sell a PDF online with Stripe and Vercel: Checkout session, webhook fulfillment, re-download links, a test-mode e2e run, and a Search Console blog loop."
date: "2026-11-03"
updated: "2026-11-03"
category: "income"
tags: ["rotorcards", "stripe", "vercel", "digital-products", "search-console", "one-product-store"]
draft: true
targetQuery: "sell pdf online stripe vercel"
---

To sell a PDF online with Stripe and Vercel you need exactly four moving parts: a static site with a buy button, a serverless function that creates a Stripe Checkout Session, a webhook handler that marks the order paid and issues a download link, and somewhere to keep the PDFs that is not a public URL. That is the whole stack behind RotorCards, my store for quick-reference guides for DJI drone pilots, and I run it from an off-grid parcel in Cochise County because nothing in it needs me to be online when a customer buys. Below is the architecture, the re-download flow, the end-to-end test I run in Stripe's test mode before every deploy, and the Search Console loop that decides what I write next.

Prices on the store are in the $10–$20 range. **[VERIFY: current product list and exact prices]**

## Why sell a PDF online with Stripe and Vercel (and GitHub)

- **Vercel** hosts the site and runs the functions. One `git push` to GitHub deploys. The Hobby tier is free but restricted to non-commercial use under Vercel's fair-use rules, so a store belongs on Pro, which is $20 per developer seat per month plus usage ([Vercel Hobby plan docs](https://vercel.com/docs/plans/hobby)). The included Pro usage is far above what a single-product PDF store consumes. **[VERIFY: which Vercel plan RotorCards is on]**
- **Stripe** handles cards, receipts, disputes, and tax collection if you turn Stripe Tax on. US domestic card pricing is 2.9% + 30¢ per successful charge, +1.5% for international cards, +1% if currency conversion is involved; Stripe Tax's no-code tier is 0.5% per transaction in jurisdictions where you are registered ([Stripe pricing](https://stripe.com/pricing)). On a $15 PDF, the card fee is about 74¢.
- **GitHub** is source control and the deploy trigger. It is also where the content lives: the guides are built from source, not uploaded by hand. **[VERIFY: whether PDFs are generated in CI or committed as binaries]**

No database server to babysit, no VPS to patch, no cron on a machine in my shed. When the inverters restart, the store does not.

## Architecture

```
Browser ──(1) GET /buy?sku=...──▶ Vercel function: create Checkout Session ──▶ Stripe Checkout (hosted)
                                                                              │
Stripe ──(2) POST /api/stripe/webhook (checkout.session.completed)──▶ Vercel function: fulfill(session_id)
                                                                              │
                                                             (3) record order, mint signed download URL
                                                                              │
Browser ◀──(4) redirect to /thanks?session_id=...  ◀── Stripe ────────────────┘
                                                                              │
Browser ──(5) GET /thanks ──▶ Vercel function: fulfill(session_id) again (idempotent) ──▶ render download link
```

Each number is a Stripe-recommended step from their fulfillment guide ([Stripe: Fulfill orders](https://docs.stripe.com/checkout/fulfillment)), and the guide is explicit about the one rule people skip: **webhooks are required**. You cannot rely on the customer landing on the thank-you page, because they can pay and then lose their connection before the redirect loads. The landing page is an optimization for immediacy; the webhook is the source of truth.

### 1. Create the Checkout Session

A function receives the SKU, looks up the Stripe Price ID, and creates a Checkout Session in `mode: payment` with a `success_url` that includes the `{CHECKOUT_SESSION_ID}` placeholder. Stripe swaps the real session ID into the URL on redirect. Collect the email (Checkout does this by default) because email is the key for re-downloads.

### 2. Webhook handler

Stripe POSTs `checkout.session.completed` to the endpoint. The handler verifies the `Stripe-Signature` header against the endpoint secret (`whsec_...`), rejects anything that fails with a 400, and calls `fulfill(session_id)` for `checkout.session.completed` and `checkout.session.async_payment_succeeded`. If you accept only cards, the second event will not fire, but handling it costs one line.

### 3. Fulfillment, idempotent

Stripe's guide lists what `fulfill` must do: accept a session ID, retrieve the session with `line_items` expanded, check `payment_status` is not `unpaid`, perform fulfillment once even if called several times concurrently, and record the result. Mine records the order keyed by session ID and mints a download token. **[VERIFY: where orders are recorded — Vercel KV/Postgres/Blob metadata/other — and how the download token is signed and expired]**

The PDFs themselves are never at a guessable public path. The download link resolves to a function that validates the token and streams the file. **[VERIFY: PDF storage location (Vercel Blob, private bucket, repo) and token lifetime]**

### 4–5. Landing page

`/thanks?session_id=cs_...` calls the same `fulfill` function, then renders the link. Because `fulfill` is idempotent, it does not matter whether the webhook or the page got there first. Stripe notes that when a webhook endpoint listens for `checkout.session.completed`, Checkout waits up to 10 seconds for your webhook to respond before redirecting, so the handler should return 200 fast and do nothing slow inline.

## The re-download flow

Customers lose emails. The re-download flow is a page where they enter the email they paid with; a function looks up paid sessions for that email and emails a fresh signed link. Two rules:

1. **Never confirm whether an email exists.** The response is always "if we have an order for that address, a link is on its way." Otherwise you have built an oracle for who bought what.
2. **Rate-limit it.** One request per address per few minutes.

Stripe keeps every Checkout Session with the customer's email on it, so even if your own order store were lost, Stripe is the durable record; check the current API reference for the list-sessions filters available on your API version before depending on that as the primary lookup. **[VERIFY: whether RotorCards re-downloads query Stripe directly or the local order store, and the email provider used]**

## The end-to-end test in Stripe test mode

Before any deploy that touches checkout, I run the same sequence in test mode. Stripe sandboxes are isolated: test keys (`sk_test_`, `pk_test_`) never move money, test transactions settle instantly, and test card state persists across tests, so use a different test card per independent scenario ([Stripe testing docs](https://docs.stripe.com/testing)).

1. **Local webhook.** `stripe listen --forward-to localhost:3000/api/stripe/webhook` prints a temporary `whsec_`; put it in the local env. The CLI forwards real test-mode events to the dev server.
2. **Happy path.** Buy with `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP. Assert: the CLI shows `checkout.session.completed` forwarded; the handler returns 200; one order record exists; the thank-you page renders a link; the link downloads the right PDF; a second hit of the thank-you page does not create a second order.
3. **Decline.** `4000 0000 0000 0002` returns `card_declined`. Assert: no order, no email, no webhook fulfillment.
4. **3DS challenge.** `4000 0000 0000 3220` forces an authentication step. Assert: the flow completes after the challenge and fulfillment fires once.
5. **Replay.** `stripe trigger checkout.session.completed` or re-send the event from the Dashboard. Assert: the handler accepts it, finds the order already fulfilled, and does nothing.
6. **Bad signature.** POST the same body with a garbage signature. Assert: 400, nothing recorded.
7. **Re-download.** Request a link for the test email; assert exactly one email with a working link, and that a non-existent email returns the same message.

Then switch the environment variables to live keys on Vercel and buy one copy of the cheapest product with a real card, then refund it from the Dashboard. The live test costs the Stripe fee on the refund and buys certainty.

**[VERIFY: whether this suite is automated (Playwright/other) or run by hand, and how often]**

## The blog loop: Search Console decides the topics

RotorCards has a blog, and its topics are not chosen by inspiration. They come from Google Search Console's Performance report, which gives clicks, impressions, click-through rate, and average position by query, page, country, device, and date ([Search Console Performance report](https://support.google.com/webmasters/answer/7576553)). The loop:

1. Export queries for the last 3 months with impressions above a floor and position between roughly 8 and 30. Those are questions Google already thinks the site is relevant for and is not yet ranking.
2. Group them by intent. "dji mini 4 pro max altitude" and "mini 4 pro altitude limit" are one article.
3. Write the article that answers the query in the first paragraph, with the query in the title, description, and one H2, and link the relevant guide once.
4. Wait a few weeks, pull the same report, and look at whether position moved and whether the page is now showing for queries you did not target. Those new queries are next month's list.

This is unglamorous and it compounds. The blog exists to be found for the questions pilots are already asking; the guide exists to be the thing they buy once they are there. **[VERIFY: number of blog posts, posting cadence, and whether Search Console export is manual or via the API]**

## What this costs to run

Fixed: Vercel plan, a domain, an email-sending service. Variable: Stripe's percentage. There is no server bill, no database bill at this scale, and nothing that needs my laptop open. I am not going to quote revenue or unit counts here; those are numbers I would have to pull from the Stripe Dashboard, and this site does not publish figures it cannot show. **[VERIFY: monthly fixed costs; whether any sales figures should be published at all]**

## What I would change

- Add Stripe Tax from day one if you will sell across state lines; retrofitting tax registration is worse than paying 0.5%.
- Put the download-token verifier and the webhook on separate functions so a slow PDF stream never delays a webhook response.
- Log every webhook event ID. When a customer says "I paid and got nothing," the event ID is how you find out in thirty seconds whether Stripe called you.

The point of this stack is not that it is clever. It is that it has no part that cares whether I am at a desk, in the utility shed, or offline for a day.

## Related

- [Laid off from tech while living rural: the first 90 days checklist](/articles/laid-off-big-tech-rural-first-90-days)
- [Rural internet in Cochise County, AZ for remote work (2026)](/articles/rural-internet-remote-work-cochise-county)
- [Off grid power for remote work: the budget worksheet](/articles/remote-work-off-grid-power-budget)
