import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ResponsiveAppBar from "@/components/ui/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus Network: Economic Layer for Rollups",
  description:
    "Nexus Network is revolutionising Rollup economics by enabling Native Yields for Rollups on Ethereum.",

  applicationName: "Nexus Network",
  authors: [
    { name: "Muhammad Umer", url: "https://github.com/umershaikh123" },
    { name: "Mayank Raj", url: "https://www.linkedin.com/in/mayank-raj/" },
    {
      name: "Rohit Aggarwal",
      url: "https://www.linkedin.com/in/rohit-aggarwal-6045a6b7/",
    },
    { name: "Ashish Gupta", url: "https://www.linkedin.com/in/ashishkumar29/" },
  ],
  generator: "Next.js",
  openGraph: {
    type: "website",
    url: "https://www.nexusnetwork.co.in/",
    title: "Economic Layer for Rollups",
    description:
      "Nexus Network is revolutionising Rollup economics by enabling Native Yields for Rollups on Ethereum.",
    siteName: "Nexus Network",
    images: [
      {
        url: "/Images/HomePage/Hero-image.webp",
      },
    ],
  },

  creator: "Muhammad Umer",
  publisher: "vercel",
  keywords: [
    "nexus network",
    "rollup",
    "ethereum",
    "ethereum rollups",
    "rollup bridge security",
    "rollup capital efficiency",
    "web3",
    "blockchain security",
    "pluggable staking",
    "customizable staking limits",
    "one-stop validator management",
    "rollup security",
    "rollup efficiency",
    "native yields",
    "defi staking",
    "non-custodial staking",
    "distributed validator technology (DVT)",
    "distributed key generation (DKG)",
    "ethereum bridges",
    "rollup bridges",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="  mx-auto   ">
          <ResponsiveAppBar />
          {children}
        </div>
      </body>
    </html>
  )
}
