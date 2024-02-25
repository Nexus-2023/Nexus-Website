import React from "react"

import { useEffect, useRef } from "react"

import {
  TextRevealAnimation,
  TextRevealAnimation2,
  MobileTextRevealAnimation,
  MobileTextRevealAnimation2,
} from "../ui/TextAnimation"
import gsap from "gsap"
export function HomePage() {
  const ImageRef = useRef<any>(null)
  useEffect(() => {
    const target2 = ImageRef.current

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
      ".backgroundEffect",
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
  }, [])

  return (
    <div
      className={`h-[100vh] justify-center items-center    border-x-2  border-t-2  border-[#0D1820]   md:mx-16 flex  z-10 relative `}
    >
      <img
        src="/Images/Hero-image.webp"
        width="100%"
        height="100%"
        alt="Nexus design diagram"
        className="backgroundEffect aspect-video max-h-[100vh]  absolute -z-20 opacity-0 hidden 2xl:block"
      />

      <img
        src="/Images/effectSquare.jpg"
        width="100%"
        height="100%"
        alt="Nexus design diagram"
        // className="  aspect-square  absolute -z-20 opacity-0 hidden lg:block"
        className="backgroundEffect  aspect-square max-h-[100vh] absolute -z-20  opacity-0  lg:block 2xl:hidden max-w-screen-lg"
      />

      <img
        src="/Images/effectSquare.jpg"
        width="100%"
        height="100%"
        alt="Nexus design diagram"
        className="backgroundEffect max-h-[100vh] aspect-auto absolute -z-20  lg:hidden  "
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

          <div className="opacity-0" id="launchBtn">
            <button
              className={`backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t  from-[#007CCE] to-[#B4F6FF]  hover:from-[#007CCE] hover:to-white     transition  ease-in-out duration-500  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[#0D1820]  `}
            >
              Launch App
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

        <div className="opacity-0" id="launchBtn">
          <button
            className={`backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t  from-[#007CCE] to-[#B4F6FF]  hover:from-[#007CCE] hover:to-white     transition  ease-in-out duration-500  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[#0D1820]  `}
          >
            Launch App
          </button>
        </div>
      </div>
    </div>
  )
}
