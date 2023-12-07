import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/Components/Navbar"
//import styles from "../styles/Reveal.module.css"

export const metadata = {
  title: "Nexus",
  description: "Nexus Network , A layer 2 economics layer in blockchain",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="  relative  border-2   desktop:border-yellow-800  laptop:border-blue-500 tablet:border-red-600  medium:border-purple-700 small:border-green-500">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
