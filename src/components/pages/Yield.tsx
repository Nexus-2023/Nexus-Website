"use client"
import React from "react"

import Image from "next/image"

import yeild from "/public/Images/yeild_btn.svg"
import { yeildData } from "@/constants/data"
import { YieldCard } from "../ui/Card"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
export function YieldPage() {
  gsap.registerPlugin(ScrollTrigger)
  const yeildContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(yeildContainerRef)

      gsap.fromTo(
        "#glowEffect ,#yeildBtn ,#heading , #paragraph , #yeildCard",
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
            trigger: yeildContainerRef.current,
            start: "top top",
            end: "center center",
            // toggleActions: "play none none reverse",
            markers: true,
          },
        }
      )
    },
    { scope: yeildContainerRef }
  )

  return (
    <div
      className={`justify-center items-center flex  z-10  border-2  md:px-16 px-0    mx-auto`}
      ref={yeildContainerRef}
    >
      <div className="h-full w-full   flex  justify-center items-center  relative  py-24  border-x-2  border-t-2 border-[#0D1820]    flex-col  ">
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a2c]  rounded-2xl blur-3xl  -z-20 "
          id="glowEffect"
        />
        <div className="justify-center items-center mb-4">
          <Image
            src={yeild}
            width={90}
            height={90}
            alt="yeild button"
            id="yeildBtn"
          />
        </div>

        <div id="heading">
          <h1 className=" md:text-4xl   text-3xl  mb-6  font-medium     text-wrap text-center ">
            {" "}
            Native yields for rollups
          </h1>
        </div>

        <div
          className="md:text-lg text-md text-gray-500   xl:max-w-[40vw]  sm:max-w-[60vw] max-w-[90vw] text-wrap text-center  mb-16"
          id="paragraph"
        >
          <p>
            Nexus Network provides a suite of native yield products for ETH and
            stablecoins
          </p>
        </div>

        <div className=" h-full w-full   flex  justify-center items-center">
          <div className="    lg:flex  lg:flex-row flex-col  w-full justify-center  lg:ml-12 lg:space-x-28 items-center    lg:space-y-2   ">
            {yeildData.map((data, index) => (
              <YieldCard
                key={index}
                src={data.src}
                heading={data.heading}
                range={data.range}
                width={data.width}
                height={data.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
