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

test('ProjectCard tag pills include dark mode border styling', async () => {
  const { default: ProjectCard } = await import('./ProjectCard')
  const html = renderToStaticMarkup(
    <ProjectCard
      title="Tag Styling"
      description="Check tag classes"
      tags={['tag']}
    />
  )
  assert.match(html, /border-neutral-200/)
  assert.match(html, /dark:border-neutral-700/)
})
