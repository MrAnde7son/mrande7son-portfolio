import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Itamar Mizrahi — Cybersecurity Leader, VP Engineering @ Tenable',
    template: '%s | Itamar Mizrahi',
  },
  description: 'Tech entrepreneur, open-source creator, and VP Engineering leading exposure management at Tenable. Former Co-founder and CEO of Cymptom (acquired by Tenable).',
  keywords: ['cybersecurity', 'engineering leadership', 'Tenable', 'Cymptom', 'attack path validation', 'VP Engineering', 'security entrepreneur'],
  authors: [{ name: 'Itamar Mizrahi' }],
  creator: 'Itamar Mizrahi',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Itamar Mizrahi — Cybersecurity Leader, VP Engineering @ Tenable',
    description: 'Tech entrepreneur, open-source creator, and VP Engineering leading exposure management at Tenable. Former Co-founder and CEO of Cymptom (acquired by Tenable).',
    url: baseUrl,
    siteName: 'Itamar Mizrahi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og`,
        width: 1200,
        height: 630,
        alt: 'Itamar Mizrahi - Cybersecurity Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itamar Mizrahi — Cybersecurity Leader, VP Engineering @ Tenable',
    description: 'Tech entrepreneur, open-source creator, and VP Engineering leading exposure management at Tenable.',
    images: [`${baseUrl}/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
