import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'

// Function to escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  let allBlogs = await getBlogPosts()

  const itemsXml = allBlogs
    .sort((a, b) => {
      const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0)
      const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0)
      return dateB.getTime() - dateA.getTime()
    })
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title || '')}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.description || '')}</description>
          <pubDate>${post.metadata.date ? new Date(post.metadata.date).toUTCString() : ''}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Itamar Mizrahi - Entrepreneur, Leader &amp; Engineering</title>
        <link>${baseUrl}</link>
        <description>Cybersecurity insights and leadership lessons from Itamar Mizrahi</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
