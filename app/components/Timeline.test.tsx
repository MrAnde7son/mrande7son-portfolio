import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Timeline from './Timeline'

test('Timeline renders all timeline entries', () => {
  const html = renderToStaticMarkup(<Timeline />)
  const matches = html.match(/<time/g) ?? []
  assert.equal(matches.length, 5)
  assert.match(html, /VP Product Growth @ Tenable/)
})
