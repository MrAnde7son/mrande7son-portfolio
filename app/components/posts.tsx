import { getBlogPosts } from 'app/blog/utils'
import PostCard from './PostCard'

export default async function BlogPosts() {
  let allBlogs = await getBlogPosts()

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
          />
        ))}
    </div>
  )
}

