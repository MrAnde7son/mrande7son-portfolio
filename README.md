# Itamar Mizrahi — Portfolio & Blog

Personal site and writing on exposure management, CTEM, AI security and building
security products. Live at [mrande7son.com](https://www.mrande7son.com).

## Stack

| Concern    | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 14 (App Router, React Server Components)     |
| Styling    | Tailwind CSS v4 + a CSS custom-property design system |
| Content    | MDX via `next-mdx-remote`, `sugar-high` highlighting |
| Fonts      | Geist Sans & Geist Mono                             |
| Analytics  | Vercel Web Analytics & Speed Insights               |
| Hosting    | Vercel                                              |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm test           # typecheck + node:test unit tests
npm run typecheck  # types only
```

## Architecture notes

### One source of truth per concern

| File                       | Owns                                               |
| -------------------------- | -------------------------------------------------- |
| `app/site.ts`              | Name, role, tagline, social URLs, hero highlights   |
| `lib/career.ts`            | Roles, education, expertise — used by the home timeline *and* the about page |
| `lib/projects.ts`          | Open-source projects                                |
| `app/global.css`           | Design tokens, semantic classes, prose styles       |
| `app/sitemap.ts`           | `baseUrl`, exported and reused by RSS/robots/metadata |

Adding a role or changing a job title means editing one file, not three.

### Theming

Dark mode is driven by a `data-theme` attribute on `<html>`:

1. A small inline script in `app/layout.tsx` runs **before first paint**,
   resolving `localStorage` → `prefers-color-scheme` and setting the attribute.
   That is what prevents a flash of the wrong theme.
2. `app/global.css` redefines the token set under `[data-theme='dark']`.
3. `@custom-variant dark (&:where([data-theme='dark'], …))` re-points Tailwind's
   `dark:` variant at the same attribute, so utilities and the in-page toggle
   can never disagree. (Tailwind v4's default is `prefers-color-scheme`, which
   ignores an explicit user choice.)

Prefer the semantic helpers — `.surface`, `.muted`, `.chip`, `.btn` — over
hard-coded `neutral-*` / `dark:neutral-*` pairs when adding UI. They read from
the tokens, so both themes stay correct by construction.

### Writing a post

Create `app/blog/posts/<slug>.mdx`:

```mdx
---
title: 'Post title'
description: 'One or two sentences — this is the search + social preview.'
date: '2025-01-30'
tags: Exposure Management, AI Security
---

Opening paragraph…
```

Everything else is derived automatically: routing, the blog index, RSS, the
sitemap, JSON-LD, reading time, related posts and an Open Graph card rendered
by `app/og/route.tsx`. A leading `# Title` in the body that duplicates the
frontmatter title is stripped, so posts never show their headline twice.

### Icons & Open Graph

Icons are generated at request time by `app/icon.tsx` and `app/apple-icon.tsx`
— there are no static favicon files to keep in sync. Social cards come from
`/og?title=…&subtitle=…`; build the URL with the `ogImageUrl()` helper in
`app/og-url.ts`.

## Testing

Unit tests are plain `node:test` files compiled by `tsc` first, covering
frontmatter parsing, date formatting, reading time, related-post selection,
search ranking and server rendering of the card components.

## Possible next steps

- Upgrade to Next.js 15/16 (needs the async `params` migration in
  `app/blog/[slug]/page.tsx`).
- Add a Google Search Console verification token to `app/layout.tsx` metadata.
- Set `RESEND_API_KEY` in the Vercel project so `/api/subscribe` can deliver
  contact messages.

## License

© 2026 Itamar Mizrahi. All rights reserved.
