"use client"

import { HomePage } from "@/Components/HomePage"

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
  return (
    <div className="overflow-clip">
      <HomePage />
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
