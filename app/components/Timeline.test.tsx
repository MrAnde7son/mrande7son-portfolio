import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Timeline from './Timeline'
import { roles } from '../../lib/career'

test('Timeline renders one dated entry per role', () => {
  const html = renderToStaticMarkup(<Timeline />)
  const matches = html.match(/<time/g) ?? []
  assert.equal(matches.length, roles.length)
})

test('Timeline leads with the current role and ends where the career started', () => {
  const html = renderToStaticMarkup(<Timeline />)
  assert.match(html, /Founder — stealth/)
  assert.match(html, /Security Researcher @ IDF/)
  // The IDF entry is the 2011 start date the site claims 15+ years from.
  assert.match(html, /2011 — 2015/)
  assert.ok(
    html.indexOf('Founder') < html.indexOf('Security Researcher @ IDF'),
    'roles should render newest first'
  )
})
