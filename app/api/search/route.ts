import { NextResponse } from 'next/server'
import { getBlogPosts } from '../../blog/utils'
import { projects } from '../../../lib/projects'

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

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: project.description,
    url: project.href || '#',
    content: project.tags.join(' '),
  }))

  const data = [...pages, ...posts, ...projectItems]

  return NextResponse.json(data)
}

