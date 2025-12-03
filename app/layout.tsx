import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LoadingProvider } from "@/components/loading-provider"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Santhrupthi Boys PG | Premium Student Living",
  description: "Experience comfort in premium paying guest accommodations designed for students.",
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${_playfair.variable} ${_inter.variable} font-sans antialiased bg-background overflow-x-hidden`}
      >
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
