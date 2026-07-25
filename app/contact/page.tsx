import type { Metadata } from 'next'
import SubscribeForm from './SubscribeForm'
import { Container, Section } from 'app/components/container'
import { person, social } from 'app/site'
import { baseUrl } from 'app/sitemap'
import { ogImageUrl } from 'app/og-url'

const description =
  'Get in touch with Itamar Mizrahi about speaking, mentoring, security research, or anything to do with exposure management.'

const ogImage = ogImageUrl('Get in touch', person.tagline)

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact ${person.name}`,
    description,
    type: 'website',
    url: `${baseUrl}/contact`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Get in touch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${person.name}`,
    description,
    images: [ogImage],
  },
}

const channels = [
  {
    title: 'Speaking',
    body: 'Zero to acquisition, running security engineering at scale, or why most exposure programs stall. I would rather tell you what went wrong than give the highlight reel.',
    action: { label: 'Message on LinkedIn', href: social.linkedin },
  },
  {
    title: 'Mentoring',
    body: 'Engineers moving into leadership, and founders trying to work out whether they have a product or a feature. I got both of those wrong before I got them right.',
    action: { label: 'Message on LinkedIn', href: social.linkedin },
  },
  {
    title: 'Open source & research',
    body: 'Attack path analysis, detection engineering, or anything in the repos I contribute to.',
    action: { label: 'GitHub profile', href: social.github },
  },
  {
    title: 'Anything else',
    body: 'Advisory work, a question about something I wrote, or an argument about it.',
    action: { label: `Email ${person.email}`, href: `mailto:${person.email}` },
  },
]

export default function Contact() {
  return (
    <Container width="page" className="pt-12 pb-20 sm:pt-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h1>
        <p className="muted mt-5 text-lg leading-relaxed">
          I read everything that arrives. Practitioners, founders, anyone stuck
          on exposure management at scale — all welcome. Expect a reply inside a
          day or two. If it is urgent, say so in the first line.
        </p>
      </header>

      <div className="mt-14 space-y-14">
        <Section title="What I can help with">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <div key={channel.title} className="surface flex flex-col p-5 sm:p-6">
                <h3 className="font-semibold tracking-tight">{channel.title}</h3>
                <p className="muted mt-2 flex-1 text-sm leading-relaxed">
                  {channel.body}
                </p>
                <a
                  href={channel.action.href}
                  {...(channel.action.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="accent mt-4 self-start rounded-md text-sm font-medium hover:underline"
                >
                  {channel.action.label} →
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Send a note"
          description="Goes straight to my inbox. There is no mailing list and I am not building one."
        >
          <div className="surface max-w-xl p-5 sm:p-6">
            <SubscribeForm />
          </div>
        </Section>
      </div>
    </Container>
  )
}
