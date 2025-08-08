'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SearchItem, searchItems } from '../../lib/search'

export default function Search() {
  const [data, setData] = useState<SearchItem[]>([])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])

  useEffect(() => {
    fetch('/api/search')
      .then((res) => res.json())
      .then((items: SearchItem[]) => setData(items))
  }, [])

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
    setResults(searchItems(data, query))
  }, [query, data])

  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500 dark:text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 2a6.5 6.5 0 104.033 11.593l4.437 4.437a.75.75 0 101.06-1.06l-4.437-4.438A6.5 6.5 0 008.5 2zm0 1.5a5 5 0 100 10 5 5 0 000-10z"
        />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-32 sm:w-48 md:w-64 rounded-md border border-neutral-200 bg-neutral-50 px-8 py-1.5 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-700"
      />
      {query && (
        <ul className="absolute right-0 mt-2 max-h-60 w-64 overflow-auto rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900 z-50">
          {results.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className="block px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() => setQuery('')}
              >
                <div className="font-medium text-neutral-800 dark:text-white">{item.title}</div>
                {item.description && (
                  <p className="text-neutral-600 dark:text-white">
                    {item.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-neutral-600 dark:text-white">
              No results.
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

