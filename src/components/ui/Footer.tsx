import React from "react"
import logo from "/public/Images/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
export default function Footer() {
  const openCalendly = () => {
    window.open("https://calendly.com/mnkrj500/30min", "_blank")
    return false
  }

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
      id="Footer"
    >
      <div
        className="h-full   w-full lg:p-16 py-24 flex     items-center   relative       "
        id="FooterM"
      >
        <div className=" w-full    px-8 flex md:flex-row flex-col justify-center">
          <div className="  w-full justify-center flex" id="c1">
            <div className="flex flex-col space-y-4">
              <img
                src="/Images/Logo/logo.png"
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
                className="sm:text-lg text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
              >
                Twitter
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/company/nexus-network-staking-infra/"
                }
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
              >
                Linkedin
              </Link>
            </div>

            <div className="flex flex-col " id="c3">
              <p className=" sm:text-lg text-sm text-gray-400 mb-2">Links</p>

              <Link
                href={"https://docs.nexusnetwork.co.in/"}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
              >
                Documentation
              </Link>

              <div className="sm:text-lg text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out">
                <ScrollLink
                  to="DemoPage"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Demo
                </ScrollLink>
              </div>

              <div
                className="sm:text-lg text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                onClick={openCalendly}
              >
                Schedule Call
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
