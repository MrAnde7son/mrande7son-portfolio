/**
 * Single source of truth for identity, links and headline copy.
 * Everything that renders a name, role or social URL reads from here so the
 * site, its metadata, its feeds and its structured data can never drift apart.
 */

export const person = {
  name: 'Itamar Mizrahi',
  role: 'VP Product Growth @ Tenable',
  tagline: 'Cybersecurity entrepreneur · Exposure management',
  summary:
    'I build security products that turn overwhelming exposure data into decisions teams can act on. I co-founded Cymptom and led it to acquisition by Tenable, where its attack path technology now sits at the core of Tenable One.',
  location: 'Israel',
  email: 'mizrahi.itamar@gmail.com',
} as const

export const social = {
  linkedin: 'https://www.linkedin.com/in/itamarmizrahi/',
  github: 'https://github.com/MrAnde7son',
  twitter: 'https://x.com/MrAnde7son',
  twitterHandle: '@MrAnde7son',
} as const

/** Facts surfaced in the hero. Each one is verifiable from the CV below it. */
export const highlights = [
  { value: '1', label: 'Startup founded and sold', detail: 'Cymptom → Tenable' },
  { value: '60+', label: 'Engineers, PMs and data scientists led', detail: 'Tenable One' },
  { value: '10+', label: 'Years in offensive & exposure security', detail: 'IDF → CyberArk → Tenable' },
] as const
