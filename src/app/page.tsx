"use client"
import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
} from "@/components/pages"

import Footer from "@/components/ui/Footer"

import React, { useRef, useEffect, useState, useCallback } from "react"

export default function Home() {
  return (
    <div>
      {/* <SmoothScroll /> */}
      <HomePage />
      <WorkPage />

      <DemoPage />

      <AnnouncementPage />
      <FeaturePage />

      <YieldPage />

      <TeamPage />

      <Footer />
    </div>
  )
}
