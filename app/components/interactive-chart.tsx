'use client'
import { useState } from 'react'

const initial = [
  { label: 'Proj 1', value: 10 },
  { label: 'Proj 2', value: 20 },
  { label: 'Proj 3', value: 30 },
  { label: 'Proj 4', value: 25 },
  { label: 'Proj 5', value: 15 },
]

export default function InteractiveChart() {
  const [data, setData] = useState(initial)
  const max = Math.max(...data.map((d) => d.value))
  const width = 240
  const height = 120
  const marginBottom = 20
  const barWidth = width / data.length - 10

  return (
    <svg
      width={width}
      height={height}
      onClick={() =>
        setData(
          data.map((d) => ({
            ...d,
            value: Math.floor(Math.random() * 40) + 10,
          }))
        )
      }
    >
      <line
        x1={0}
        y1={height - marginBottom}
        x2={width}
        y2={height - marginBottom}
        stroke="var(--text)"
      />
      {data.map((d, i) => {
        const barHeight = (d.value / max) * (height - marginBottom)
        const x = i * (barWidth + 10)
        const y = height - marginBottom - barHeight
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill="var(--text)"
            >
              <title>{`${d.label}: ${d.value}`}</title>
            </rect>
            <text
              x={x + barWidth / 2}
              y={height - 5}
              textAnchor="middle"
              fontSize={10}
              fill="var(--text)"
            >
              {d.label}
            </text>
          </g>
        )
      })}
      <text
        x={width / 2}
        y={height}
        textAnchor="middle"
        fontSize={12}
        fill="var(--text)"
      >
        Projects
      </text>
    </svg>
  )
}
