import Link from 'next/link'
import { formatDate } from '../blog/utils'

interface PostCardProps {
  title: string
  description: string
  date?: string
  href: string
  className?: string
  tags?: string[]
}

export default function PostCard({
  title,
  description,
  date,
  href,
  className = '',
  tags = [],
}: PostCardProps) {
  return (
    <Link href={href} className="block">
      <article
        className={`relative z-0 h-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col ${className}`}
      >
        <header className="flex items-center gap-2 min-w-0">
          <h3 className="min-w-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 truncate">
            {title}
          </h3>
        </header>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
          {description}
        </p>
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-700 dark:text-neutral-200" aria-label="Topics">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {date && (
          <p className="mt-4 text-xs text-neutral-600 dark:text-neutral-300">
            {formatDate(date)}
          </p>
        )}
      </article>
    </Link>
  )
}

