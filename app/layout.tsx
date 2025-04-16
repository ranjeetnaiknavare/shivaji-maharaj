import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnnouncementBar from "@/components/announcement-bar"
import Navbar from "@/components/navbar"
import HistoricalInsightsTicker from "@/components/historical-insights-ticker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shivaji The Great: The Legendary Maratha Warrior King & Empire Builder",
  description:
    "Discover why Chhatrapati Shivaji Maharaj is called 'The Great' - a military genius, visionary ruler, and founder of the Maratha Empire who challenged the mighty Mughals and established a progressive kingdom in 17th century India.",
  keywords:
    "Shivaji The Great, Chhatrapati Shivaji Maharaj, Maratha Empire, Indian history, Raigad Fort, Maratha warrior, Hindavi Swarajya, Indian freedom struggle",
  openGraph: {
    title: "Shivaji The Great: The Legendary Maratha Warrior King",
    description:
      "Explore the extraordinary life, military conquests, and progressive governance of the founder of the Maratha Empire who challenged the mighty Mughals.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shivaji_British_Museum.jpg-l4GEH799GvKBDe9rhYgRCjiZVeHSMA.jpeg",
        width: 1200,
        height: 630,
        alt: "Chhatrapati Shivaji Maharaj Portrait",
      },
    ],
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <Navbar />
        <HistoricalInsightsTicker />
        {children}
      </body>
    </html>
  )
}


import './globals.css'