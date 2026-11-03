import type { Metadata } from 'next'
import BlogPosts from 'app/components/posts'
import { Container, Section } from 'app/components/container'
import { getBlogPosts, sortPostsByDate } from './utils'
import { baseUrl } from 'app/sitemap'
import { ogImageUrl } from 'app/og-url'
import { person } from 'app/site'

const title = 'Writing'
const description =
  'Posts on exposure management, CTEM, AI security and building security products.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `${title} | ${person.name}`,
    description,
    type: 'website',
    url: `${baseUrl}/blog`,
    images: [ogImageUrl('Writing', 'Exposure management, CTEM and AI security')],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${person.name}`,
    description,
    images: [ogImageUrl('Writing', 'Exposure management, CTEM and AI security')],
  },
}

/** Essays worth reading first, surfaced above the chronological list. */
const cornerstoneSlugs = new Set([
  'ai-attack-surface-exposure-management',
  'ai-autonomous-vulnerability-remediation',
])

export default async function Page() {
  const posts = sortPostsByDate(await getBlogPosts())
  const topics = Array.from(
    new Set(posts.flatMap((post) => post.metadata.tags ?? []))
  ).sort()

  const cornerstone = posts.filter((post) => cornerstoneSlugs.has(post.slug))
  const rest = posts.filter((post) => !cornerstoneSlugs.has(post.slug))

  return (
    <Container width="page" className="pt-12 pb-20 sm:pt-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Writing
        </h1>
        <p className="muted mt-4 text-lg leading-relaxed">{description}</p>
        {topics.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics covered">
            {topics.map((topic) => (
              <li key={topic} className="chip">
                {topic}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="mt-14 space-y-14">
        {cornerstone.length > 0 && (
          <Section
            title="Featured"
          >
            <BlogPosts
              posts={cornerstone}
              columns={2}
              featuredSlugs={cornerstoneSlugs}
            />
          </Section>
        )}

        {rest.length > 0 && (
          <Section id="all-posts" title="All posts">
            <BlogPosts posts={rest} columns={2} />
          </Section>
        )}
      </div>
    </Container>
  )
}
