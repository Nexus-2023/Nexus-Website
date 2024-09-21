import {
  LazyBackedByPage,
  LazyDemoPage,
  LazyFeaturePage,
  LazyHomePage,
  LazyPartnersPage,
  LazyTeamPage,
  LazyWorkPage,
  LazyYieldPage,
  LazyGetStartedPage,
  LazyEarnYeild,
  LazySuperCharge,
  LazyWhyNexus,
} from "./(pages)"
import Footer from "@/components/Common/Footer"
import React from "react"

export default function Home() {
  return (
    <div>
      <LazyHomePage />
      <LazyWorkPage />
      <LazyGetStartedPage />
      <LazyEarnYeild />
      <LazySuperCharge />
      {/* <LazyWhyNexus /> */}
      <LazyFeaturePage />
      <LazyYieldPage />
      <LazyDemoPage />
      <LazyBackedByPage />
      <LazyPartnersPage />
      <LazyTeamPage />
      <Footer />
    </div>
  )
}
