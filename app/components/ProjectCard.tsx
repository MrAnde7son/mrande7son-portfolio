import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  stars?: number
  href?: string
  className?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  stars,
  href,
  className = '',
}: ProjectCardProps) {
  const card = (
    <article
      className={`h-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col ${className}`}
    >
      <header className="flex items-center gap-2 min-w-0">
        <h3 className="min-w-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 truncate">
          {title}
        </h3>
        {stars !== undefined && (
          <span className="ml-auto shrink-0 text-sm text-neutral-600 dark:text-neutral-300">
            {stars}★
          </span>
        )}
      </header>

      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </Link>
  ) : (
    card
  )
}
