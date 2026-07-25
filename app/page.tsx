import Link from 'next/link'
import Image from 'next/image'
import BlogPosts from 'app/components/posts'
import Timeline from 'app/components/Timeline'
import ProjectsGrid from 'app/components/ProjectsGrid'
import Patents from 'app/components/Patents'
import { Container, Section } from 'app/components/container'
import { highlights, person, social } from 'app/site'

export default function Page() {
  return (
    <>
      <Hero />

      <Container width="wide" className="space-y-16 pt-4 pb-20 sm:space-y-20">
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Section
            id="career"
            title="Career"
            description="From offensive research inside a classified unit to running product for an exposure management platform."
          >
            <Timeline />
          </Section>

          <div className="space-y-16">
            <Section
              id="writing"
              title="Writing"
              description="Practitioner notes on exposure management, CTEM and AI security."
              action={
                <Link
                  href="/blog"
                  className="accent shrink-0 text-sm font-medium hover:underline"
                >
                  All posts →
                </Link>
              }
            >
              {/* Server component: streams the three most recent posts. */}
              <BlogPosts limit={3} />
            </Section>

            <Section
              id="patents"
              title="Patents"
              description="Granted work on determining and mitigating cyber attack vectors."
            >
              <Patents />
            </Section>
          </div>
        </div>

        <Section
          id="projects"
          title="Open source"
          description="Tools and libraries I have contributed to, used daily by red teams and defenders."
        >
          <ProjectsGrid />
        </Section>
      </Container>
    </>
  )
}

function Hero() {
  return (
    <Container width="wide" as="section" className="pt-12 pb-14 sm:pt-16 sm:pb-16">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:gap-12">
        <div className="min-w-0 flex-1">
          <p className="accent mb-3 font-mono text-xs tracking-widest uppercase">
            {person.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {person.name}
          </h1>
          <p className="muted mt-5 max-w-xl text-lg leading-relaxed text-balance">
            {person.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/blog" className="btn btn-primary">
              Read the writing
            </Link>
            <Link href="/about" className="btn btn-secondary">
              About me
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/itamar-mizrahi.jpg"
            alt={`Portrait of ${person.name}`}
            width={200}
            height={200}
            className="h-32 w-32 rounded-2xl object-cover sm:h-40 sm:w-40 md:h-48 md:w-48"
            style={{ boxShadow: 'var(--shadow-card-hover)' }}
            priority
          />
        </div>
      </div>

      <dl className="mt-12 grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="surface-subtle p-4">
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block text-2xl font-semibold tracking-tight">
                {item.value}
              </span>
              <span className="mt-1 block text-sm leading-snug font-medium">
                {item.label}
              </span>
              <span className="subtle mt-0.5 block text-xs">{item.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
