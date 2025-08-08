import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

test('ProjectCard renders provided content', async () => {
  const { default: ProjectCard } = await import('./ProjectCard')
  const html = renderToStaticMarkup(
    <ProjectCard
      title="Demo"
      description="Description"
      tags={['a', 'b']}
      stars={100}
      href="https://example.com"
    />
  )
  assert.match(html, /Demo/)
  assert.match(html, /Description/)
  assert.match(html, /100/)
  assert.match(html, /a/)
  assert.match(html, /b/)
})
