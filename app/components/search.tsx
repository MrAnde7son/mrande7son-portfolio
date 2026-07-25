'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { SearchItem } from '../../lib/search'

const MAX_RESULTS = 6

function useSearch(query: string, enabled: boolean) {
  const [results, setResults] = useState<SearchItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const trimmed = query.trim()
    if (!enabled || trimmed.length < 2) {
      setResults([])
      setLoading(false)
      return
    }

    const controller = new AbortController()
    setLoading(true)
    // Debounce so typing does not fire a request per keystroke.
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(trimmed)}`, {
        signal: controller.signal,
      })
        .then((res) => (res.ok ? res.json() : []))
        .then((items: SearchItem[]) => {
          setResults(items.slice(0, MAX_RESULTS))
          setLoading(false)
        })
        .catch((error) => {
          if (error?.name === 'AbortError') return
          setResults([])
          setLoading(false)
        })
    }, 180)

    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [query, enabled])

  return { results, loading }
}

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const router = useRouter()
  const listId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { results, loading } = useSearch(query, open)
  const showPanel = open && query.trim().length >= 2

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(-1)
  }, [])

  // Close when focus or a click leaves the widget.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close()
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [open, close])

  // "/" focuses search the way most docs sites do.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const typingElsewhere =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      if (event.key === '/' && !typingElsewhere) {
        event.preventDefault()
        setOpen(true)
        // Wait for the input to exist before focusing it.
        requestAnimationFrame(() => inputRef.current?.focus())
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    setActiveIndex(-1)
  }, [results])

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      close()
      inputRef.current?.blur()
      return
    }
    if (!results.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % results.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (index <= 0 ? results.length - 1 : index - 1))
    } else if (event.key === 'Enter') {
      const item = results[activeIndex] ?? results[0]
      if (!item) return
      event.preventDefault()
      close()
      if (item.url.startsWith('http')) {
        window.open(item.url, '_blank', 'noopener,noreferrer')
      } else {
        router.push(item.url)
      }
    }
  }

  return (
    <div ref={containerRef} className="relative">
      {!open ? (
        <button
          type="button"
          aria-label="Search this site"
          title="Search (press /)"
          onClick={() => {
            setOpen(true)
            requestAnimationFrame(() => inputRef.current?.focus())
          }}
          className="muted rounded-full p-2 transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--fg)]"
        >
          <SearchIcon className="h-[18px] w-[18px]" />
        </button>
      ) : (
        <div className="relative">
          <SearchIcon className="subtle pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-label="Search posts, projects and pages"
            aria-activedescendant={
              activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined
            }
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search…"
            className="field w-40 pl-8 sm:w-56"
          />
        </div>
      )}

      {showPanel && (
        <div
          className="surface absolute right-0 top-full z-50 mt-2 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden p-1"
          style={{ boxShadow: 'var(--shadow-card-hover)' }}
        >
          <ul id={listId} role="listbox" aria-label="Search results">
            {results.map((item, index) => (
              <li key={item.url} role="none">
                <a
                  id={`${listId}-option-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  href={item.url}
                  {...(item.url.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={close}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`block rounded-lg px-3 py-2 transition-colors ${
                    index === activeIndex ? 'bg-[var(--surface-2)]' : ''
                  }`}
                >
                  <span className="block truncate text-sm font-medium">
                    {item.title}
                  </span>
                  {item.description && (
                    <span className="muted mt-0.5 block truncate text-xs">
                      {item.description}
                    </span>
                  )}
                </a>
              </li>
            ))}
            {!results.length && (
              <li className="muted px-3 py-3 text-sm" role="none">
                {loading ? 'Searching…' : `No results for “${query.trim()}”`}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 2a6.5 6.5 0 104.033 11.593l4.437 4.437a.75.75 0 101.06-1.06l-4.437-4.438A6.5 6.5 0 008.5 2zm0 1.5a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  )
}
