import { getBlogPosts } from 'app/blog/utils'
import PostCard from './PostCard'

type BlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number]

export default async function BlogPosts({
  posts,
}: {
  posts?: BlogPost[]
}) {
  let allBlogs = posts ?? (await getBlogPosts())

  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      {allBlogs
        .sort((a, b) => {
          const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0)
          const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0)
          return dateB.getTime() - dateA.getTime()
        })
        .map((post) => (
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
  )
}

