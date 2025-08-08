'use client'
import { useState } from 'react'

const initial = [10, 20, 30, 25, 15]

export default function InteractiveChart() {
  const [values, setValues] = useState(initial)
  const max = Math.max(...values)
  const width = 200
  const height = 100
  const barWidth = width / values.length - 10

  return (
    <svg
      width={width}
      height={height}
      onClick={() => setValues(values.map(() => Math.floor(Math.random() * 40) + 10))}
    >
      {values.map((v, i) => {
        const barHeight = (v / max) * height
        return (
          <rect
            key={i}
            x={i * (barWidth + 10)}
            y={height - barHeight}
            width={barWidth}
            height={barHeight}
            fill="var(--text)"
          />
        )
      })}
    </svg>
  )
}
