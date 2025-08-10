import test from 'node:test'
import assert from 'node:assert/strict'
import { POST } from './route'

const buildRequest = (body: any) =>
  new Request('http://localhost/api/subscribe', {
    method: 'POST',
    body: JSON.stringify(body),
  })

test('POST requires email', async () => {
  const res = await POST(buildRequest({}))
  assert.equal(res.status, 400)
  const data = await res.json()
  assert.equal(data.error, 'Email is required')
})

test('POST fails when RESEND_API_KEY is missing', async () => {
  const res = await POST(buildRequest({ email: 'user@example.com' }))
  assert.equal(res.status, 500)
  const data = await res.json()
  assert.equal(data.error, 'Server configuration error')
})

test('POST sends email when RESEND_API_KEY is set', async () => {
  process.env.RESEND_API_KEY = 'test-key'
  const originalFetch = global.fetch
  global.fetch = async () => new Response(null, { status: 200 })

  try {
    const res = await POST(buildRequest({ email: 'user@example.com' }))
    assert.equal(res.status, 200)
    const data = await res.json()
    assert.deepEqual(data, { success: true })
  } finally {
    global.fetch = originalFetch
    delete process.env.RESEND_API_KEY
  }
})
