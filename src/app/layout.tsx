import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ResponsiveAppBar from "@/components/Common/navbar"
import { TopNotification } from "@/components/Common/TopNotification"
import { MetaData } from "@/constants/data"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = MetaData
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="mx-auto">
          <TopNotification />
          <ResponsiveAppBar />
          {children}
        </div>
      </body>
    </html>
  )
}
