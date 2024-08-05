import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Opacity } from "@mui/icons-material"
import { Typewriter } from 'react-simple-typewriter'

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
      className="lg:text-5xl font-bold bg-clip-text text-transparent backdrop-blur py-4  text-center "
    >
      <span>Secu</span>
      <span>re</span>

      <span> Yiel</span>
      <span>ds</span>

      <span> for</span>

      <span> Idle</span>

      <span> Bri</span>
      <span>dge</span>

      <span> Ass</span>
      <span>ets</span>
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
      className="lg:text-2xl font-normal text-gray-400 backdrop-blur   opacity-0"
    >
      <span>I</span>
      <span>mpl</span>
      <span>eme</span>
      <span>nt</span>
      <span> se</span>
      <span>cu</span>
      <span>re,</span>
      <span> non-</span>
      <span>custo</span>
      <span>dial</span>
      <span> yie</span>
      <span>ld</span>
      <span> mech</span>
      <span>anics</span>
      <span> or</span>
      <span> your </span>
      {/* <span> Ro</span>
      <span>llu</span>
      <span>p</span> */}
      <span>

      <Typewriter
          words={['Rollup', 'RaaS', 'EVM Chain']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={4000}
        />
      </span>
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
      className="text-4xl  sm:text-5xl font-bold  bg-gradient-to-b text-transparent bg-clip-text text-wrap text-center "
    >
       <span>Secu</span>
      <span>re</span>

      <span> Yiel</span>
      <span>ds</span>

      <span> for</span>

      <span> Idle</span>

      <span> Bri</span>
      <span>dge</span>

      <span> Ass</span>
      <span>ets</span>
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
      <span> se</span>
      <span>cu</span>
      <span>re,</span>
      <span> non-</span>
      <span>custo</span>
      <span>dial</span>
      <span> yie</span>
      <span>ld</span>
      <span> mech</span>
      <span>anics</span>
      <span> or</span>
      <span> your </span>

      <Typewriter
          words={['Rollups', 'Raas', 'Evm Chain']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={4000}
        />
    </p>
  )
}
