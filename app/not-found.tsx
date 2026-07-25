import Link from 'next/link'
import { Container } from './components/container'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

const suggestions = [
  { href: '/', label: 'Home', hint: 'Start from the top' },
  { href: '/blog', label: 'Writing', hint: 'Essays on exposure management' },
  { href: '/about', label: 'About', hint: 'Career, patents and open source' },
  { href: '/contact', label: 'Contact', hint: 'Speaking, mentoring, research' },
]

export default function NotFound() {
  return (
    <Container width="page" className="py-24">
      <p className="accent font-mono text-sm tracking-widest">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page does not exist
      </h1>
      <p className="muted mt-4 max-w-md leading-relaxed">
        The link may be out of date, or the page may have moved. Here is where
        everything else lives.
      </p>

      <ul className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
        {suggestions.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="card-link group">
              <span className="surface block p-4">
                <span className="block font-medium transition-colors group-hover:text-[var(--accent)]">
                  {item.label}
                </span>
                <span className="muted mt-1 block text-sm">{item.hint}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
