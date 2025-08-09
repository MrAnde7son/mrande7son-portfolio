'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from './search'
import { useTheme } from '../theme-context'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/contact': {
    name: 'contact',
  },
}

export function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex items-center justify-between w-full rounded-full border border-neutral-200 bg-white/60 px-4 py-2 shadow-md backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
          id="nav"
        >
          <div className="flex items-center space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path)
              return (
                <Link
                  key={path}
                  href={path}
                  className={`capitalize px-3 py-1.5 text-sm transition-colors rounded-full ${
                    isActive
                      ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                      : 'text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center space-x-2">
            <button
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-600 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
            >
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
            <Search />
          </div>
        </nav>
      </div>
    </aside>
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
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
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
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

