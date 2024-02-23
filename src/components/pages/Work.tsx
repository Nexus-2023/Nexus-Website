import React from "react"

import glow from "/public/Images/glow.svg"
// import diagram from "/public/Images/diagram1.png"
// import diagram from "/public/Images/working.jpg"

// import diagram from "/public/Images/workDiagram.png"
import diagram from "/public/Images/workDiagram.png"
// import diagram from "/public/Images/workDiagram.jpg"
import Image from "next/image"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export function WorkPage() {
  gsap.registerPlugin(ScrollTrigger)
  const workRef = useRef<HTMLDivElement>(null)
  const target = workRef.current
  console.log()

  const boxRef = useRef(null)
  useGSAP(
    () => {
      console.log(boxRef)
      const target = boxRef.current

      gsap.fromTo(
        "#glowEffect ,#workText ,#workImage ",
        {
          opacity: 0,
          y: 100,
        },

        {
          stagger: 0.3,
          opacity: 1,
          y: 0,
          ease: "power2.Out",
          duration: 1,

          scrollTrigger: {
            trigger: boxRef.current,
            start: "top top",
            end: "center center",
            // toggleActions: "play none none reverse",
            markers: true,
          },
        }
      )
    },
    { scope: boxRef }
  )

  return (
    <div
      className={`justify-center items-center flex border-2  z-10  md:px-16  mx-auto`}
      // ref={workRef}
      ref={boxRef}
    >
      <div className=" h-full -z-20   bg-[#010305] w-full relative  md:py-24    md:border-x-2 md:border-t-2 border-[#0D1820]   ">
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a51] rounded-2xl blur-3xl  -z-20 "
          id="glowEffect"
        />
        <div
          className="  flex items-center justify-center  mt-8 "
          id="workText"
        >
          <h1 className="lg:text-4xl   font-medium  sm:text-2xl text-xl  text-wrap text-center  z-10  ">
            {" "}
            How does Nexus Network Work?
          </h1>
        </div>

        {/* <div className="flex items-center justify-center md:-mt-16 lg:-mt-24 -mt-8 -z-10"> */}
        <div
          className="flex items-center justify-center   -z-10  "
          id="workImage"
        >
          <Image
            src={diagram}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Nexus design diagram"
            className=" aspect-video  "
          />
        </div>
      </div>
    </div>
  )
}
