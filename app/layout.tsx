import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/nav-bar'
import { AnimatedBackground } from '@/components/animated-background'

export const metadata: Metadata = {
  title: 'Cacao Health Detector',
  description: 'Innovation in Cocoa Plantation Monitoring',
  keywords: 'cacao, health, detector, plantation, monitoring, agriculture',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <NavBar />
        <AnimatedBackground />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
