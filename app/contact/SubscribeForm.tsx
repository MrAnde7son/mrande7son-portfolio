'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setMessage('')
      } else {
        const data = await res.json().catch(() => null)
        setError(data?.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setError('Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="field"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message{' '}
          <span className="subtle font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What would you like to talk about?"
          className="field resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary"
      >
        {status === 'loading' ? 'Sending…' : 'Send'}
      </button>

      {/* Announced to assistive technology as soon as the result arrives. */}
      <p aria-live="polite" className="text-sm">
        {status === 'success' && (
          <span className="accent">Thanks — your message is on its way.</span>
        )}
        {status === 'error' && (
          <span className="text-red-600 dark:text-red-400">{error}</span>
        )}
      </p>
    </form>
  )
}
