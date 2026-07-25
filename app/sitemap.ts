import type { MetadataRoute } from 'next'
import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://www.mrande7son.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split('T')[0]

  const routes: MetadataRoute.Sitemap = (
    [
      { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
      { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified: today }))

  const posts = (await getBlogPosts()).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.date ?? today,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...routes, ...posts]
}
