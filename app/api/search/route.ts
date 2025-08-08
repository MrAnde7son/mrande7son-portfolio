import { NextResponse } from 'next/server'
import { getBlogPosts } from '../../blog/utils'
import { projects } from '../../../lib/projects'
import { searchItems, type SearchItem } from '../../../lib/search'

// Basic dataset for static pages on the site
const pages: SearchItem[] = [
  { title: 'Home', url: '/', description: 'Welcome page of Itamar Mizrahi' },
  { title: 'About', url: '/about', description: 'Learn more about Itamar Mizrahi' },
  { title: 'Blog', url: '/blog', description: 'List of blog posts and insights' },
  { title: 'Contact', url: '/contact', description: 'Get in touch with Itamar' },
]

export async function GET(request: Request) {
  const posts: SearchItem[] = getBlogPosts().map((post) => ({
    title: post.metadata.title ?? '',
    description: post.metadata.description ?? '',
    url: `/blog/${post.slug}`,
    ...(post.content ? { content: post.content } : {}),
  }))

  const projectItems: SearchItem[] = projects.map((project) => ({
    title: project.title,
    description: project.description,
    url: project.href || '#',
    content: project.tags.join(' '),
  }))

  const data: SearchItem[] = [...pages, ...posts, ...projectItems]

  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  const results = query ? searchItems(data, query) : data

  return NextResponse.json(results)
}

