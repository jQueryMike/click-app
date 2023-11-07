import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { VehicleManagerContextProvider } from "@/contexts/VehicleManagerContextProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Click App",
  description: "Interview assessment for Click Dealer",
  applicationName: "Click App",
  authors: [{name: "Mike Adams"}],
  generator: "Next.js, React, Tailwind CSS",
  keywords: ["Click Dealer", "App", "Interview", "Assessment", "Vehicle"],
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple", url: "/apple-touch-icon.png" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-16">
          <VehicleManagerContextProvider>
            <Header />
            {children}
            <Footer />
          </VehicleManagerContextProvider>
        </div>
        </body>
    </html>
  )
}
