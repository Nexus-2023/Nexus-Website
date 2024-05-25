import React from "react"

import diagram from "/public/Images/WorkPage/workDiagram.png"

import Image from "next/image"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { BeatLoader } from "react-spinners"

import { Suspense } from "react"
export function WorkPage() {
  gsap.registerPlugin(ScrollTrigger)

  const boxRef = useRef(null)
  useGSAP(
    () => {
      gsap.fromTo(
        "#glowEffect1 ,#workText ,#workImage ",
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
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: boxRef }
  )

  return (
    <div
      className={`justify-center items-center flex  z-10  md:px-16  mx-auto`}
      ref={boxRef}
      id="WorkPage"
    >
      <div className=" h-full -z-20 bg-[var(--workPage-bg)] w-full relative  md:pt-8   md:border-x-2 md:border-t-2  border-[var(--page-border)]  ">
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[50%] bg-[var(--glow-Effect1)] rounded-2xl blur-3xl  -z-20 "
          id="glowEffect1"
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

        <div
          className="  flex items-center justify-center  mt-8 "
          id="workText"
          >
        <p className="lg:text-base  lg:max-w-[60%] max-w-[90%]   font-normal text-gray-400 sm:text-base  text-xs  text-wrap text-center  z-10   ">
            {" "}
            Nexus Network delivers consistent, secure returns on idle ETH in bridges. Utilizing the latest staking technology, it offers a non-custodial and transparent way to generate yields
          </p>
          </div>
        <div
          className="flex items-center justify-center   -z-10  "
          id="workImage"
        >
          <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
            <Image
              src={diagram}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="Nexus design diagram"
              className=" aspect-video  max-w-[1200px]  "
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
