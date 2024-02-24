import React from "react"
import logo from "/public/Images/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  useGSAP(
    () => {
      console.log(containerRef)

      gsap.fromTo(
        "#c1,#c2,#c3",
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
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div
      className={`justify-center items-center flex  z-10     md:px-16 px-0  mx-auto   `}
      ref={containerRef}
    >
      <div className="h-full   w-full lg:p-16 py-24 flex     items-center   relative       ">
        {/* <div className=" w-full    xl:space-x-80   lg:space-x-40   md:space-x-32   sm:space-x-28 space-x-16  px-8 flex md:flex-row flex-col justify-center"> */}
        <div className=" w-full    px-8 flex md:flex-row flex-col justify-center">
          <div className="  w-full justify-center flex" id="c1">
            <div className="flex flex-col space-y-4">
              <img
                src="/Images/logo.png"
                width="120px"
                height="120px"
                alt="effect"
                className=" "
              />

              <p className=" xl:text-lg text-sm lg:text-md  text-gray-400">
                © 2023 Nexus Network, Inc.
              </p>
            </div>
          </div>

          <div className=" flex w-full space-x-24 md:mt-0 mt-16 justify-center">
            <div className="flex flex-col " id="c2">
              <p className=" sm:text-lg text-sm text-gray-400 mb-3">Socials</p>

              <Link
                href={"https://twitter.com/NexusNetwork_0x"}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[#77C3F8] duration-300  transition-all  ease-in-out"
              >
                Twitter
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/company/nexus-network-staking-infra/"
                }
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[#77C3F8] duration-300  transition-all  ease-in-out"
              >
                Linkedin
              </Link>

              <Link
                href={""}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[#77C3F8] duration-300  transition-all  ease-in-out"
              >
                Instagram
              </Link>
            </div>

            <div className="flex flex-col " id="c3">
              <p className=" sm:text-lg text-sm text-gray-400 mb-2">Links</p>

              <Link
                href={"https://docs.nexusnetwork.co.in/"}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[#77C3F8] duration-300  transition-all  ease-in-out"
              >
                Documentation
              </Link>

              <Link
                href={""}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[#77C3F8] duration-300  transition-all  ease-in-out"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
