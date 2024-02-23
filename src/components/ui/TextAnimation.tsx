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
      className="text-7xl font-bold bg-clip-text text-transparent backdrop-blur py-4  "
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

{
  /* <span>Implement</span>
 
<span>native</span>
 
<span>yeilds</span>
<span>on</span>
<span>your</span>
<span>rollu</span>
<span>in</span>
<span>a</span>
<span>secure</span>

  <span>and</span>
  <span>non</span>
  <span>-</span>
  <span>custodial</span>
  <span>way</span> */
}

// import React, { useEffect, useRef } from "react"
// import gsap from "gsap"

// const TextRevealAnimation = () => {
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const target = ref.current

//     if (target) {
//       gsap.timeline({
//         // Overall duration and ease
//         duration: 1.5,
//         ease: "power4.out",

//         // Staggered character reveal with subtle animation
//         stagger: {
//           0.05,
//           from: { opacity: 0, y: 20, rotation: 5 },
//           ease: "back.out",
//         },

//         // Text reveal with color change and background animation
//         fromTo(
//           target,
//           {
//             opacity: 0,
//             color: "transparent",
//             backgroundColor: "rgba(255, 255, 255, 0.2)",
//           },
//           {
//             opacity: 1,
//             color: "hsl(240, 100%, 50%)", // Light blue
//             backgroundColor: "hsl(240, 100%, 70%)", // Lighter blue
//             delay: 0.5,
//           }
//         ),

//         // Subtle background animation (optional)
//         // to({
//         //   backgroundColor: "hsl(240, 100%, 60%)",
//         //   duration: 0.5,
//         //   ease: "power2.inOut",
//         // }),
//       })
//     }
//   }, [])

//   return (
//     <h1
//       ref={ref}
//       className="text-7xl font-bold text-transparent bg-clip-text text-center backdrop-blur py-4"
//     >
//       Economic Layer for Rollups
//     </h1>
//   )
// }

// export default TextRevealAnimation

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollMagic, ScrollTrigger } from "gsap/ScrollMagic"; // Added for scroll interaction

// gsap.registerPlugin(ScrollMagic, ScrollTrigger); // Register plugins

// const TextRevealAnimation = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLSpanElement>(null); // Added for individual character animation

//   useEffect(() => {
//     const target = ref.current;
//     const text = textRef.current;

//     if (target && text) {
//       // Create a timeline for the overall animation
//       const mainTl = gsap.timeline({
//         paused: true, // Start paused for scroll interaction
//       });

//       // Fade in text with slight scale and skew animation
//       mainTl
//         .fromTo(text, { opacity: 0, scaleX: 1.2, skewY: 5 }, { opacity: 1, scaleX: 1, skewY: 0, duration: 1, ease: "power2.out" })
//         // Animate each character individually with staggered delay and bouncing effect
//         .staggerTo(
//           text.children,
//           {
//             y: -20,
//             opacity: 0,
//             ease: "bounce.out",
//             duration: 0.5,
//           },
//           0.1
//         )
//         // Animate background gradient with subtle color shift
//         .to(target, { backgroundColor: "rgba(0, 0, 255, 0.2)", duration: 1, ease: "power1.inOut" });

//       // Trigger animation based on scroll position
//       const scrollTrigger = new ScrollMagic.ScrollTrigger({
//         triggerElement: target,
//         start: "top center",
//         end: "bottom center",
//         offset: 100, // Start animation slightly before entering the viewport
//       });

//       scrollTrigger.on("enter", () => mainTl.play())
//         .on("leave", () => mainTl.reverse()) // Reverse on leaving viewport
//         .addTo(mainTl);
//     }
//   }, []);

//   return (
//     <h1
//       className="text-7xl font-bold bg-gradient-to-b from-blue-500 to-indigo-500 bg-clip-text text-transparent py-4 backdrop-blur"
//       ref={ref}
//     >
//       <span ref={textRef}>Economic Layer for Rollups</span>
//     </h1>
//   );
// };

// export default TextRevealAnimation;
