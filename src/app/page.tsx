"use client"
import {
  LazyDemoPage,
  LazyFeaturePage,
  LazyHomePage,
  LazyPartnersPage,
  LazyTeamPage,
  LazyWorkPage,
  LazyYieldPage,
  FundingPage,
} from "@/components/Sections"
import Footer from "@/components/Common/Footer"

import React from "react"

export default function Home() {
  return (
    <div>
      <LazyHomePage />
      <LazyWorkPage />
      <LazyFeaturePage />
      <LazyYieldPage />
      <LazyDemoPage />
      <FundingPage />
      <LazyPartnersPage />
      <LazyTeamPage />
      <Footer />
    </div>
  )
}
