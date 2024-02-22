import React from "react"
import { buttonCss } from "@/css"
import Image from "next/image"
import { useEffect, useRef } from "react"
import hero from "/public/Images/Hero-image.webp"
import { TextRevealAnimation, TextRevealAnimation2 } from "../ui/TextAnimation"
import gsap from "gsap"
export function HomePage() {
  const buttonRef = useRef<HTMLDivElement>(null)
  const ImageRef = useRef<any>(null)
  useEffect(() => {
    const target = buttonRef.current
    const target2 = ImageRef.current

    if (target) {
      gsap.fromTo(
        target,
        {
          delay: 2.5,
          opacity: 0,
          y: 40,
          ease: "power2.inOut",
        },
        {
          delay: 2.5,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
    }

    if (target2) {
      gsap.fromTo(
        target2,
        {
          opacity: 0,
          y: -20,
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
    }
  }, [])

  return (
    <div
      className={`h-[100vh] justify-center items-center    border-x-2  border-t-2  border-[#0D1820]   md:mx-16 flex  z-10 relative `}
    >
      <Image
        src={hero}
        width={0}
        height={0}
        style={{ width: "100%", height: "100%" }}
        alt="Nexus design diagram"
        className=" aspect-video  absolute -z-20 opacity-0"
        ref={ImageRef}
      />
      {/* web */}
      <div className=" ">
        <div className="  justify-center items-center space-y-8 lg:flex lg:flex-col   hidden">
          <div className=" px-4 py-4">
            <TextRevealAnimation />
          </div>

          <div className="">
            <TextRevealAnimation2 />
          </div>

          <div className="opacity-0" ref={buttonRef}>
            <button className={buttonCss}>Launch App</button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="  justify-center items-center space-y-12 lg:hidden  flex flex-col">
        <div className="">
          <h1 className=" text-5xl  sm:text-6xl font-bold  bg-gradient-to-b text-transparent bg-clip-text text-wrap text-center ">
            Economic Layer for Rollups
          </h1>
        </div>

        <div className="">
          <p className=" font-normal text-gray-400 text-wrap text-center ">
            Implement native yields on your rollup in a secure and non-custodial
            way
          </p>
        </div>

        <div className="">
          <button className={buttonCss}>Launch App</button>
        </div>
      </div>
    </div>
  )
}
