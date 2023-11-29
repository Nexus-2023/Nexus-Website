import Image from "next/image"

import { HomePage } from "@/Components/HomePage"
import { Navbar } from "@/Components/Navbar"
import {
  About,
  Problems,
  Oppportunity,
  Features,
  RoadMap,
} from "@/Components/Sections"
export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Problems />
      <Oppportunity />

      <Features />
      <RoadMap />
    </div>
  )
}
