"use client"

import { HomePage } from "@/Components/HomePage"

import { useState, useEffect } from "react"

import dynamic from "next/dynamic"

const LazyAchievement = dynamic(
  () => import("@/Components/Section/Achievement"),
  {
    ssr: false,
  }
)

const LazyPartner = dynamic(() => import("@/Components/Section/Partner"), {
  ssr: false,
})

const LazyDemo = dynamic(() => import("@/Components/Section/Demo"), {
  ssr: false,
})

const LazyAbout = dynamic(() => import("@/Components/Section/About"), {
  ssr: false,
})

const LazyProblems = dynamic(() => import("@/Components/Section/Problem"), {
  ssr: false,
})

const LazyOppportunity = dynamic(
  () => import("@/Components/Section/Opportunity"),
  {
    ssr: false,
  }
)

const LazyTeam = dynamic(() => import("@/Components/Section/Team"), {
  ssr: false,
})

const LazyFeatures = dynamic(() => import("@/Components/Section/Features"), {
  ssr: false,
})

const LazyFaq = dynamic(() => import("@/Components/Faq"))
const LazyContact = dynamic(() => import("@/Components/Section/Contact"), {
  ssr: false,
})
const LazyFooter = dynamic(() => import("@/Components/Footer"))
export default function Home() {
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowPage(true), 1000) // Set delay to 3 seconds
  }, [])

  return (
    <div className="overflow-clip">
      {showPage ? <HomePage /> : <div className="opacity-0 h-[100vh]"></div>}
      {/* <HomePage /> */}
      <LazyAbout />
      <LazyProblems />
      <LazyOppportunity />
      <LazyPartner />
      <LazyFeatures />
      {/* <LazyAchievement /> */}

      {/* <LazyDemo /> */}
      <LazyTeam />
      <LazyFaq />
      <LazyContact />
      <LazyFooter />
    </div>
  )
}
