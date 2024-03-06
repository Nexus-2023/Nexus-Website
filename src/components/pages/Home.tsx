import React from "react"

import { useEffect, useRef } from "react"

import {
  TextRevealAnimation,
  TextRevealAnimation2,
  MobileTextRevealAnimation,
  MobileTextRevealAnimation2,
} from "../ui/TextAnimation"
import gsap from "gsap"
import { BeatLoader } from "react-spinners"

import { Suspense } from "react"

export function HomePage() {
  const openCalendly = () => {
    window.open("https://calendly.com/mnkrj500/30min", "_blank")
    return false
  }

  useEffect(() => {
    gsap.fromTo(
      "#launchBtn",

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

    gsap.fromTo(
      ".Home",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
      }
    )
  }, [])

  return (
    <Suspense fallback={<BeatLoader color="#36a1d6" size={20} />}>
      <div
        className={`Home h-full min-h-[100vh] justify-center items-center    border-x-2  border-t-2  border-[#0D1820]   md:mx-16 flex  z-10 relative `}
        id="HomePage"
      >
        {/* web */}
        <div className=" ">
          <div className="  justify-center items-center space-y-8 lg:flex lg:flex-col   hidden">
            <div className=" px-4 py-4">
              <TextRevealAnimation />
            </div>

            <div className="">
              <TextRevealAnimation2 />
            </div>

            <div className="opacity-0" id="launchBtn" onClick={openCalendly}>
              <button
                className={`backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t  from-[#007CCE] to-[#B4F6FF]  hover:from-[#007CCE] hover:to-white     transition  ease-in-out duration-500  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[#0D1820]  `}
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="  justify-center items-center space-y-12 lg:hidden  flex flex-col">
          <div className="">
            <MobileTextRevealAnimation />
          </div>

          <div className="">
            <MobileTextRevealAnimation2 />
          </div>

          <div className="opacity-0" id="launchBtn" onClick={openCalendly}>
            <button
              className={`backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t  from-[#007CCE] to-[#B4F6FF]  hover:from-[#007CCE] hover:to-white     transition  ease-in-out duration-500  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[#0D1820]  `}
            >
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
