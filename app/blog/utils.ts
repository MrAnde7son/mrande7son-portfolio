import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  date: string
  description: string
  image?: string
  tags?: string[]
}

export function parseFrontmatter(fileContent: string): {
  metadata: Partial<Metadata>
  content: string
} {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)

  // If no frontmatter is present, return trimmed content with empty metadata
  if (!match) {
    return { metadata: {} as Partial<Metadata>, content: fileContent.trim() }
  }

  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    if (!line.includes(':')) return
    let [key, ...valueArr] = line.split(':')
    let value = valueArr.join(':').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    let normalizedKey = key.trim() as keyof Metadata

    if (normalizedKey === 'tags') {
      let tags = value
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)

      metadata.tags = tags
      return
    }

    metadata[normalizedKey] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

/**
 * Drops a leading `# Heading` when it just repeats the frontmatter title.
 *
 * Every post opens with its own title, which the page template already
 * renders as the <h1> — without this the reader sees the same headline twice.
 */
export function stripDuplicateTitle(content: string, title?: string) {
  const match = /^\s*#\s+(.+?)\s*(?:\n|$)/.exec(content)
  if (!match || !title) return content

  const normalise = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, '')

  if (normalise(match[1]) !== normalise(title)) return content
  return content.slice(match[0].length).trimStart()
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content: stripDuplicateTitle(content, metadata.title),
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export type BlogPost = ReturnType<typeof getBlogPosts>[number]

/** Newest first. Posts without a date sort last. */
export function sortPostsByDate<T extends { metadata: { date?: string } }>(
  posts: T[]
): T[] {
  return [...posts].sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date).getTime() : 0
    const dateB = b.metadata.date ? new Date(b.metadata.date).getTime() : 0
    return dateB - dateA
  })
}

const WORDS_PER_MINUTE = 200

/**
 * Estimated reading time in whole minutes.
 *
 * The previous implementation divided the character count by 1000, which
 * under-reported every post by roughly a factor of five.
 */
export function readingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ') // code blocks read differently
    .replace(/[#*_>`\[\]()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

/**
 * Posts that share the most tags with the given post, newest first among ties.
 */
export function relatedPosts<
  T extends { slug: string; metadata: { tags?: string[]; date?: string } }
>(post: T, all: T[], limit = 2): T[] {
  const tags = new Set(post.metadata.tags ?? [])

  return sortPostsByDate(all)
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      shared: (candidate.metadata.tags ?? []).filter((tag) => tags.has(tag))
        .length,
    }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}

export function formatDate(date?: string, includeRelative = false) {
  if (!date) {
    return ''
  }

  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
