import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ResponsiveAppBar from "@/components/navbar"
// import ResponsiveAppBar from "@/components/tailNavbar"
import Image from "next/image"
import floor from "/public/Images/floor.png"
import effect from "/public/Images/effect3.png"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus Website",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="  mx-auto  ">
          <div className="flex justify-center  items-center  ">
            {/*  
            <Image
              src={floor}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "20%" }} // optional
              alt="image effect"
              className=" absolute  bottom-0 -z-10  "
            /> */}
            {/* <Image
              src={effect}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }} // optional
              alt="image effect"
              className=" absolute  bottom-0 -z-10  "
            /> */}
          </div>
          <ResponsiveAppBar />
          {children}
        </div>
      </body>
    </html>
  )
}
