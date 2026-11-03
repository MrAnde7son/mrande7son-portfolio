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
    note: 'Stealth',
    summary: 'Founder of a security company in stealth.',
  },
  {
    label: 'VP Growth @ Tenable',
    title: 'VP Growth',
    company: 'Tenable',
    period: '2025',
    start: '2025-07',
    end: '2025',
    summary:
      'Growth for the Tenable One exposure management platform: pricing, packaging and adoption.',
  },
  {
    label: 'VP Engineering @ Tenable',
    title: 'VP Engineering',
    company: 'Tenable',
    period: '2022 — 2025',
    start: '2022-02',
    end: '2025-07',
    summary:
      'Led product and engineering for Tenable One. Grew the team from the acquired Cymptom team to 70+ engineers, product managers and data scientists.',
    highlights: [
      'Integrated Cymptom’s technology into Tenable One and Attack Path Analysis',
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
      'Co-founded Cymptom, an attack path analysis and exposure validation platform. Acquired by Tenable in 2022.',
  },
  {
    label: 'Instructor @ John Bryce',
    title: 'Cybersecurity Instructor',
    company: 'John Bryce',
    period: '2017 — 2020',
    start: '2017-08',
    end: '2020-01',
    summary:
      'Taught SOC analyst courses.',
  },
  {
    label: 'Red Team Specialist @ CyberArk',
    title: 'Red Team Specialist',
    company: 'CyberArk',
    period: '2015 — 2017',
    start: '2015-10',
    end: '2017-07',
    summary:
      'Red team engagements against enterprise networks.',
  },
  {
    label: 'Security Researcher @ IDF',
    title: 'Security Researcher',
    company: 'Israel Defense Forces',
    period: '2011 — 2015',
    start: '2011-12',
    end: '2015-09',
    summary:
      'Founded a cybersecurity department in a classified unit.',
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
