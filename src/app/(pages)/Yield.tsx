import React from "react"
import { yeildData } from "@/constants/data"
import { YieldCard } from "@/components/Common/Card"
import { BeatLoader } from "react-spinners"
import { Suspense } from "react"
import { GlowEffect1 } from "@/components/Common/GlowEffect"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import ClientFade from "@/components/Client/ClientFade"
import ClientPageView from "@/components/Client/ClientPageView"
export default function YieldPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16 px-0  overflow-hidden `}
    >
      <ClientPageView pageName="Yield-Page" />
      <div className="h-full w-full  space-y-10  flex  justify-center items-center  relative py-16  border-x-2  border-t-2  border-[var(--page-border)]    flex-col  ">
        <ClientFade>
          <GlowEffect1 />
          <PageHeading text="Native yields for rollups" />
          <PageSubHeading text="Nexus Network provides a suite of native yield products for ETH and stablecoins" />

          <div className="h-full w-full flex justify-center items-center">
            <div
              className="lg:flex  lg:flex-row flex-col  w-full justify-center  lg:ml-12 lg:space-x-28 items-center    lg:space-y-2   "
              id="yeildContainer"
            >
              <Suspense
                fallback={<BeatLoader color="var(--loader)" size={20} />}
              >
                {yeildData.map((data, index) => (
                  <YieldCard
                    key={index}
                    src={data.src}
                    heading={data.heading}
                    range={data.range}
                    size={data.size}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </ClientFade>
      </div>
    </div>
  )
}
