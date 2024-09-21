import React from "react"

import diagram from "/public/Images/WorkPage/workDiagram.webp"
import Image from "next/image"
import { BeatLoader } from "react-spinners"
import { Suspense } from "react"
import ClientFade from "@/components/Client/ClientFade"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import { GlowEffect1 } from "@/components/Common/GlowEffect"

export default function WorkPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10  md:px-16  mx-auto`}
      id="WorkPage"
    >
      <div className=" h-full -z-20 bg-[var(--workPage-bg)] w-full relative  md:pt-8   md:border-x-2 md:border-t-2  border-[var(--page-border)]  ">
        <GlowEffect1 />
        <ClientFade delay={500}>
          <PageHeading text="How does Nexus Network Work?" />

          <div className="  flex items-center justify-center ">
            <PageSubHeading text="Nexus Network delivers consistent, secure returns on idle ETH in bridges. Utilizing the latest staking technology, it offers a non-custodial and transparent way to generate yields" />
          </div>

          <div className="flex items-center justify-center -z-10  ">
            <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
              <Image
                src={diagram}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt="Nexus design diagram"
                className=" aspect-video  max-w-[1200px]  "
              />
            </Suspense>
          </div>
        </ClientFade>
      </div>
    </div>
  )
}
