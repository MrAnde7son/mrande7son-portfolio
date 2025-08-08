import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import { formatDate } from 'app/blog/utils'

export default async function BlogPosts() {
  let allBlogs = await getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          const dateA = a.metadata.date
            ? new Date(a.metadata.date)
            : new Date(0)
          const dateB = b.metadata.date
            ? new Date(b.metadata.date)
            : new Date(0)
          return dateB.getTime() - dateA.getTime()
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-white tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                {formatDate(post.metadata.date)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
