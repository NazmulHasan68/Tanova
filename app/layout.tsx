import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

// Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Metadata for SEO & OG
export const metadata: Metadata = {
  title: 'Tanova | Premium Leather Sourcing',
  description: "Global sourcing of the world's finest leather ...",
  icons: {
    icon: '/favicon.png',   // <--- main favicon
    shortcut: '/favicon.png', // optional shortcut
    apple: '/apple-touch-icon.png', // optional iOS
  },
  openGraph: {
    title: 'Tanova | Premium Leather Sourcing',
    description: "...",
    type: 'website',
    images: ['/favicon.png'], // OG image
  },
}

// Viewport & theme colors
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1825' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* ThemeProvider wraps the entire app for dark/light mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* You can optionally wrap certain sections with providers here */}
          {children}

          {/* Global UI components */}
          <Toaster />
        </ThemeProvider>

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}