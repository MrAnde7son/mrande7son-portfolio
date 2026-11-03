import type { MetadataRoute } from 'next'

export const baseUrl = 'https://www.mrande7son.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const routes: MetadataRoute.Sitemap = (
    [
      { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
      { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified: today }))

  return routes
}
