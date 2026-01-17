import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Patents from './Patents'

test('Patents renders the patent entry with metadata', () => {
  const html = renderToStaticMarkup(<Patents />)
  assert.match(html, /System, device, and method of determining cyber attack vectors/)
  assert.match(html, /US11563770B2/)
  assert.match(html, /Issued Apr 14, 2021/)
})
