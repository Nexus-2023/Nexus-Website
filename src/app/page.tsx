"use client"
import {
  HomePage,
  WorkPage,
  PartnersPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
  FundingPage 
} from "@/components/Sections"
import Footer from "@/components/ui/Footer"
 
import React, { useRef, useEffect, useState, useCallback } from "react"
import SmoothScroll from "@/components/Sections/SmoothScroll"
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
      {/* <SmoothScroll /> */}
    </div>
  )
}
