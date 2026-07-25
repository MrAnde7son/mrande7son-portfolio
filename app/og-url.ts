/**
 * Builds the URL for the dynamic Open Graph image.
 *
 * Kept separate from the route handler so pages can import it without
 * pulling `next/og` (and the satori runtime) into their bundle.
 */
export function ogImageUrl(title: string, subtitle?: string) {
  const params = new URLSearchParams({ title })
  if (subtitle) params.set('subtitle', subtitle)
  return `/og?${params.toString()}`
}
