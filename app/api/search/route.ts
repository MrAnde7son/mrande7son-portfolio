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
    // Tags join the haystack so a search for a topic like "CTEM" finds posts
    // filed under it even when the body never spells the acronym out.
    content: [post.metadata.tags?.join(' '), post.content]
      .filter(Boolean)
      .join(' '),
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

