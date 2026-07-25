import Link from 'next/link'
import { formatDate, readingTime } from '../blog/utils'

interface PostCardProps {
  title: string
  description: string
  date?: string
  href: string
  className?: string
  tags?: string[]
  /** Post body, used to show an estimated reading time. */
  content?: string
  featured?: boolean
}

export default function PostCard({
  title,
  description,
  date,
  href,
  className = '',
  tags = [],
  content,
  featured = false,
}: PostCardProps) {
  const minutes = content ? readingTime(content) : undefined

  return (
    <Link href={href} className={`card-link group ${className}`}>
      <article className="surface flex h-full flex-col p-5">
        {featured && (
          <span className="chip chip-accent mb-3 self-start font-medium">
            Featured
          </span>
        )}

        <h3 className="text-base leading-snug font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-lg">
          {title}
        </h3>

        {description && (
          <p className="muted mt-2 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Topics">
            {tags.slice(0, 3).map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <p className="subtle mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-xs">
          {date && <time dateTime={date}>{formatDate(date)}</time>}
          {date && minutes ? <span aria-hidden="true">·</span> : null}
          {minutes ? <span>{minutes} min read</span> : null}
        </p>
      </article>
    </Link>
  )
}
