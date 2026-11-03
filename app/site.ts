/**
 * Single source of truth for identity, links and headline copy.
 * Everything that renders a name, role or social URL reads from here so the
 * site, its metadata, its feeds and its structured data can never drift apart.
 */

export const person = {
  name: 'Itamar Mizrahi',
  /** Job title on its own — used in structured data and the OG card footer. */
  role: 'Founder',
  /** What I'm doing now, for the hero eyebrow and footer. */
  status: 'Founder · Stealth',
  tagline: 'Founder. Previously Cymptom, acquired by Tenable',
  summary:
    'In security since 2011. Co-founded Cymptom in 2019; acquired by Tenable in 2022. VP Engineering, then VP Growth, for Tenable One until 2025. Now founder of a company in stealth.',
  location: 'Israel',
  email: 'mizrahi.itamar@gmail.com',
} as const

export const social = {
  linkedin: 'https://www.linkedin.com/in/itamarmizrahi/',
  github: 'https://github.com/MrAnde7son',
  twitter: 'https://x.com/MrAnde7son',
  twitterHandle: '@MrAnde7son',
} as const

/** Facts surfaced in the hero. Each one is backed by the CV below it. */
export const highlights = [
  {
    value: '1',
    label: 'Company founded and sold',
    detail: 'Cymptom → Tenable, 2022',
  },
  {
    value: '70+',
    label: 'People led at Tenable',
    detail: 'Engineering, product, data science',
  },
  {
    value: '15+',
    label: 'Years in security',
    detail: 'Since 2011',
  },
] as const
