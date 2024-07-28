import React from "react"

import Partners from "../Common/Partners"
import { Button } from "@mui/material"
import Card from "@mui/material"
import { AnnounceCard } from "../Common/Card"
import { announcementData } from "@/constants/data"

import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { BeatLoader } from "react-spinners"
import { PartnerSlider, FunderSlider } from "../Common/Partners"
import { Suspense } from "react"
export function PartnersPage() {
  gsap.registerPlugin(ScrollTrigger)
  const announceContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(announceContainerRef)

      gsap.fromTo(
        "#glowEffect ,#h1 ,#partnersCard ,#h2 ,#p, #announcementCard , #slider",
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
            trigger: announceContainerRef.current,
            start: "top 50%",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: announceContainerRef }
  )

  return (
    <div
      className={`justify-center items-center flex  z-10     md:px-16       mx-auto`}
      ref={announceContainerRef}
    >
      <div className="h-full w-full relative   border-x-2    border-[var(--page-border)]     ">
        <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
          <div className="flex justify-center items-center   ">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[50%] bg-[var(--glow-Effect2)]  rounded-2xl blur-3xl  -z-20 " />
            <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
              <h1
                className=" lg:text-5xl text-4xl font-semibold text-gray-50 mb-12   justify-center items-center  text-center  "
                id="h1"
              >
                Our Partners
              </h1>
            </div>
          </div>
          <div className="     justify-center items-center  flex  " id="slider">
            <PartnerSlider />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export function FundingPage() {
  gsap.registerPlugin(ScrollTrigger)
  const announceContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(announceContainerRef)

      gsap.fromTo(
        "#glowEffect ,#h1 ,#partnersCard ,#h2 ,#p, #announcementCard , #slider",
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
            trigger: announceContainerRef.current,
            start: "top 50%",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: announceContainerRef }
  )

  return (
    <div
      className={`justify-center items-center flex  z-10     md:px-16       mx-auto`}
      ref={announceContainerRef}
    >
      <div className="h-full w-full relative   border-x-2  border-t-2   border-[var(--page-border)] py-16   ">
        <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
          <div className="flex justify-center items-center   ">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[50%] bg-[var(--glow-Effect2)]  rounded-2xl blur-3xl  -z-20 " />
            <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
              <h1
                className=" lg:text-5xl text-4xl font-semibold text-gray-50 mb-12   justify-center items-center  text-center  "
                id="h1"
              >
                Backed By the Best
              </h1>
            </div>
          </div>

          <div
            className="       justify-center items-center flex  "
            id="slider"
          >
            <FunderSlider />
          </div>
        </Suspense>
      </div>
    </div>
  )
}
