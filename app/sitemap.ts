import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://mrander7son-portfolio.vercel.app'

export default async function sitemap() {
  let blogs = await getBlogPosts()
  let posts = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
