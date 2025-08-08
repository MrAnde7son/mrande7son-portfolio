'use client'
import React from 'react'

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 max-w-7xl mx-auto">
      {children}
    </div>
  )
}

export function BentoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 ${className}`}
    >
      {children}
    </div>
  )
}
