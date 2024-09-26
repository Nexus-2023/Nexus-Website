import React from "react"
import { TeamData } from "@/constants/data"
import { TeamCard } from "@/components/Common/Card"
import { BeatLoader } from "react-spinners"
import { Suspense } from "react"
import ClientFade from "@/components/Client/ClientFade"
import ClientPageView from "@/components/Client/ClientPageView"

export default function TeamPage() {
  return (
    <>
      <div
        className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
      >
        <ClientPageView pageName="Team-Page" />
        <div className="h-full w-full   border-2    flex justify-center  py-16   border-[var(--page-border)]">
          <ClientFade delay={500}>
            <div className="items-center  w-full  max-w-7xl  px-0 flex flex-col">
              <h1 className=" sm:text-5xl text-2xl font-medium  " id="h1">
                Meet the Founders
              </h1>

              <p
                className="lg:text-base  lg:max-w-[60%] max-w-[80%]   font-normal text-gray-400 sm:text-base  text-xs  text-wrap text-center  z-10  mb-6 mt-6  "
                id="p1"
              >
                {" "}
                Building in staking/liquid staking space across Ethereum and
                Cosmos for 3+ years. Won prizes in multiple ETH Hackathons
                (Devcon, ETHIstanbul, ETHScaling, ETHOnline)
              </p>

              <div className=" lg:p-8  py-4   space-y-16 lg:space-y-0 w-full lg:max-w-3xl max-w-[60vw] sm:max-w-[60vw]  flex lg:flex-row flex-col rounded-2xl relative">
                <div
                  className="absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[var(--team-bg-gradient-from)] via-[var(--team-bg-gradient-via)] to-[var(--team-bg-gradient-to)] opacity-90 pointer-events-none   backdrop-blur-xl  -z-10"
                  id="backGlow"
                ></div>
                <Suspense
                  fallback={<BeatLoader color="var(--loader)" size={20} />}
                >
                  {TeamData.map((data, index) => (
                    <TeamCard
                      key={index}
                      src={data.src}
                      name={data.name}
                      title={data.title}
                      twitterlink={data.twitterlink}
                      linkedinlink={data.linkedinlink}
                      Description={data.Description}
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </ClientFade>
        </div>
      </div>
    </>
  )
}
