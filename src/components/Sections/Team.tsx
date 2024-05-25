import React from "react"

import Image from "next/image"
import team from "/public/Images/team_btn.svg"

import { TeamData } from "@/constants/data"
import { TeamCard } from "../ui/Card"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

import { BeatLoader } from "react-spinners"

import { Suspense } from "react"
export function TeamPage() {
  gsap.registerPlugin(ScrollTrigger)
  const teamContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(teamContainerRef)

      gsap.fromTo(
        "#h1 , #teamBtn ,#backGlow ,#teamCard,#Footer",
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
            trigger: teamContainerRef.current,
            start: "top center",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      )
    },

    { scope: teamContainerRef }
  )

  return (
    <>
      <div
        className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
      >
        <div
          className="h-full w-full   border-2    flex justify-center   py-24   border-[var(--page-border)]"
          ref={teamContainerRef}
        >
          <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
            <div className="     items-center   w-full  max-w-7xl    px-0 flex flex-col">
              {/* <img
                src="/Images/TeamPage/team_btn.svg"
                width="90px"
                height="90px"
                alt="team button"
                className="mb-4"
                id="teamBtn"
              /> */}
              <h1 className="  sm:text-5xl text-2xl font-medium  " id="h1">
                Meet the team
              </h1>

              <p className="lg:text-base  lg:max-w-[50%] max-w-[80%]   font-normal text-gray-400 sm:text-base  text-xs  text-wrap text-center  z-10  mb-6 mt-6  ">
            {" "}
            Founders have been building in staking/liquid staking space across Ethereum and Cosmos for 2+ years
          </p>

              <div className=" lg:p-8  py-4   space-y-16 lg:space-y-0 w-full lg:max-w-3xl max-w-[60vw] sm:max-w-[60vw]  flex lg:flex-row flex-col rounded-2xl relative">
                <div
                  className="absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[var(--team-bg-gradient-from)] via-[var(--team-bg-gradient-via)] to-[var(--team-bg-gradient-to)] opacity-90 pointer-events-none   backdrop-blur-xl  -z-10"
                  id="backGlow"
                ></div>

                {TeamData.map((data, index) => (
                  <TeamCard
                    key={index}
                    src={data.src}
                    name={data.name}
                    title={data.title}
                    twitterlink={data.twitterlink}
                    linkedinlink={data.linkedinlink}
                    Description={data.Description}
                  />
                ))}
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  )
}
