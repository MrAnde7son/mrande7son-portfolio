import { ImageResponse } from 'next/og'
import { person } from '../site'

export const runtime = 'edge'

const SITE = 'mrande7son.com'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')?.slice(0, 120) || person.name
  const subtitle =
    url.searchParams.get('subtitle')?.slice(0, 90) || person.status

  // Long titles need to step down a size or they overflow the card.
  const titleSize = title.length > 75 ? 52 : title.length > 45 ? 62 : 74

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '72px 80px',
          background: '#0a0d13',
          // Satori only parses a subset of CSS gradients — keep this to the
          // plain `linear-gradient(<angle>, <stops>)` form it supports.
          backgroundImage:
            'linear-gradient(135deg, #0a0d13 0%, #141d33 55%, #0a0d13 100%)',
          color: '#e9edf4',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#7fa5ff',
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#9aa4b8',
            }}
          >
            {SITE}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.8,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: '#9aa4b8' }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            paddingTop: 28,
            borderTop: '1px solid #232a38',
            fontSize: 24,
            color: '#9aa4b8',
          }}
        >
          <span style={{ color: '#e9edf4', fontWeight: 600 }}>
            {person.name}
          </span>
          <span>·</span>
          <span>{person.tagline}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
