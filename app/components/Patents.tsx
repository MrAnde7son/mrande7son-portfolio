interface Patent {
  title: string
  number: string
  issuedOn: string
  url: string
}

const patents: Patent[] = [
  {
    title:
      'System, device, and method of determining cyber attack vectors and mitigating cyber attacks',
    number: 'US11563770B2',
    issuedOn: 'Apr 14, 2021',
    url: 'https://patents.google.com/patent/US11563770B2/en',
  },
]

export default function Patents() {
  return (
    <ul className="space-y-3">
      {patents.map((patent) => (
        <li key={patent.number}>
          <a
            href={patent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link group"
          >
            <article className="surface p-5">
              <h3 className="leading-snug font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                {patent.title}
              </h3>
              <p className="subtle mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="font-mono">{patent.number}</span>
                <span aria-hidden="true">·</span>
                <span>{`Issued ${patent.issuedOn}`}</span>
              </p>
            </article>
          </a>
        </li>
      ))}
    </ul>
  )
}
