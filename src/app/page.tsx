"use client"
import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
} from "@/components/pages"

import Footer from "@/components/ui/Footer"
import { log } from "console"
import gsap, { Power2 } from "gsap"
import React, { useRef, useEffect, useState, useCallback } from "react"

import { CustomEase } from "gsap/CustomEase"
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack"

import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { EaselPlugin } from "gsap/EaselPlugin"
import { PixiPlugin } from "gsap/PixiPlugin"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
)

export default function Home() {
  // useEffect(() => {
  //   let panels: NodeListOf<Element> | null = document.querySelectorAll(".panel")
  //   let observer = ScrollTrigger.normalizeScroll(true)
  //   let scrollTween: gsap.core.Tween | null

  //   // On touch devices, ignore touchstart events if there's an in-progress tween
  //   document.addEventListener(
  //     "wheel",
  //     e => {
  //       if (scrollTween) {
  //         e.preventDefault()
  //         e.stopImmediatePropagation()
  //       }
  //     },
  //     { capture: true, passive: false }
  //   )

  //   function goToSection(i: number) {
  //     scrollTween = gsap.to(window, {
  //       scrollTo: { y: i * window.innerHeight, autoKill: false },
  //       onStart: () => {
  //         observer?.disable()
  //         observer?.enable()
  //       },
  //       duration: 1,
  //       onComplete: () => (scrollTween = null),
  //       overwrite: true,
  //     })
  //   }

  //   panels?.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top bottom",
  //       end: "+=199%",
  //       onToggle: self => self.isActive && !scrollTween && goToSection(i),
  //     })
  //   })

  //   // Handle scroll snap
  //   ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     snap: 1 / (panels?.length - 1),
  //   })

  //   // Clean up ScrollTriggers on component unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])
  return (
    <>
      <HomePage />
      <WorkPage />
      <FeaturePage />
      <YieldPage />
      <DemoPage />
      <AnnouncementPage />
      <TeamPage />
      <Footer />
      {/* <section className="panel">
        <HomePage />
      </section>

      <section className="panel">
        <WorkPage />
      </section>

      <section className="panel">
        <FeaturePage />
      </section>

      <section className="panel">
        <YieldPage />
      </section>

      <section className="panel">
        <DemoPage />
      </section>

      <section className="panel">
        <AnnouncementPage />
      </section>

      <section className="panel">
        <TeamPage />
      </section>

      <section className="panel">
        <Footer />
      </section> */}
    </>
  )
}
// export default function Home() {
//   const smoothScroll = (targetY: number, duration: number): void => {
//     gsap.to(window, {
//       duration,
//       scrollTo: { y: targetY, autoKill: false },
//       ease: Power2.easeInOut,
//       // onComplete: addSpringEffect,
//     })
//   }

//   const addSpringEffect = (): void => {
//     const bounceDistance = 20 // Set the distance for the elastic effect
//     gsap.to(window, {
//       duration: 2.5,
//       scrollTo: { y: `-=${bounceDistance}` },
//       ease: "back.out(1.7)",
//     })
//   }

//   useEffect(() => {
//     const handleWheel = (event: WheelEvent): void => {
//       event.preventDefault()

//       const scrollingDistance = 3
//       const targetY = window.scrollY + event.deltaY * scrollingDistance
//       const duration = 0.5

//       smoothScroll(targetY, duration)
//     }

//     window.addEventListener("wheel", handleWheel)

//     return (): void => {
//       window.removeEventListener("wheel", handleWheel)
//     }
//   }, [])

//   return (
//     <>
//       <HomePage />
//       <WorkPage />
//       <FeaturePage />
//       <YieldPage />
//       <DemoPage />
//       <AnnouncementPage />
//       <TeamPage />
//       <Footer />
//     </>
//   )
// }

// const smoothScroll = (targetY: number, duration: number): void => {
//   gsap.to(window, {
//     duration,
//     scrollTo: { y: targetY, autoKill: false },
//     ease: Power2.easeInOut,
//   })
// }
// const smoothScroll = (targetY: number, duration: number): void => {
//   gsap.to(window, { duration, scrollTo: { y: targetY }  , ease: "power2.Out" })
// }

// useEffect(() => {
//   const handleWheel = (event: WheelEvent): void => {
//     event.preventDefault() // Prevent the default scroll behavior

//     // Calculate the target scroll position based on the wheel delta
//     const targetY = window.scrollY + event.deltaY
//     const duration = 0.5 // Set the duration of the scroll animation in seconds

//     smoothScroll(targetY, duration)
//   }

//   // Attach the wheel event listener
//   window.addEventListener("wheel", handleWheel)

//   // Clean up the event listener on component unmount
//   return (): void => {
//     window.removeEventListener("wheel", handleWheel)
//   }
// }, []) // Empty dependency array ensures the effect runs only once
