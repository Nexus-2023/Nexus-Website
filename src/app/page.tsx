"use client"
import {
  HomePage,
  WorkPage,
  PartnersPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
  FundingPage,
} from "@/components/Sections"
import Footer from "@/components/Common/Footer"

import React from "react"

export default function Home() {
  return (
    <div>
      <HomePage />
      <WorkPage />
      <FeaturePage />
      <YieldPage />
      <DemoPage />
      <FundingPage />
      <PartnersPage />
      <TeamPage />
      <Footer />
    </div>
  )
}
