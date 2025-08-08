import BlogPosts from 'app/components/posts'
import ProjectCard from 'app/components/ProjectCard'
import Timeline from 'app/components/Timeline'
import Image from 'next/image'
import { BentoGrid, BentoCard } from 'app/components/bento'
import InteractiveChart from 'app/components/interactive-chart'

export default function Page() {
  const projects = [
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

  return (
    <BentoGrid>
      <BentoCard className="md:col-span-2">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/itamar-mizrahi.jpg"
              alt="Itamar Mizrahi - Cybersecurity Entrepreneur and VP Engineering at Tenable"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
              Itamar Mizrahi
            </h1>
            <p className="mb-4 text-lg text-neutral-700 dark:text-neutral-300">
              {`A seasoned technology leader and entrepreneur with extensive experience in cybersecurity. Proven track record in building and scaling software products from inception to growth. Former Co-founder and CEO of Cymptom, acquired by Tenable.`}
            </p>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {`My passion lies in building high-impact security products that protect organizations from evolving cyber threats. I enjoy mentoring the next generation of security professionals and sharing insights from my experience in both startup and enterprise environments.`}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              In my free time, I like surfing and traveling
            </p>
          </div>
        </div>
      </BentoCard>

      <BentoCard>
        <h2 className="text-xl font-semibold tracking-tighter mb-6">Career Timeline</h2>
        <Timeline />
      </BentoCard>

      <BentoCard className="md:col-span-2">
        <h2 className="text-xl font-semibold tracking-tighter mb-6">Key Projects</h2>
        <div className="grid gap-4 md:grid-cols-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </BentoCard>
      <BentoCard>
        <h2 className="text-xl font-semibold tracking-tighter mb-6">Latest Insights</h2>
        <BlogPosts />
      </BentoCard>

      <BentoCard>
        <h2 className="text-xl font-semibold tracking-tighter mb-6">Interactive Data</h2>
        <InteractiveChart />
      </BentoCard>
    </BentoGrid>
  )
}
