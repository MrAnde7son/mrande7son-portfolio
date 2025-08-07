import test from 'node:test'
import assert from 'node:assert/strict'
import { searchItems, SearchItem } from './search'

test('searchItems ranks and filters results', () => {
  const items: SearchItem[] = [
    { title: 'Hello World', url: '/hello', description: 'greeting' },
    { title: 'About Me', url: '/about', description: 'bio' },
    { title: 'Hello Again', url: '/hello-again', description: 'another greeting' }
  ]

  const results = searchItems(items, 'hello')
  assert.strictEqual(results.length, 2)
  assert.ok(results[0].url.startsWith('/hello'))
})

test('searchItems returns empty array when no matches', () => {
  const items: SearchItem[] = [
    { title: 'Foo', url: '/foo' }
  ]
  const results = searchItems(items, 'bar')
  assert.deepStrictEqual(results, [])
})

