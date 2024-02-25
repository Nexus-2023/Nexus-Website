import React from "react"

import Partners from "../ui/Partners"
import { Button } from "@mui/material"
import Card from "@mui/material"
import { AnnounceCard } from "../ui/Card"
import { announcementData } from "@/constants/data"

import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { BeatLoader } from "react-spinners"

import { Suspense } from "react"
export function AnnouncementPage() {
  gsap.registerPlugin(ScrollTrigger)
  const announceContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(announceContainerRef)

      gsap.fromTo(
        "#glowEffect ,#h1 ,#partnersCard ,#h2 ,#p, #announcementCard",
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
            start: "top top",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      )
    },
    { scope: announceContainerRef }
  )

  return (
    <Suspense fallback={<BeatLoader color="#36a1d6" size={20} />}>
      <div
        className={`justify-center items-center flex  z-10     md:px-16       mx-auto`}
        ref={announceContainerRef}
      >
        <div className="h-full w-full relative   border-x-2  border-t-2  border-[#0D1820]  py-40  ">
          <div className="flex justify-center items-center   ">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[50%] bg-[#38598a11] rounded-2xl blur-3xl  -z-20 " />
            <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
              <h1
                className=" text-5xl font-semibold text-gray-50 mb-12 lg:-ml-16"
                id="h1"
              >
                Our Partners
              </h1>

              <Partners />

              <div className=" w-full h-full  md:px-16 px-8 flex flex-col    py-16    max-w-screen-xl   ">
                <h1 className=" text-yellow-500 text-lg mb-3" id="h2">
                  Announcements
                </h1>
                <h1 className="  font-medium text-2xl mb-4" id="p">
                  Stay in the Loop: Latest News and Announcements
                </h1>

                <div className="    snap-mandatory    py-16     justify-center   items-center    overflow-x-auto overflow-y-hidden">
                  <div className="flex      min-w-max  space-x-8   justify-between items-center   ">
                    {announcementData.map((data, index) => (
                      <>
                        <AnnounceCard
                          key={index}
                          h1={data.heading}
                          p={data.paragraph}
                          link={data.link}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
