import test from 'node:test'
import assert from 'node:assert/strict'
import { parseFrontmatter, formatDate } from './utils'

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
