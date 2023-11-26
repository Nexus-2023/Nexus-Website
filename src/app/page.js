import Image from "next/image"

import { HomePage } from "@/Components/HomePage"
import { Navbar } from "@/Components/Navbar"
import { About, Problems, Oppportunity } from "@/Components/About"
export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Problems />
      <Oppportunity />
    </div>
  )
}
