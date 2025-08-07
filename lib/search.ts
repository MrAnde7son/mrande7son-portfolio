export type SearchItem = {
  title: string
  description?: string
  url: string
  content?: string
  score?: number
}

export function searchItems(items: SearchItem[], query: string) {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  return items
    .map((item) => {
      const haystack = [item.title, item.description, item.content]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      const score = tokens.reduce(
        (sum, token) => sum + (haystack.includes(token) ? 1 : 0),
        0
      )
      return { ...item, score }
    })
    .filter((item) => item.score && item.score > 0)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
}
