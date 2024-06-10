import React from "react"

import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import gsap from "gsap"
export function DemoPage() {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef<any>(null)
  const demoContainerRef = useRef(null)
  useGSAP(
    () => {
      console.log(demoContainerRef)

      gsap.fromTo(
        "#glowEffect ,#demoBtn ,#heading , #video",
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
            trigger: demoContainerRef.current,
            start: "top 50%",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: demoContainerRef }
  )
  const handleVideoHover = () => {
    const target = ref.current
    if (target) {
      gsap.to(target, {
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  const handleVideoLeave = () => {
    const target = ref.current
    gsap.to(target, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "power2.out",
    })
  }

  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
      ref={demoContainerRef}
      id="DemoPage"
    >
      <div className="h-full   w-full  py-40 px-4 flex  justify-center items-center  relative    border-x-2  border-t-2   border-[var(--page-border)]   flex-col  ">
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[90%] bg-[#0E223F]  rounded-2xl blur-3xl  -z-20 "
          id="glowEffect"
        />
        <div className="justify-center items-center mb-4" id="demoBtn">
 
        </div>

        <div id="heading">
          <h1 className="md:text-5xl  mb-16  font-medium   sm:text-3xl  text-2xl text-wrap text-center ">
            {" "}
            Demo
          </h1>
        </div>

        <div
          className=" h-full w-full   flex  justify-center items-center relative aspect-video max-w-screen-md "
          id="video"
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}
          ref={ref}
        >
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/IJHJCleMu-o?si=7Pl-LFXZbZLvMWzE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={`w-full  aspect-video  max-w-screen-md rounded-2xl   shadow-lg shadow-slate-700 opacity-100 absolute top-0 left-0 transition-opacity duration-500 ease-in-out `}
          ></iframe>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0016389a] to-transparent opacity-90 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
