import { NextResponse } from 'next/server'
import { getBlogPosts } from '../../blog/utils'

// Basic dataset for static pages on the site
const pages = [
  { title: 'Home', url: '/', description: 'Welcome page of Itamar Mizrahi' },
  { title: 'About', url: '/about', description: 'Learn more about Itamar Mizrahi' },
  { title: 'Blog', url: '/blog', description: 'List of blog posts and insights' },
  { title: 'Contact', url: '/contact', description: 'Get in touch with Itamar' },
]

export async function GET() {
  const posts = getBlogPosts().map((post) => ({
    title: post.metadata.title,
    description: post.metadata.description,
    url: `/blog/${post.slug}`,
    content: post.content,
  }))

  const data = [...pages, ...posts]

  return NextResponse.json(data)
}

