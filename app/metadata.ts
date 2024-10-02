import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Rahul Bhardwaj | Developer Portfolio',
    template: '%s | Rahul Bhardwaj Portfolio'
  },
  description: 'Explore the portfolio of Rahul Bhardwaj, a Full Stack Developer with over 3 years of experience in React, Node.js, and Next.js. View projects, skills, and contact information.',
  keywords: ['Rahul Bhardwaj', 'Portfolio', 'Full Stack Developer', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Web Development', 'JavaScript', 'Frontend', 'Backend'],
  authors: [{ name: 'Rahul Bhardwaj', url: 'https://rahulbhardwaj.tech' }],
  creator: 'Rahul Bhardwaj',
  publisher: 'Rahul Bhardwaj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rahulbhardwaj.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rahul Bhardwaj | Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Rahul Bhardwaj, a Full Stack Developer specializing in React, Node.js, and Next.js',
    url: 'https://rahulbhardwaj.tech',
    siteName: 'Rahul Bhardwaj Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://rahulbhardwaj.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rahul Bhardwaj - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Bhardwaj | Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Rahul Bhardwaj, a Full Stack Developer specializing in React, Node.js, and Next.js',
    creator: '@rahulbhardwaj',
    images: ['https://rahulbhardwaj.tech/twitter-image.jpg'],
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
    google: 'your-google-site-verification-code',
    // bing: 'your-bing-site-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}