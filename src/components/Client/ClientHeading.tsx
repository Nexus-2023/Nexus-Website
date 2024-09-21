"use client"
import { Typewriter } from "react-simple-typewriter"
export function TypeEffectHeading({
  text,
  array,
}: {
  text: string
  array: string[]
}) {
  return (
    <p className=" text-gray-400 lg:text-3xl  sm:text-2xl text-lg z-10">
      {text}
      <Typewriter
        words={array}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={4000}
      />
    </p>
  )
}
