import test from 'node:test'
import assert from 'node:assert/strict'
import { GET } from './route'

test('GET combines static pages and blog posts', async () => {
  const res = await GET(new Request('http://localhost/api/search'))
  const data = await res.json()
  assert.ok(Array.isArray(data))
  assert.ok(data.some((item: any) => item.url === '/'))
  assert.ok(data.some((item: any) => item.url.startsWith('/blog/')))
  assert.ok(
    data.some(
      (item: any) => item.url === 'https://github.com/fortra/impacket'
    )
  )
})

test('GET filters results by query', async () => {
  const res = await GET(
    new Request('http://localhost/api/search?q=impacket')
  )
  const data = await res.json()
  assert.ok(data.some((item: any) => item.url === 'https://github.com/fortra/impacket'))
  assert.ok(!data.some((item: any) => item.url === '/'))
})

