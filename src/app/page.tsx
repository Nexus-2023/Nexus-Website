"use client"
import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
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
          <AnnouncementPage />
     
          <TeamPage />
          <Footer />
      {/* <SmoothScroll /> */}
    </div>
  )
}
