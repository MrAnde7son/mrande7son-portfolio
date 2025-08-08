import { NextResponse } from 'next/server'
import { getBlogPosts } from '../../blog/utils'
import { projects } from '../../../lib/projects'
import { searchItems } from '../../../lib/search'

// Basic dataset for static pages on the site
const pages = [
  { title: 'Home', url: '/', description: 'Welcome page of Itamar Mizrahi' },
  { title: 'About', url: '/about', description: 'Learn more about Itamar Mizrahi' },
  { title: 'Blog', url: '/blog', description: 'List of blog posts and insights' },
  { title: 'Contact', url: '/contact', description: 'Get in touch with Itamar' },
]

export async function GET(request: Request) {
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

  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  const results = query ? searchItems(data, query) : data

  return NextResponse.json(results)
}

