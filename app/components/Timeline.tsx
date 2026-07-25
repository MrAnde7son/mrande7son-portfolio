import { roles } from '../../lib/career'

/**
 * A single vertical rail. The previous alternating two-column layout left
 * large empty gaps and made the reading order ambiguous; one column scans
 * top-to-bottom at every breakpoint.
 *
 * Deliberately a server component with no scroll-reveal: the entries are the
 * content, so they render immediately rather than depending on JavaScript.
 */
export default function Timeline() {
  return (
    <ol className="relative space-y-1">
      {/* Decorative rail; the list itself carries the semantics. */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--border)]"
      />

      {roles.map((role) => (
        <li key={role.label} className="relative pb-7 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-[7px] left-0 h-[15px] w-[15px] rounded-full border-2 border-[var(--bg)] bg-[var(--border-strong)]"
          />
          <time
            dateTime={role.start}
            className="subtle font-mono text-xs tracking-wide"
          >
            {role.period}
          </time>
          <h3 className="mt-1 leading-snug font-semibold tracking-tight">
            {role.label}
          </h3>
          {role.note && (
            <span className="chip chip-accent mt-2 font-medium">{role.note}</span>
          )}
          <p className="muted mt-1.5 text-sm leading-relaxed">{role.summary}</p>
        </li>
      ))}
    </ol>
  )
}
