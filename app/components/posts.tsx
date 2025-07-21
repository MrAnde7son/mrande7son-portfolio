import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import { formatDate } from 'app/blog/utils'

export default async function BlogPosts() {
  let allBlogs = await getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-500 dark:text-neutral-400">
                {formatDate(post.metadata.date, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
