import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Coders Show — From Campus to Career',
  description:
    'The Coders Show is a student-led technology talk show bringing students closer to developers, founders, researchers, designers, and industry professionals through authentic conversations and practical insights.',
  
  icons: {
    icon: [
      {
        url: 'public\images\tcs-logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'public\images\tcs-logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'public\images\tcs-logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'public\images\tcs-logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
