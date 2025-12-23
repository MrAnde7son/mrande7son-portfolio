import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import PostCard from './PostCard'

test('PostCard renders tags and formatted date', () => {
  const html = renderToStaticMarkup(
    <PostCard
      title="Example Post"
      description="A quick look at AI security."
      date="2024-03-01"
      href="/blog/example-post"
      tags={['AI Security', 'Exposure Management']}
    />
  )

  assert.match(html, /Example Post/)
  assert.match(html, /AI Security/)
  assert.match(html, /Exposure Management/)
  assert.match(html, /2024/)
})
