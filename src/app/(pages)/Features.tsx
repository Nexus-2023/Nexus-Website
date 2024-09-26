import React from "react"
import d1 from "/public/Images/FeaturesPage/d1.svg"
import d2 from "/public/Images/FeaturesPage/d2.svg"
import d3 from "/public/Images/FeaturesPage/d3.svg"
import d4 from "/public/Images/FeaturesPage/d4.svg"
import d5 from "/public/Images/FeaturesPage/d5.svg"
import { BeatLoader } from "react-spinners"
import { GlowEffect1 } from "@/components/Common/GlowEffect"
import { Suspense } from "react"
import Box, { FullBox } from "@/components/Common/Box"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import ClientFade from "@/components/Client/ClientFade"
import ClientPageView from "@/components/Client/ClientPageView"
export default function FeaturePage() {
  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
    >
      <ClientPageView pageName="Features-Page" />
      <div className="h-full  w-full flex  py-16  items-center  relative    border-x-2  border-t-2   border-[var(--page-border)]   flex-col  ">
        <ClientFade delay={400}>
          <GlowEffect1 />

          <PageHeading text="Why integrate Nexus for your chain?" />

          <PageSubHeading text="Supercharge your ecosystem with yields! Differentiate your chain by rewarding users and dApps while boosting capital efficiency on your chain" />

          <div
            className=" h-full w-full  flex  justify-center items-center mt-24   "
            id="FeaturesContainer"
          >
            <div className=" xl:flex-row xl:space-x-12  xl:space-y-4 flex flex-col justify-center items-center  space-x-0  space-y-4  ">
              <div className="flex flex-col  sm:px-0 px-4 space-y-5">
                <Suspense
                  fallback={<BeatLoader color="var(--loader)" size={20} />}
                >
                  <Box
                    src={d1}
                    size={200}
                    title="Validator Management"
                    paragraph="We take care of end-to-end validator requirements"
                  />

                  <Box
                    src={d2}
                    size={200}
                    title="Non-custodial solution"
                    paragraph="Nexus Network never gets access to assets, increasing product security"
                  />
                </Suspense>
              </div>

              <div className="flex flex-col  space-y-5  sm:px-0 px-4  xl:h-[80vh] h-full max-h-[580px] ">
                <Suspense
                  fallback={<BeatLoader color="var(--loader)" size={20} />}
                >
                  <FullBox
                    src={d5}
                    size={150}
                    title="Easy Integration"
                    paragraph="Rollups can integrate with Nexus Network within minutes"
                  />
                </Suspense>
              </div>

              <div className="flex flex-col  sm:px-0 px-4  space-y-5">
                <Suspense
                  fallback={<BeatLoader color="var(--loader)" size={20} />}
                >
                  <Box
                    src={d3}
                    size={200}
                    title="Built-in insurance mechanism"
                    paragraph="Slashing insurance enabled from Day 1"
                  />

                  <Box
                    src={d4}
                    size={200}
                    title="Customised staking limit"
                    paragraph="Rollups can stake anywhere between 0-100% of assets"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </ClientFade>
      </div>
    </div>
  )
}
