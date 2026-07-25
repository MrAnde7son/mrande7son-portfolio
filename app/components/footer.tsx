import Link from 'next/link'
import { person, social } from '../site'

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

const elsewhere = [
  { href: social.linkedin, label: 'LinkedIn' },
  { href: social.github, label: 'GitHub' },
  { href: social.twitter, label: 'X' },
  { href: '/rss', label: 'RSS' },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-token">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="font-semibold tracking-tight">{person.name}</p>
            <p className="muted mt-2 text-sm leading-relaxed">
              {person.tagline}. Now building something new.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <FooterColumn title="Site">
              {siteLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="muted transition-colors hover:text-[var(--fg)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Elsewhere">
              {elsewhere.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="muted transition-colors hover:text-[var(--fg)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>

        <p className="subtle mt-10 border-t border-token pt-6 text-xs">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-wider uppercase">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm">{children}</ul>
    </div>
  )
}
