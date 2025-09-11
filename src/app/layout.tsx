import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Creative Agency - Professional Web Solutions',
  description: 'Leading digital agency specializing in web development, UI/UX design, digital marketing, and branding solutions. Transform your business with our creative expertise.',
  keywords: 'digital agency, web development, UI/UX design, digital marketing, branding, creative solutions',
  authors: [{ name: 'Digital Creative Agency' }],
  openGraph: {
    title: 'Digital Creative Agency - Professional Web Solutions',
    description: 'Leading digital agency specializing in web development, UI/UX design, digital marketing, and branding solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Creative Agency - Professional Web Solutions',
    description: 'Leading digital agency specializing in web development, UI/UX design, digital marketing, and branding solutions.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}