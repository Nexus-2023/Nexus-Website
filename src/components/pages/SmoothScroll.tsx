import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
} from "@/components/pages"
import Footer from "../ui/Footer"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

const SmoothScroll: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const content = contentRef.current!
      const viewport = viewportRef.current!

      gsap.utils.toArray<HTMLElement>(".box").forEach(box => {
        ScrollTrigger.create({
          trigger: box,

          start: "top top",

          // end: "+=300",
        })
      })

      const smoothScroll = (
        content: HTMLElement,
        viewport: HTMLElement,
        smoothness: number = 1
      ) => {
        gsap.set(viewport || content.parentNode!, {
          overflow: "hidden",
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        })
        gsap.set(content, { overflow: "visible", width: "100%" })

        let getProp = gsap.getProperty(content)
        let setProp = gsap.quickSetter(content, "y", "px")
        let setScroll = ScrollTrigger.getScrollFunc(window)
        let removeScroll = () => (content.style.overflow = "visible")
        let killScrub = (trigger: any) => {
          let scrub = trigger.getTween
            ? trigger.getTween()
            : gsap.getTweensOf(trigger.animation)[0] // getTween() was added in 3.6.2
          scrub && scrub.pause()
          trigger.animation.progress(trigger.progress)
        }

        let height: number, isProxyScrolling: boolean

        const refreshHeight = () => {
          height = content.clientHeight
          content.style.overflow = "visible"
          document.body.style.height = height + "px"
          console.log(" height", height)
          console.log("document.body.style.height", document.body.style.height)
          console.log(
            "height - document.documentElement.clientHeight",
            height - document.documentElement.clientHeight
          )

          return height - document.documentElement.clientHeight
        }

        ScrollTrigger.addEventListener("refresh", () => {
          removeScroll()
          requestAnimationFrame(removeScroll)
        })
        ScrollTrigger.defaults({ scroller: content })
        ScrollTrigger.prototype.update = p => p

        ScrollTrigger.scrollerProxy(content, {
          scrollTop(value) {
            if (arguments.length) {
              isProxyScrolling = true
              if (value) {
                setProp(-value)
                setScroll(value)
              }

              return
            }
            return -getProp("y")
          },
          scrollHeight: () => document.body.scrollHeight,
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
        })

        return ScrollTrigger.create({
          animation: gsap.fromTo(
            content,
            { y: 0 },
            {
              y: () => document.documentElement.clientHeight - height,
              ease: "none",
              onUpdate: ScrollTrigger.update,
            }
          ),
          scroller: window,
          invalidateOnRefresh: true,
          start: 0,
          end: refreshHeight,
          refreshPriority: -999,
          scrub: smoothness,
          onUpdate: self => {
            if (isProxyScrolling) {
              killScrub(self)
              isProxyScrolling = false
            }
          },
          onRefresh: killScrub,
        })
      }

      const scrollTriggerInstance = smoothScroll(content, viewport)

      return () => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill()
        }
      }
    },
    { scope: contentRef }
  )

  return (
    <div
      ref={viewportRef}
      className=" overflow-hidden fixed h-full w-full top-0 bottom-0 right-0 left-0"
    >
      <div ref={contentRef} className=" overflow-visible w-full  h-min">
        <div className="box ">
          <HomePage />
          <WorkPage />
          <FeaturePage />
          <YieldPage />
          <DemoPage />
          <AnnouncementPage />
          <TeamPage />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default SmoothScroll
