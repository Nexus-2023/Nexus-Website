import Image from "next/image"
import img from "/public/Images/effect.png"
import img2 from "/public/Images/effect2.png"
import floor from "/public/Images/floor.png"
import { Button } from "@mui/material"
import { buttonCss } from "@/css"

import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
} from "@/components/pages"

import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <HomePage />
      <WorkPage />
      <FeaturePage />
      <YieldPage />
      <DemoPage />
      <AnnouncementPage />
      <TeamPage />
      <Footer />
    </>
  )
}
