export interface Project {
  title: string
  description: string
  tags: string[]
  stars?: number
  href?: string
  className?: string
}

export const projects: Project[] = [
  {
    title: 'Impacket',
    description:
      'Contributed to the leading Python library for network protocol analysis and penetration testing. Used by 6,000+ repositories with 14.6k+ stars.',
    href: 'https://github.com/fortra/impacket',
    stars: 14600,
    tags: ['Python', 'Network Security', 'Penetration Testing', 'Open Source'],
    className: 'md:col-span-3 md:row-span-2',
  },
  {
    title: 'MITRE ATT&CK',
    description:
      'Contributed to the global cybersecurity knowledge base of adversary tactics and techniques. Used by governments, enterprises, and security teams worldwide.',
    href: 'https://attack.mitre.org/',
    tags: ['Threat Intelligence', 'Cybersecurity Framework', 'Global Standard'],
    className: 'md:col-span-3',
  },
  {
    title: 'Neomodel',
    description:
      'Contributed to the popular Python Object Graph Mapper (OGM) for Neo4j graph database. Used by 1,100+ repositories with 1k+ stars.',
    href: 'https://github.com/neo4j-contrib/neomodel',
    stars: 1000,
    tags: ['Python', 'Neo4j', 'Graph Database', 'Open Source'],
    className: 'md:col-span-2',
  },
  {
    title: 'PowerSploit',
    description:
      'Contributed to the legendary PowerShell post-exploitation framework used by red teams worldwide. 12.5k+ stars with 4.7k+ forks.',
    href: 'https://github.com/PowerShellMafia/PowerSploit',
    stars: 12500,
    tags: ['PowerShell', 'Post-Exploitation', 'Red Teaming', 'Open Source'],
    className: 'md:col-span-1',
  },
  {
    title: 'PowerShell Toolkit',
    description:
      'Active Directory red team & audit scripts for security testing and compliance.',
    href: 'https://github.com/MrAnde7son/PowerShell',
    stars: 100,
    tags: ['PowerShell', 'Active Directory', 'Security Testing'],
    className: 'md:col-span-3',
  },
  {
    title: 'Snort Converter',
    description: 'Agentless rule converter for FortiGate firewall integration.',
    href: 'https://github.com/MrAnde7son/Snort',
    stars: 50,
    tags: ['Network Security', 'FortiGate', 'Rule Conversion'],
    className: 'md:col-span-3',
  },
]

