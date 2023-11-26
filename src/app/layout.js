import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/Components/Navbar"
import styles from "../styles/Reveal.module.css"

export const metadata = {
  title: "Nexus",
  description: "Nexus Network , A layer 2 economics layer in blockchain",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" container mx-auto px-16 py-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
