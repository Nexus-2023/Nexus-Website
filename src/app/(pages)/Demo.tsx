import React from "react"
import YouTubeFacade from "@/components/Common/YoutubeVideo"
import { GlowEffect1 } from "@/components/Common/GlowEffect"
import { PageHeading } from "@/components/Common/Heading"

export default function DemoPage() {
  const videoId = "IJHJCleMu-o"
  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
      id="DemoPage"
    >
      <div className="h-full   w-full  py-16 px-4 flex  justify-center items-center  relative    border-x-2  border-t-2   border-[var(--page-border)]   flex-col  ">
        <GlowEffect1 />
        <PageHeading text=" Demo" />

        <div
          className="h-full w-full flex  justify-center items-center relative aspect-video max-w-screen-md "
          id="video"
        >
          <YouTubeFacade videoId={videoId} />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0016389a] to-transparent opacity-90 pointer-events-none rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}
