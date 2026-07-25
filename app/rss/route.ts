import { baseUrl } from 'app/sitemap'
import { getBlogPosts, sortPostsByDate } from 'app/blog/utils'
import { person } from 'app/site'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = sortPostsByDate(await getBlogPosts())

  const itemsXml = posts
    .map((post) => {
      const link = `${baseUrl}/blog/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.metadata.title || '')}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.metadata.description || '')}</description>
      ${(post.metadata.tags ?? [])
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join('\n      ')}
      <pubDate>${
        post.metadata.date ? new Date(post.metadata.date).toUTCString() : ''
      }</pubDate>
    </item>`
    })
    .join('\n')

  const latest = posts[0]?.metadata.date
  const lastBuildDate = (latest ? new Date(latest) : new Date()).toUTCString()

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(person.name)} — Writing</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
    <description>Deep dives on exposure management, AI security and building security products.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
