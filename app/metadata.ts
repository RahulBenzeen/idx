import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Rahul Bhardwaj | Developer',
    template: '%s | Rahul Bhardwaj'
  },
  description: 'Full Stack Developer with over 3 years of experience in web development, specializing in building scalable, high-performance applications using cutting-edge technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Web Development', 'JavaScript', 'Frontend', 'Backend'],
  authors: [{ name: 'Rahul Bhardwaj', url: 'https://www.rahulbhardwaj.tech' }],
  creator: 'Rahul Bhardwaj',
  publisher: 'Rahul Bhardwaj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rahulbhardwaj.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rahul Bhardwaj | Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and Next.js',
    url: 'https://www.rahulbhardwaj.tech',
    siteName: 'Rahul Bhardwaj Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rahulbhardwaj.tech',
        width: 1200,
        height: 630,
        alt: 'Rahul Bhardwaj - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Bhardwaj | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and Next.js',
    creator: '@rahulbhardwaj',
    images: ['https://www.rahulbhardwaj.tech'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}