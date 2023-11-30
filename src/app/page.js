"use client"

import Image from "next/image"

import { HomePage } from "@/Components/HomePage"
import { Navbar } from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import {
  About,
  Problems,
  Oppportunity,
  Features,
  RoadMap,
  Team,
  Contact,
} from "@/Components/Sections"

import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

import Faq from "@/Components/Faq"
export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Problems />
      <Oppportunity />

      <Features />
      {/* <RoadMap /> */}
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
