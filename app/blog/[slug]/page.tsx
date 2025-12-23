import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatDate } from 'app/blog/utils'
import { CustomMDX, createHeading } from 'app/components/mdx'

export async function generateStaticParams() {
  let posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  let post = (await getBlogPosts()).find((post) => post.slug === params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  let {
    title,
    date: publishedTime,
    description,
    image,
  } = post.metadata

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
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

  let components = {
    h1: createHeading(2),
  }

  return (
    <section className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
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
        <p className="text-neutral-600 dark:text-neutral-200">
          {formatDate(post.metadata.date)}
        </p>
        <p className="text-neutral-600 dark:text-neutral-200">
          {Math.ceil(post.content.length / 1000)} min read
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <CustomMDX source={post.content} components={components} />
      </article>
    </section>
  )
}
