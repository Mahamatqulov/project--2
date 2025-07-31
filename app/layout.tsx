import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoQuest - Gamified Sustainability Platform",
  description:
    "Transform your environmental impact through gamified challenges, AI-powered insights, and a thriving community of changemakers. Join 50K+ eco warriors making a real difference.",
  keywords: "sustainability, environment, gamification, carbon footprint, eco challenges, climate action, green living",
  authors: [{ name: "EcoQuest Team" }],
  creator: "EcoQuest",
  publisher: "EcoQuest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ecoquest.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EcoQuest - Turn Sustainability Into an Epic Quest",
    description:
      "Join 50K+ eco warriors in gamified environmental challenges. Track your impact, earn rewards, and help save the planet.",
    url: "https://ecoquest.app",
    siteName: "EcoQuest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoQuest - Gamified Sustainability Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoQuest - Turn Sustainability Into an Epic Quest",
    description:
      "Join 50K+ eco warriors in gamified environmental challenges. Track your impact, earn rewards, and help save the planet.",
    images: ["/twitter-image.jpg"],
    creator: "@ecoquest",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EcoQuest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
