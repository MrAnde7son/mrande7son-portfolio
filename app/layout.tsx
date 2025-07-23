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
    default: 'Itamar Mizrahi – Cybersecurity Entrepreneur | VP Engineering',
    template: '%s | Itamar Mizrahi',
  },
  description: 'Itamar Mizrahi is a cybersecurity entrepreneur and technology leader. Co-founder of Cymptom (acquired by Tenable), he leads innovation in exposure management, AI security, and attack path analysis.',
  keywords: [
    'cybersecurity entrepreneur',
    'VP Engineering',
    'Tenable',
    'Cymptom',
    'attack path analysis',
    'exposure management',
    'AI security',
    'cybersecurity speaker',
    'security technology leader',
    'cybersecurity innovation',
    'attack path validation',
    'security product development'
  ],
  authors: [{ name: 'Itamar Mizrahi' }],
  creator: 'Itamar Mizrahi',
  publisher: 'Itamar Mizrahi',
  category: 'Technology',
  classification: 'Cybersecurity',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Itamar Mizrahi – Cybersecurity Entrepreneur',
    description: 'Former CEO and Co-founder of Cymptom, now VP Engineering at Tenable. Driving innovation in cybersecurity, AI risk, and exposure management.',
    url: baseUrl,
    siteName: 'Itamar Mizrahi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og`,
        width: 1200,
        height: 630,
        alt: 'Itamar Mizrahi - Cybersecurity Entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itamar Mizrahi – Cybersecurity Entrepreneur',
    description: 'Former CEO and Co-founder of Cymptom, VP Engineering at Tenable. Cybersecurity thought leader.',
    images: [`${baseUrl}/og`],
    creator: '@MrAnde7son',
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
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Itamar Mizrahi",
              "jobTitle": "VP Engineering",
              "worksFor": {
                "@type": "Organization",
                "name": "Tenable",
                "url": "https://www.tenable.com"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Cymptom",
                "description": "Exposure validation platform (acquired by Tenable)"
              },
              "description": "Cybersecurity entrepreneur and technology leader. Co-founder & CEO of Cymptom, now VP Engineering at Tenable.",
              "url": baseUrl,
              "sameAs": [
                "https://www.linkedin.com/in/itamarmizrahi/",
                "https://github.com/MrAnde7son/MrAnde7son"
              ],
              "knowsAbout": [
                "Cybersecurity",
                "Attack Path Analysis",
                "Exposure Management",
                "AI Security",
                "Security Product Development",
                "Engineering Leadership"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "VP Engineering",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Tenable"
                }
              },
              "image": `${baseUrl}/itamar-mizrahi.jpg`
            })
          }}
        />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Itamar Mizrahi - Cybersecurity Entrepreneur",
              "url": baseUrl,
              "logo": `${baseUrl}/itamar-mizrahi.jpg`,
              "description": "Personal website and blog of Itamar Mizrahi, cybersecurity entrepreneur and VP Engineering at Tenable.",
              "founder": {
                "@type": "Person",
                "name": "Itamar Mizrahi"
              },
              "sameAs": [
                "https://www.linkedin.com/in/itamarmizrahi/",
                "https://github.com/MrAnde7son/MrAnde7son"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
