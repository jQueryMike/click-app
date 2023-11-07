import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";
import './globals.css'
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { VehicleManagerContextProvider } from "@/contexts/VehicleManagerContextProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click App',
  description: 'Interview assessment for Click Dealer',
  applicationName: 'Click App',
  authors: [{name: "Mike Adams"}],
  generator: "Next.js, React, Tailwind CSS",
  keywords: ['Click Dealer', 'App', 'Interview', 'Assessment'],
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
