import BlogPosts from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Cybersecurity insights and leadership lessons from Itamar Mizrahi.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">📝 Blog</h1>
      <BlogPosts />
    </section>
  )
}
