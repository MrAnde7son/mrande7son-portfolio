import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  formatDate,
  getBlogPosts,
  readingTime,
  relatedPosts,
  sortPostsByDate,
} from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { CustomMDX, createHeading } from 'app/components/mdx'
import { Container } from 'app/components/container'
import PostCard from 'app/components/PostCard'
import { ogImageUrl } from 'app/og-url'
import { person, social } from 'app/site'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = (await getBlogPosts()).find((entry) => entry.slug === params.slug)
  if (!post) {
    return {
      title: 'Post not found',
      description: 'The requested blog post could not be found.',
    }
  }

  const { title, date: publishedTime, description, image, tags } = post.metadata
  // Posts without their own artwork fall back to a generated card that at
  // least carries the post title, rather than the generic site image.
  const ogImage = image ?? ogImageUrl(title ?? '', 'Itamar Mizrahi · Writing')

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: person.name, url: baseUrl }],
    keywords: tags,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime: publishedTime,
      authors: [baseUrl],
      tags,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: social.twitterHandle,
    },
  }
}

export default async function Blog({ params }) {
  const posts = sortPostsByDate(await getBlogPosts())
  const post = posts.find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Posts open with an <h1> in the body; demote it so the page has exactly one.
  const components = { h1: createHeading(2) }

  const index = posts.findIndex((entry) => entry.slug === post.slug)
  const newer = posts[index - 1]
  const older = posts[index + 1]
  const related = relatedPosts(post, posts)
  const minutes = readingTime(post.content)
  const url = `${baseUrl}/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    description: post.metadata.description,
    keywords: post.metadata.tags?.join(', '),
    image: post.metadata.image
      ? `${baseUrl}${post.metadata.image}`
      : `${baseUrl}${ogImageUrl(post.metadata.title ?? '')}`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    wordCount: post.content.split(/\s+/).filter(Boolean).length,
    author: { '@type': 'Person', name: person.name, url: baseUrl },
    publisher: { '@type': 'Person', name: person.name, url: baseUrl },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Writing', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.metadata.title, item: url },
    ],
  }

  return (
    <Container width="prose" className="pt-10 pb-20 sm:pt-14">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/blog"
          className="muted text-sm transition-colors hover:text-[var(--fg)]"
        >
          ← All writing
        </Link>
      </nav>

      <article>
        <header className="border-b border-token pb-8">
          <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            {post.metadata.title}
          </h1>

          {post.metadata.description && (
            <p className="muted mt-4 text-lg leading-relaxed">
              {post.metadata.description}
            </p>
          )}

          <div className="subtle mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span>{person.name}</span>
            <span aria-hidden="true">·</span>
            {post.metadata.date && (
              <>
                <time dateTime={post.metadata.date}>
                  {formatDate(post.metadata.date)}
                </time>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span>{minutes} min read</span>
          </div>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
              {post.metadata.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="prose mt-10">
          <CustomMDX source={post.content} components={components} />
        </div>
      </article>

      <div className="surface-subtle mt-14 p-6">
        <h2 className="font-semibold tracking-tight">Found this useful?</h2>
        <p className="muted mt-2 text-sm leading-relaxed">
          I write about exposure management and building security products.
          Pass it on if it helped, or tell me where I got it wrong.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn btn-secondary"
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(
              `${post.metadata.title ?? ''} by ${social.twitterHandle}`
            )}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on X
          </a>
          <a
            className="btn btn-secondary"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on LinkedIn
          </a>
          <Link className="btn btn-secondary" href="/contact">
            Get in touch
          </Link>
        </div>
      </div>

      {(newer || older) && (
        <nav
          aria-label="More posts"
          className="mt-10 grid gap-4 border-t border-token pt-8 sm:grid-cols-2"
        >
          {older ? (
            <AdjacentPost
              direction="Previous"
              slug={older.slug}
              title={older.metadata.title ?? ''}
            />
          ) : (
            <span />
          )}
          {newer && (
            <AdjacentPost
              direction="Next"
              slug={newer.slug}
              title={newer.metadata.title ?? ''}
              align="right"
            />
          )}
        </nav>
      )}

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">
            Related reading
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((entry) => (
              <PostCard
                key={entry.slug}
                title={entry.metadata.title ?? ''}
                description={entry.metadata.description ?? ''}
                date={entry.metadata.date}
                href={`/blog/${entry.slug}`}
                tags={entry.metadata.tags}
                content={entry.content}
              />
            ))}
          </div>
        </section>
      )}
    </Container>
  )
}

function AdjacentPost({
  direction,
  slug,
  title,
  align = 'left',
}: {
  direction: string
  slug: string
  title: string
  align?: 'left' | 'right'
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`group rounded-lg ${align === 'right' ? 'sm:text-right' : ''}`}
    >
      <span className="subtle text-xs tracking-wider uppercase">
        {direction}
      </span>
      <span className="mt-1 block text-sm font-medium transition-colors group-hover:text-[var(--accent)]">
        {title}
      </span>
    </Link>
  )
}
