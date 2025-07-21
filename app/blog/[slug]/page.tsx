import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate } from 'app/blog/utils'

export async function generateStaticParams() {
  let posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  let post = (await getBlogPosts()).find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: image
        ? [
            {
              url: image,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  }
}

export default async function Blog({ params }) {
  let posts = await getBlogPosts()
  let post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: post.metadata.image,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Itamar Mizrahi',
            },
          }),
        }}
      />
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          {Math.ceil(post.content.length / 1000)} min read
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </section>
  )
}
