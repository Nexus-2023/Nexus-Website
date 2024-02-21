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
import { log } from "console"
import gsap, { Power2 } from "gsap"
import React, { useRef, useEffect, useState, useCallback } from "react"

import { CustomEase } from "gsap/CustomEase"
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack"

import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { EaselPlugin } from "gsap/EaselPlugin"
import { PixiPlugin } from "gsap/PixiPlugin"
import { TextPlugin } from "gsap/TextPlugin"
import SmoothScroll from "@/components/pages/SmoothScroll"

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
)

export default function Home() {
  return (
    <div>
      <SmoothScroll />
    </div>
  )
}
