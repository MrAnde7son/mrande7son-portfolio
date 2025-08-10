import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let email: string | undefined
  let message: string | undefined

  try {
    ;({ email, message } = await request.json())
  } catch (err) {
    console.error('Invalid JSON payload', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!email || !message) {
    return NextResponse.json(
      { error: 'Email and message are required' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
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
        text: message,
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Failed to send email', text)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error('Failed to send email', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
