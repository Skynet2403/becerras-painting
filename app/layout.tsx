import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: 'ColorCraft Pro | Painting & Remodeling',
  description:
    'We transform your home with professional painting and remodeling services. Check out our portfolio of completed projects.',
}

export const viewport: Viewport = {
  themeColor: '#d4762e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${dmSans.variable}
          ${playfair.variable}
          font-sans
          antialiased
          min-h-screen
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}