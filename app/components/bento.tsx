'use client'
import React from 'react'

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>
}

export function BentoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-[var(--bg)] text-[var(--text)] ${className}`}
    >
      {children}
    </div>
  )
}
