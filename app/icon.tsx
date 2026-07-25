import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 19,
          background: '#0a0d13',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#7fa5ff',
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        IM
      </div>
    ),
    { ...size }
  )
}
