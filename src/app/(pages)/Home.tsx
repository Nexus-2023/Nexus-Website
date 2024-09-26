import React from "react"
import ClientFade from "@/components/Client/ClientFade"
import { BeatLoader } from "react-spinners"
import { Suspense } from "react"
import Image from "next/image"
import bgImage from "/public/Images/HomePage/Hero-image.webp"
import ScheduleCallButton from "@/components/Client/ClientSchedule"
import { TypeEffectHeading } from "@/components/Client/ClientHeading"
import { Heading } from "@/components/Common/Heading"
import ClientPageView from "@/components/Client/ClientPageView"
export default function HomePage() {
  return (
    <div
      className={`Home h-full  min-h-screen justify-center items-center border-x-2 border-t-2   border-[var(--page-border)] md:mx-16 flex  z-10 relative `}
      id="HomePage"
    >
      <ClientPageView pageName="Home-Page" />
      <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
        <ClientFade>
          <Image
            src={bgImage}
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          <div className="  justify-center items-center space-y-8  flex  flex-col  ">
            <Heading text={"Let your ETH work for you"} />
            <TypeEffectHeading
              text="Earn yields on ETH while you bridge to "
              array={["rollups", "Layer 1s"]}
            />
            <ScheduleCallButton />
          </div>
        </ClientFade>
      </Suspense>
    </div>
  )
}
