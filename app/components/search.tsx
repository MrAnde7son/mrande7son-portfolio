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
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="px-2 py-1 rounded-md border bg-neutral-100 dark:bg-neutral-800"
      />
      {query && (
        <ul className="absolute right-0 mt-1 w-64 max-h-60 overflow-auto bg-white dark:bg-neutral-900 border rounded-md shadow-md z-50">
          {results.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className="block px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() => setQuery('')}
              >
                <div className="font-medium">{item.title}</div>
                {item.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-2 py-1 text-sm">No results.</li>
          )}
        </ul>
      )}
    </div>
  )
}

