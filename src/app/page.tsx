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
import SmoothScroll from "@/components/pages/SmoothScroll"
export default function Home() {
  return (
    <div>
      <SmoothScroll />
    </div>
  )
}
