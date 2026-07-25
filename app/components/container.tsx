import React from 'react'

const widths = {
  /** Long-form reading: ~70 characters per line. */
  prose: 'max-w-3xl',
  /** Default page width. */
  page: 'max-w-5xl',
  /** Landing page, where two columns of cards need the room. */
  wide: 'max-w-6xl',
} as const

export function Container({
  children,
  width = 'page',
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode
  width?: keyof typeof widths
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-6 ${widths[width]} ${className}`}>
      {children}
    </Tag>
  )
}

/** A titled page section with consistent vertical rhythm. */
export function Section({
  title,
  description,
  action,
  id,
  children,
  className = '',
}: {
  title: string
  description?: string
  action?: React.ReactNode
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="muted mt-1.5 max-w-2xl text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}
