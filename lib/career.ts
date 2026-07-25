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
  company: string
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
    label: 'VP Product Growth @ Tenable',
    title: 'VP Product Growth',
    company: 'Tenable',
    period: '2025 — Present',
    start: '2025-07',
    summary:
      'Leading product growth strategy and execution for Tenable’s exposure management platform, connecting product decisions to market expansion and customer adoption.',
    highlights: [
      'Own the growth motion for a platform used by enterprise security teams worldwide',
      'Translate exposure management research into product bets the market can absorb',
    ],
  },
  {
    label: 'VP Engineering @ Tenable',
    title: 'VP Engineering',
    company: 'Tenable',
    period: '2022 — 2025',
    start: '2022-02',
    end: '2025-07',
    summary:
      'Led product and engineering for Tenable One, Tenable’s exposure management platform, and scaled a global organisation of 60+ across engineering, product and data science.',
    highlights: [
      'Integrated Cymptom’s technology into Tenable One and Attack Path Analysis',
      'Grew a distributed team of 60+ engineers, product managers and data scientists',
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
      'Built Cymptom from a whiteboard idea to an exposure validation platform that let organisations eliminate attack paths before adversaries could use them — through to acquisition by Tenable.',
    highlights: [
      'Took the company from first line of code to acquisition',
      'Raised capital, hired the founding team and landed the first enterprise customers',
      'Defined an exposure validation category built on continuous attack path analysis',
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
      'Trained SOC analysts and security professionals, turning field experience into curriculum for people entering the industry.',
  },
  {
    label: 'Red Team Specialist @ CyberArk',
    title: 'Red Team Specialist',
    company: 'CyberArk',
    period: '2015 — 2017',
    start: '2015-10',
    end: '2017-07',
    summary:
      'Ran red team assessments against Fortune 500 environments, demonstrating concrete privilege escalation paths and the controls that close them.',
  },
  {
    label: 'Security Researcher @ IDF',
    title: 'Security Researcher',
    company: 'Israel Defense Forces',
    period: '2011 — 2015',
    start: '2011-12',
    end: '2015-09',
    summary:
      'Founded and led a cybersecurity department inside a classified unit, building offensive and defensive research capabilities from scratch.',
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
    heading: 'Security domains',
    items: [
      'Exposure management & CTEM programs',
      'Attack path analysis and validation',
      'Active Directory security & red teaming',
      'Cloud security and DevSecOps',
      'Threat intelligence & detection engineering',
      'Privileged access management',
    ],
  },
  {
    heading: 'Building & shipping',
    items: [
      'Python, TypeScript, Go',
      'AWS, Azure, GCP',
      'Docker, Kubernetes, CI/CD',
      'Graph data modelling (Neo4j)',
      'Product growth & analytics',
      'Scaling engineering organisations',
    ],
  },
]
