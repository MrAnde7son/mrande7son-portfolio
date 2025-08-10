import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, message } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['mizrahi.itamar@gmail.com'],
      reply_to: email,
      subject: 'New contact subscription',
      text: message ?? 'New subscriber',
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Failed to send email', text)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
