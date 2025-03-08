import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProveIt - Your Skills, Proven.",
  description:
    "The next-generation, project-based interview platform that redefines how candidates and recruiters connect.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

