'use client'
import { useEffect, useRef, useState } from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'VP Product Growth @ Tenable',
    description:
      'Leading product growth strategy and execution for Tenable\'s Exposure Management platform.',
  },
  {
    year: '2022-2025',
    title: 'VP Engineering @ Tenable',
    description:
      'Scaled a global team and integrated Cymptom\'s technology into Tenable One and Attack Path Analysis.',
  },
  {
    year: '2019-2022',
    title: 'Co-founder & CEO @ Cymptom',
    description:
      'Built Cymptom from concept to acquisition, enabling organizations to eliminate attack paths.',
  },
  {
    year: '2017-2020',
    title: 'Instructor @ John Bryce',
    description:
      'Provided cybersecurity training for SOC analysts and security professionals.',
  },
  {
    year: '2015-2017',
    title: 'Red Team Specialist @ CyberArk',
    description:
      'Conducted red team assessments for Fortune 500 companies.',
  },
  {
    year: '2011-2015',
    title: 'Security Researcher @ IDF',
    description:
      'Founded a cybersecurity department within a classified unit, focused on mission-critical security research.',
  },
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative py-8 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:gap-8">
            <div
              className={
                index % 2 === 0
                  ? 'md:col-start-1 md:pr-8 md:text-right text-left'
                  : 'md:col-start-2 md:pl-8 text-left'
              }
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <time className="text-sm text-neutral-500 dark:text-white">{item.year}</time>
                <h3 className="font-medium text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-neutral-600 dark:text-white text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
