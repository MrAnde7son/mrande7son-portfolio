import test from 'node:test'
import assert from 'node:assert/strict'
import {
  parseFrontmatter,
  formatDate,
  readingTime,
  relatedPosts,
  sortPostsByDate,
  stripDuplicateTitle,
} from './utils'

// Sample MDX content with front matter
const sample = `---
title: 'Hello'
description: 'World'
date: '2024-02-01'
image: 'test.png'
tags: security, leadership ,  ai safety
---
Content goes here`

test('parseFrontmatter parses metadata and content correctly', () => {
  const { metadata, content } = parseFrontmatter(sample)
  assert.deepStrictEqual(metadata, {
    title: 'Hello',
    description: 'World',
    date: '2024-02-01',
    image: 'test.png',
    tags: ['security', 'leadership', 'ai safety'],
  })
  assert.strictEqual(content, 'Content goes here')
})

test('parseFrontmatter returns empty metadata when frontmatter is missing', () => {
  const body = 'Just content'
  const { metadata, content } = parseFrontmatter(body)
  assert.deepStrictEqual(metadata, {})
  assert.strictEqual(content, 'Just content')
})

test('parseFrontmatter ignores malformed lines gracefully', () => {
  const malformed = `---\nnoColonLine\nvalid: true\n---\nBody`
  const { metadata, content } = parseFrontmatter(malformed)
  assert.deepStrictEqual(metadata, { valid: 'true' })
  assert.strictEqual(content, 'Body')
})

test('parseFrontmatter handles empty tags gracefully', () => {
  const malformedTags = `---\ntags:   ,   , security\n---\nBody`
  const { metadata, content } = parseFrontmatter(malformedTags)
  assert.deepStrictEqual(metadata, { tags: ['security'] })
  assert.strictEqual(content, 'Body')
})

test('formatDate handles dates within the same year', () => {
  const now = new Date()
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
  const iso = lastMonth.toISOString().split('T')[0]
  const formatted = formatDate(iso, true)
  const expectedPattern = now.getMonth() === 0 ? /\d+y ago\)$/ : /\d+mo ago\)$/
  assert.match(formatted, expectedPattern)
})

test('formatDate handles dates in previous years', () => {
  const lastYear = new Date(new Date().getFullYear() - 1, 0, 1)
  const iso = lastYear.toISOString().split('T')[0]
  const formatted = formatDate(iso, true)
  assert.match(formatted, /\d+y ago\)$/)
})

test('formatDate returns empty string for missing date', () => {
  const formatted = formatDate(undefined)
  assert.strictEqual(formatted, '')
})

test('readingTime counts words rather than characters', () => {
  // 400 words at 200 wpm is two minutes. The old implementation divided the
  // character count by 1000 and would have reported 2400/1000 -> 3.
  const content = Array.from({ length: 400 }, () => 'word').join(' ')
  assert.strictEqual(readingTime(content), 2)
})

test('readingTime never reports less than a minute', () => {
  assert.strictEqual(readingTime('a short note'), 1)
})

test('readingTime ignores fenced code blocks', () => {
  const prose = Array.from({ length: 200 }, () => 'word').join(' ')
  const code = '```\n' + Array.from({ length: 800 }, () => 'x').join(' ') + '\n```'
  assert.strictEqual(readingTime(`${prose}\n${code}`), 1)
})

test('stripDuplicateTitle removes a leading heading matching the title', () => {
  const content = '# Hello There\n\nBody text'
  assert.strictEqual(stripDuplicateTitle(content, 'Hello There'), 'Body text')
})

test('stripDuplicateTitle keeps headings that differ from the title', () => {
  const content = '# Something Else\n\nBody text'
  assert.strictEqual(stripDuplicateTitle(content, 'Hello There'), content)
})

test('stripDuplicateTitle tolerates punctuation differences', () => {
  const content = '# AI: Exposure & Risk\n\nBody'
  assert.strictEqual(stripDuplicateTitle(content, 'AI Exposure & Risk!'), 'Body')
  assert.strictEqual(stripDuplicateTitle(content, 'A Different Title'), content)
})

test('stripDuplicateTitle is a no-op without a title', () => {
  const content = '# Heading\n\nBody'
  assert.strictEqual(stripDuplicateTitle(content, undefined), content)
})

test('sortPostsByDate orders newest first and does not mutate the input', () => {
  const posts = [
    { slug: 'a', metadata: { date: '2024-01-01' } },
    { slug: 'b', metadata: { date: '2024-06-01' } },
    { slug: 'c', metadata: {} },
  ]
  const sorted = sortPostsByDate(posts)
  assert.deepStrictEqual(
    sorted.map((post) => post.slug),
    ['b', 'a', 'c']
  )
  assert.strictEqual(posts[0].slug, 'a')
})

test('relatedPosts prefers posts sharing the most tags', () => {
  const post = {
    slug: 'source',
    metadata: { tags: ['ai', 'ctem'], date: '2024-05-01' },
  }
  const all = [
    post,
    { slug: 'none', metadata: { tags: ['ux'], date: '2024-04-01' } },
    { slug: 'both', metadata: { tags: ['ai', 'ctem'], date: '2024-01-01' } },
    { slug: 'one', metadata: { tags: ['ai'], date: '2024-03-01' } },
  ]

  const related = relatedPosts(post, all, 2)
  assert.deepStrictEqual(
    related.map((entry) => entry.slug),
    ['both', 'one']
  )
})

test('relatedPosts never returns the post itself', () => {
  const post = {
    slug: 'source',
    metadata: { tags: ['ai'], date: '2024-05-01' },
  }
  assert.deepStrictEqual(relatedPosts(post, [post], 2), [])
})
