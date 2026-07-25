import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Container, Section } from 'app/components/container'
import { education, expertise, roles } from '../../lib/career'
import { person, social } from 'app/site'
import { baseUrl } from 'app/sitemap'
import { ogImageUrl } from 'app/og-url'

const description =
  'Itamar Mizrahi’s path through cybersecurity: security research in the IDF, red teaming at CyberArk, founding Cymptom and its acquisition by Tenable, and now leading product growth for Tenable’s exposure management platform.'

const ogImage = ogImageUrl('About Itamar Mizrahi', person.tagline)

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  keywords: [
    'Itamar Mizrahi',
    'Cymptom founder',
    'Tenable',
    'cybersecurity leadership',
    'exposure management',
  ],
  openGraph: {
    title: `About ${person.name}`,
    description,
    type: 'profile',
    url: `${baseUrl}/about`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `About ${person.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${person.name}`,
    description,
    images: [ogImage],
  },
}

export default function About() {
  return (
    <Container width="page" className="pt-12 pb-20 sm:pt-16">
      <header className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:gap-10">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h1>
          <p className="mt-5 text-lg leading-relaxed">{person.summary}</p>
          <p className="muted mt-4 leading-relaxed">
            Most of my career has been spent on one question: given everything
            an organisation exposes, what actually matters right now? Answering
            it well means graph data, adversary tradecraft and product judgement
            in equal measure — and it is why I keep coming back to exposure
            management.
          </p>
        </div>
        <Image
          src="/itamar-mizrahi.jpg"
          alt={`Portrait of ${person.name}`}
          width={200}
          height={200}
          className="h-32 w-32 shrink-0 rounded-2xl object-cover sm:h-44 sm:w-44"
          style={{ boxShadow: 'var(--shadow-card-hover)' }}
          priority
        />
      </header>

      <div className="mt-16 space-y-16">
        <Section title="Experience">
          <ol className="space-y-4">
            {roles.map((role) => (
              <li key={role.label} className="surface p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold tracking-tight">
                    {role.title}{' '}
                    <span className="muted font-normal">@ {role.company}</span>
                  </h3>
                  <time
                    dateTime={role.start}
                    className="subtle font-mono text-xs whitespace-nowrap"
                  >
                    {role.period}
                  </time>
                </div>

                {role.note && (
                  <span className="chip chip-accent mt-3 font-medium">
                    {role.note}
                  </span>
                )}

                <p className="muted mt-3 leading-relaxed">{role.summary}</p>

                {role.highlights && (
                  <ul className="muted mt-3 space-y-1.5 text-sm">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span aria-hidden="true" className="accent mt-px">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="What I work on">
          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((group) => (
              <div key={group.heading} className="surface p-5 sm:p-6">
                <h3 className="font-semibold tracking-tight">{group.heading}</h3>
                <ul className="muted mt-3 space-y-1.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <ul className="grid gap-4 sm:grid-cols-2">
            {education.map((entry) => (
              <li key={entry.degree} className="surface p-5">
                <h3 className="font-semibold tracking-tight">{entry.degree}</h3>
                <p className="muted mt-1.5 text-sm">{entry.institution}</p>
                <p className="subtle mt-1 font-mono text-xs">{entry.period}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="How I work"
          description="Three things that shape most of the decisions I make."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <Value title="Security products people use">
              A control nobody adopts protects nothing. I optimise for the tool
              a security team reaches for on a Tuesday morning, not the one that
              demos well.
            </Value>
            <Value title="Evidence over noise">
              Exposure data is overwhelming by default. The work is proving what
              is genuinely reachable and exploitable, then ranking it honestly.
            </Value>
            <Value title="Teaching what I learn">
              I have taught SOC analysts, mentored founders and contributed to
              open source. The knowledge compounds fastest when it circulates.
            </Value>
          </div>
        </Section>

        <Section
          title="Speaking & mentoring"
          description="Cybersecurity leadership, scaling startups, security product development and the changing threat landscape."
        >
          <div className="surface flex flex-wrap items-center gap-3 p-6">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Section>

        <Section title="Beyond work">
          <p className="muted leading-relaxed">
            Off the clock I surf, travel, and spend more time than I should
            reading other people’s security research. Surfing in particular has
            been the most reliable way I have found to think clearly about a
            hard problem — usually by not thinking about it at all.
          </p>
        </Section>
      </div>
    </Container>
  )
}

function Value({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="surface-subtle p-5">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="muted mt-2 text-sm leading-relaxed">{children}</p>
    </div>
  )
}
