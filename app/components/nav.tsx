'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from './search'
import { useTheme } from '../theme-context'
import { person } from '../site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-token bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="mr-1 hidden shrink-0 rounded-md text-sm font-semibold tracking-tight sm:block sm:text-base"
        >
          {person.name}
        </Link>

        <nav aria-label="Main" className="min-w-0 flex-1">
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-full px-2.5 py-1.5 text-sm whitespace-nowrap transition-colors sm:px-3 ${
                      isActive
                        ? 'bg-[var(--surface-2)] font-medium text-[var(--fg)]'
                        : 'muted hover:bg-[var(--surface-2)] hover:text-[var(--fg)]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme()
  // Before mount the correct icon is unknowable, so render a stable
  // placeholder of the same size — no hydration mismatch, no layout shift.
  const label = mounted
    ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
    : 'Toggle theme'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="muted rounded-full p-2 transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--fg)]"
    >
      {mounted && theme === 'dark' ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
