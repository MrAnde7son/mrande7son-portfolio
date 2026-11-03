import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from './theme-context'
import { person, social } from './site'
import { ogImageUrl } from './og-url'

const title = 'Itamar Mizrahi – Cybersecurity Founder'
const description =
  'Itamar Mizrahi: co-founder of Cymptom (acquired by Tenable), former VP Engineering for Tenable One, now founder of a company in stealth.'

const homeOgImage = ogImageUrl(person.name, person.tagline)

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: '%s | Itamar Mizrahi',
  },
  description,
  keywords: [
    'Itamar Mizrahi',
    'cybersecurity founder',
    'exposure management',
    'attack path analysis',
    'CTEM',
    'AI security',
    'Cymptom',
    'Tenable',
    'security product development',
  ],
  authors: [{ name: person.name, url: baseUrl }],
  creator: person.name,
  publisher: person.name,
  category: 'Technology',
  manifest: '/site.webmanifest',
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: person.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: `${person.name} – ${person.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [homeOgImage],
    creator: social.twitterHandle,
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
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0d13' },
  ],
}

/*
 * Runs before first paint so the resolved theme is on <html> for the very
 * first frame — no flash, and the `dark:` variants (keyed on data-theme in
 * global.css) agree with the toggle from the start.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseUrl}/#person`,
  name: person.name,
  jobTitle: person.role,
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Tenable',
      url: 'https://www.tenable.com',
    },
    {
      '@type': 'Organization',
      name: 'Cymptom',
      description: 'Exposure validation platform (acquired by Tenable)',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'The College of Management – Academic Studies',
    },
  ],
  description,
  url: baseUrl,
  image: `${baseUrl}/itamar-mizrahi.jpg`,
  sameAs: [social.linkedin, social.github, social.twitter],
  knowsAbout: [
    'Exposure Management',
    'Attack Path Analysis',
    'Continuous Threat Exposure Management',
    'AI Security',
    'Security Product Development',
    'Engineering Leadership',
  ],
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: `${person.name} – ${person.role}`,
  description,
  inLanguage: 'en-US',
  publisher: { '@id': `${baseUrl}/#person` },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-auto w-full">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
