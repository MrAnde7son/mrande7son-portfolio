import BlogPosts from 'app/components/posts'
import PostCard from 'app/components/PostCard'
import { getBlogPosts } from './utils'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Cybersecurity insights and leadership lessons from Itamar Mizrahi.',
}

export default async function Page() {
  let posts = await getBlogPosts()
  let sortedPosts = posts.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0)
    const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0)
    return dateB.getTime() - dateA.getTime()
  })

  let topics = Array.from(
    new Set(sortedPosts.flatMap((post) => post.metadata.tags ?? []))
  ).sort()

  let cornerstoneSlugs = new Set([
    'ai-attack-surface-exposure-management',
    'ai-autonomous-vulnerability-remediation',
  ])

  let cornerstonePosts = sortedPosts.filter((post) =>
    cornerstoneSlugs.has(post.slug)
  )

  return (
    <section className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <p>
          Deep dives on exposure management, AI security, and cyber resilience
          learned from building and scaling products at Cymptom and Tenable.
          Expect practitioner-first perspectives on CTEM programs, autonomous
          remediation, and making modern security programs actually usable.
        </p>

        {topics.length > 0 && (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/40 p-4">
            <h2 className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
              Topics I write about
            </h2>
            <p className="mt-2 text-sm">
              Explore recurring themes like CTEM, attack surface management,
              and agentic AI security.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm dark:bg-neutral-900 dark:text-neutral-100"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cornerstonePosts.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
                Start with these guides
              </h2>
              <Link
                href="#all-posts"
                className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
              >
                Skip to all posts
              </Link>
            </div>
            <p className="text-sm">
              Cornerstone essays that cover exposure management and AI-driven
              remediation in depth.
            </p>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
              {cornerstonePosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.metadata.title ?? ''}
                  description={post.metadata.description ?? ''}
                  date={post.metadata.date}
                  href={`/blog/${post.slug}`}
                  tags={post.metadata.tags}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10" id="all-posts">
        <h2 className="font-semibold text-xl mb-4 tracking-tight text-neutral-900 dark:text-neutral-100">
          Latest insights
        </h2>
        <BlogPosts posts={sortedPosts} />
      </div>
    </section>
  )
}
