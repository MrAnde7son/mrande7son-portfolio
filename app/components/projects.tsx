import Link from 'next/link'

const projects = [
  {
    title: 'Impacket',
    description: 'Contributed to the leading Python library for network protocol analysis and penetration testing. Used by 6,000+ repositories with 14.6k+ stars.',
    github: 'https://github.com/fortra/impacket',
    tags: ['Python', 'Network Security', 'Penetration Testing', 'Open Source'],
  },
  {
    title: 'MITRE ATT&CK',
    description: 'Contributed to the global cybersecurity knowledge base of adversary tactics and techniques. Used by governments, enterprises, and security teams worldwide.',
    github: 'https://attack.mitre.org/',
    tags: ['Threat Intelligence', 'Cybersecurity Framework', 'Global Standard'],
  },
  {
    title: 'Neomodel',
    description: 'Contributed to the popular Python Object Graph Mapper (OGM) for Neo4j graph database. Used by 1,100+ repositories with 1k+ stars.',
    github: 'https://github.com/neo4j-contrib/neomodel',
    tags: ['Python', 'Neo4j', 'Graph Database', 'Open Source'],
  },
  {
    title: 'PowerSploit',
    description: 'Contributed to the legendary PowerShell post-exploitation framework used by red teams worldwide. 12.5k+ stars with 4.7k+ forks.',
    github: 'https://github.com/PowerShellMafia/PowerSploit',
    tags: ['PowerShell', 'Post-Exploitation', 'Red Teaming', 'Open Source'],
  },
  {
    title: 'PowerShell Toolkit',
    description: 'Active Directory red team & audit scripts for security testing and compliance.',
    github: 'https://github.com/MrAnde7son/PowerShell',
    tags: ['PowerShell', 'Active Directory', 'Security Testing'],
  },
  {
    title: 'Snort Converter',
    description: 'Agentless rule converter for FortiGate firewall integration.',
    github: 'https://github.com/MrAnde7son/Snort',
    tags: ['Network Security', 'FortiGate', 'Rule Conversion'],
  },
]

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold tracking-tighter mb-4">Key Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
