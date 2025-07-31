import { describe, it, expect } from 'vitest'
import { parseFrontmatter, formatDate } from './utils'

// Sample MDX content with front matter
const sample = `---
title: 'Hello'
description: 'World'
date: '2024-02-01'
image: 'test.png'
---
Content goes here`

describe('parseFrontmatter', () => {
  it('parses metadata and content correctly', () => {
    const { metadata, content } = parseFrontmatter(sample)
    expect(metadata).toEqual({
      title: 'Hello',
      description: 'World',
      date: '2024-02-01',
      image: 'test.png'
    })
    expect(content).toBe('Content goes here')
  })
})

describe('formatDate', () => {
  it('handles dates within the same year', () => {
    const now = new Date()
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
    const iso = lastMonth.toISOString().split('T')[0]
    const formatted = formatDate(iso, true)
    expect(formatted).toMatch(/\d+mo ago\)$/)
  })

  it('handles dates in previous years', () => {
    const lastYear = new Date(new Date().getFullYear() - 1, 0, 1)
    const iso = lastYear.toISOString().split('T')[0]
    const formatted = formatDate(iso, true)
    expect(formatted).toMatch(/\d+y ago\)$/)
  })
})
