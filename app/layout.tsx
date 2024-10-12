import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Guide - Discover Your Ideal Career Path',
  description: 'Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance with Career Guide.',
  openGraph: {
    title: 'Career Guide - Discover Your Ideal Career Path',
    description: 'Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance with Career Guide.',
    images: [{ url: '/og-image.jpg' }],
    type: 'website',
    url: 'https://your-career-guide-url.com', // Replace with your actual URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Guide - Discover Your Ideal Career Path',
    description: 'Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance with Career Guide.',
    images: ['/og-image.jpg'],
    creator: '@yourTwitterHandle', // Replace with your Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}