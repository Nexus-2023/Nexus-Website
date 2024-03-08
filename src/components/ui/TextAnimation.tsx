import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Opacity } from "@mui/icons-material"

export const TextRevealAnimation = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const target = ref.current

    if (target) {
      // Staggered Text Appear with Typewrite Effect
      const timeline = gsap.timeline()

      const letters = target.querySelectorAll("span")
      letters.forEach((letter, index) => {
        timeline.fromTo(
          letter,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },

          0.1 * index
        )
      })

      // Animated Background Gradient Pulse
      gsap.fromTo(
        target,
        {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
          duration: 2,
          ease: "sine.inOut",
        },
        {
          backgroundImage: "linear-gradient(to bottom, white 55%, #85caf8 80%)",
          backgroundPosition: "0 0",
          backgroundSize: "200% 100%",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.0)",
          duration: 2,
          ease: "power2.inOut",
        }
      )
    }
  }, [])

  return (
    <h1
      ref={ref}
      className="text-7xl font-bold bg-clip-text text-transparent backdrop-blur py-4  text-center "
    >
      <span>Eco</span>
      <span>nomic</span>

      <span> Lay</span>
      <span>er</span>
      <span> for</span>
      <span> Ro</span>
      <span>llu</span>
      <span>ps</span>
    </h1>
  )
}

export const TextRevealAnimation2 = () => {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const target = ref.current

    if (target) {
      gsap.fromTo(
        target,
        {
          opacity: 0,
          y: 40,
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
      const timeline = gsap.timeline()
      timeline.delay(1)
      const letters = target.querySelectorAll("span")
      letters.forEach((letter, index) => {
        timeline.fromTo(
          letter,

          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.1, ease: "power3.out" },
          0.05 * index
        )
      })
    }
  }, [])

  return (
    <p
      ref={ref}
      className="lg:text-xl font-normal text-gray-400 backdrop-blur   opacity-0"
    >
      <span>I</span>
      <span>mpl</span>
      <span>eme</span>
      <span>nt</span>
      <span> na</span>
      <span>tiv</span>
      <span>e</span>
      <span> ye</span>
      <span>ild</span>
      <span>s</span>
      <span> on</span>
      <span> y</span>
      <span>ou</span>
      <span>r</span>
      <span> ro</span>
      <span>llu</span>
      <span>p</span>
      <span> in</span>
      <span> a</span>
      <span> se</span>
      <span>cu</span>
      <span>re</span>
      <span> and</span>
      <span> n</span>
      <span>on</span>
      <span>-</span>
      <span>cu</span>
      <span>stod</span>
      <span>ia</span>
      <span>l</span>
      <span> wa</span>
      <span>y</span>
    </p>
  )
}

export const MobileTextRevealAnimation = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const target = ref.current

    if (target) {
      // Staggered Text Appear with Typewrite Effect
      const timeline = gsap.timeline()

      const letters = target.querySelectorAll("span")
      letters.forEach((letter, index) => {
        timeline.fromTo(
          letter,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },

          0.1 * index
        )
      })

      // Animated Background Gradient Pulse
      gsap.fromTo(
        target,
        {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
          duration: 2,
          ease: "sine.inOut",
        },
        {
          backgroundImage: "linear-gradient(to bottom, white 55%, #85caf8 80%)",
          backgroundPosition: "0 0",
          backgroundSize: "200% 100%",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.0)",
          duration: 2,
          ease: "power2.inOut",
        }
      )
    }
  }, [])

  return (
    <h1
      ref={ref}
      className="text-5xl  sm:text-6xl font-bold  bg-gradient-to-b text-transparent bg-clip-text text-wrap text-center "
    >
      <span>Eco</span>
      <span>nomic</span>

      <span> Lay</span>
      <span>er</span>
      <span> for</span>
      <span> Ro</span>
      <span>llu</span>
      <span>ps</span>
    </h1>
  )
}

export const MobileTextRevealAnimation2 = () => {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const target = ref.current

    if (target) {
      gsap.fromTo(
        target,
        {
          opacity: 0,
          y: 40,
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
      const timeline = gsap.timeline()
      timeline.delay(1)
      const letters = target.querySelectorAll("span")
      letters.forEach((letter, index) => {
        timeline.fromTo(
          letter,

          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.1, ease: "power3.out" },
          0.05 * index
        )
      })
    }
  }, [])

  return (
    <p
      ref={ref}
      className="font-normal text-gray-400 text-wrap text-center  opacity-0"
    >
      <span>I</span>
      <span>mpl</span>
      <span>eme</span>
      <span>nt</span>
      <span> na</span>
      <span>tiv</span>
      <span>e</span>
      <span> ye</span>
      <span>ild</span>
      <span>s</span>
      <span> on</span>
      <span> y</span>
      <span>ou</span>
      <span>r</span>
      <span> ro</span>
      <span>llu</span>
      <span>p</span>
      <span> in</span>
      <span> a</span>
      <span> se</span>
      <span>cu</span>
      <span>re</span>
      <span> and</span>
      <span> n</span>
      <span>on</span>
      <span>-</span>
      <span>cu</span>
      <span>stod</span>
      <span>ia</span>
      <span>l</span>
      <span> wa</span>
      <span>y</span>
    </p>
  )
}
