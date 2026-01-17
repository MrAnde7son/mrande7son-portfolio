class PatentEntry {
  readonly title: string
  readonly number: string
  readonly issuedOn: string

  constructor(title: string, number: string, issuedOn: string) {
    this.title = title
    this.number = number
    this.issuedOn = issuedOn
  }

  get issuedLabel() {
    return `Issued ${this.issuedOn}`
  }
}

const patents = [
  new PatentEntry(
    'System, device, and method of determining cyber attack vectors and mitigating cyber attacks',
    'US11563770B2',
    'Apr 14, 2021'
  ),
]

export default function Patents() {
  return (
    <div className="space-y-6">
      {patents.map((patent) => (
        <article key={patent.number} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{patent.title}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-white">
            {patent.number} · {patent.issuedLabel}
          </p>
        </article>
      ))}
    </div>
  )
}
