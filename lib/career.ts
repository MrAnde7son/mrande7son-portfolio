/**
 * Career and education history.
 *
 * The home page timeline and the about page both read from here, so the two
 * can no longer drift apart the way duplicated copies did.
 */

export interface Role {
  /** Compact label used by the timeline, e.g. "VP Engineering @ Tenable". */
  label: string
  title: string
  /** Omitted while a company is unannounced. */
  company?: string
  /** Human-readable range shown to the reader. */
  period: string
  /** Machine-readable range for <time dateTime>, ISO 8601. */
  start: string
  end?: string
  summary: string
  highlights?: string[]
  note?: string
}

export const roles: Role[] = [
  {
    label: 'Founder — stealth',
    title: 'Founder',
    period: '2025 — Present',
    start: '2025',
    note: 'Building something new',
    summary:
      'Back to zero. Building a new security company, and not talking about it publicly yet.',
  },
  {
    label: 'VP Product Growth @ Tenable',
    title: 'VP Product Growth',
    company: 'Tenable',
    period: '2025',
    start: '2025-07',
    end: '2025',
    summary:
      'Moved from engineering to growth for the exposure management platform — pricing, packaging and adoption rather than roadmap and delivery. A short last chapter before leaving to start my own thing.',
  },
  {
    label: 'VP Engineering @ Tenable',
    title: 'VP Engineering',
    company: 'Tenable',
    period: '2022 — 2025',
    start: '2022-02',
    end: '2025-07',
    summary:
      'Ran product and engineering for Tenable One. Took the team from the handful of us who came over with the acquisition to more than 70 engineers, product managers and data scientists.',
    highlights: [
      'Grew the organisation past 70 people across three disciplines',
      'Rebuilt Cymptom’s technology into Tenable One and Attack Path Analysis',
      'Shipped exposure analytics that graph attack paths across hybrid estates',
    ],
  },
  {
    label: 'Co-founder & CEO @ Cymptom',
    title: 'Co-founder & CEO',
    company: 'Cymptom',
    period: '2019 — 2022',
    start: '2019-03',
    end: '2022-02',
    note: 'Acquired by Tenable',
    summary:
      'Started Cymptom in 2019 to answer one question: which of your exposures can an attacker actually reach? Wrote the first code, raised the money, hired the team, sold to Tenable in 2022.',
    highlights: [
      'First line of code to acquisition in under three years',
      'Raised the rounds, hired the founding team, closed the first enterprise deals',
      'Built the case for exposure validation before the category had a name',
    ],
  },
  {
    label: 'Instructor @ John Bryce',
    title: 'Cybersecurity Instructor',
    company: 'John Bryce',
    period: '2017 — 2020',
    start: '2017-08',
    end: '2020-01',
    summary:
      'Taught SOC analysts on the side for three years. Nothing exposes the gaps in your own understanding like a room full of people asking why.',
  },
  {
    label: 'Red Team Specialist @ CyberArk',
    title: 'Red Team Specialist',
    company: 'CyberArk',
    period: '2015 — 2017',
    start: '2015-10',
    end: '2017-07',
    summary:
      'Broke into Fortune 500 networks for a living. Domain admin was usually a few hops away, and almost never through the vulnerability anyone was tracking.',
  },
  {
    label: 'Security Researcher @ IDF',
    title: 'Security Researcher',
    company: 'Israel Defense Forces',
    period: '2011 — 2015',
    start: '2011-12',
    end: '2015-09',
    summary:
      'Where I started, in 2011. Founded a cybersecurity department inside a classified unit and built its research capability from nothing.',
  },
]

export interface Education {
  degree: string
  institution: string
  period: string
}

export const education: Education[] = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'The College of Management — Academic Studies',
    period: '2015 — 2018',
  },
  {
    degree: 'Robotics Technology',
    institution: 'ORT Colleges',
    period: '2009 — 2011',
  },
]

export const expertise = [
  {
    heading: 'Security',
    items: [
      'Exposure management and CTEM programs',
      'Attack path analysis and validation',
      'Active Directory security and red teaming',
      'Cloud security and DevSecOps',
      'Threat intelligence and detection engineering',
      'Privileged access management',
    ],
  },
  {
    heading: 'Building',
    items: [
      'Python, TypeScript, Go',
      'AWS, Azure, GCP',
      'Docker, Kubernetes, CI/CD',
      'Graph data modelling (Neo4j)',
      'Product growth and analytics',
      'Hiring and running engineering teams',
    ],
  },
]
