import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  stars?: number
  href?: string
  className?: string
}

/** 14600 -> "14.6k", 1000 -> "1k", 950 -> "950" */
function formatStars(stars: number) {
  if (stars < 1000) return String(stars)
  const thousands = stars / 1000
  return `${thousands % 1 === 0 ? thousands : thousands.toFixed(1)}k`
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
    <article className="surface flex h-full flex-col p-5">
      <header className="flex items-start gap-3">
        <h3 className="min-w-0 flex-1 text-base leading-snug font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {title}
        </h3>
        {stars !== undefined && (
          <span
            className="subtle inline-flex shrink-0 items-center gap-1 text-xs"
            title={`${stars.toLocaleString('en-US')} GitHub stars`}
          >
            <StarIcon className="h-3.5 w-3.5" />
            {formatStars(stars)}
          </span>
        )}
        {href && (
          <ExternalIcon className="subtle mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors group-hover:text-[var(--accent)]" />
        )}
      </header>

      <p className="muted mt-2 line-clamp-3 text-sm leading-relaxed">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-link group ${className}`}
    >
      {card}
    </Link>
  ) : (
    <div className={className}>{card}</div>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3-1.11-6.47L.38 9.35l6.5-.95L12 2.5z" />
    </svg>
  )
}

function ExternalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}
