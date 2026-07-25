import { getBlogPosts, sortPostsByDate } from 'app/blog/utils'
import PostCard from './PostCard'

type BlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number]

export default async function BlogPosts({
  posts,
  limit,
  columns = 1,
  featuredSlugs,
}: {
  posts?: BlogPost[]
  limit?: number
  columns?: 1 | 2
  featuredSlugs?: Set<string>
}) {
  const allBlogs = sortPostsByDate(posts ?? (await getBlogPosts()))
  const shown = limit ? allBlogs.slice(0, limit) : allBlogs

  return (
    <div className={`grid gap-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {shown.map((post) => (
        <PostCard
          key={post.slug}
          title={post.metadata.title ?? ''}
          description={post.metadata.description ?? ''}
          date={post.metadata.date}
          href={`/blog/${post.slug}`}
          tags={post.metadata.tags}
          content={post.content}
          featured={featuredSlugs?.has(post.slug)}
        />
      ))}
    </div>
  )
}
