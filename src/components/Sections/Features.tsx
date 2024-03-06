import React from "react"

import { useRef } from "react"

import gsap from "gsap"

import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { BeatLoader } from "react-spinners"

import { Suspense } from "react"

export function FeaturePage() {
  gsap.registerPlugin(ScrollTrigger)
  const featureContainerRef = useRef(null)
  useGSAP(
    () => {
      gsap.fromTo(
        "#glowEffect2 ,#featuresBtn ,#heading_f , #paragraph_f , .BoxContainerFeatures",

        {
          opacity: 0,
          y: 100,
        },

        {
          stagger: 0.3,
          opacity: 1,
          y: 0,
          ease: "power2.Out",
          duration: 1,
          scrollTrigger: {
            trigger: featureContainerRef.current,
            start: "top 50%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      )
    },
    { scope: featureContainerRef }
  )
  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16 px-0  mx-auto`}
    >
      <div
        className="h-full  w-full     flex  py-32  items-center  relative    border-x-2  border-t-2   border-[var(--page-border)]   flex-col  "
        ref={featureContainerRef}
      >
        <div
          className="absolute top-[10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2   w-[20%] h-[80%] bg-[var(--glow-Effect1)] rounded-2xl blur-3xl  -z-20 "
          id="glowEffect2"
        />
        <div className="justify-center" id="featuresBtn">
          <img
            src="/Images/FeaturesPage/feature_btn.svg"
            width="110"
            height="110"
            className="mb-6"
          />
        </div>

        <div className="" id="heading_f">
          <h1 className="font-medium  md:text-4xl    sm:text-3xl text-2xl  text-wrap text-center mb-6">
            {" "}
            Why you should use Nexus Network for Rollups
          </h1>
        </div>

        <div
          className="sm:text-lg text-md text-gray-500 xl:max-w-[40vw]  sm:max-w-[60vw] max-w-[90vw] text-wrap text-center"
          id="paragraph_f"
        >
          <p>
            Rollups can integrate with Nexus Network within minutes to earn
            yields in a secure and non-custodial way
          </p>
        </div>
        <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
          <div className=" h-full w-full  flex  justify-center items-center mt-24   ">
            {/* boxes */}
            <div className=" xl:flex-row xl:space-x-12   xl:space-y-4 flex flex-col justify-center items-center  space-x-0  space-y-4  ">
              {/* 1st col */}
              <div className="flex flex-col  sm:px-0 px-4 space-y-5">
                {/* box1 */}
                <div
                  className={`BoxContainerFeatures px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
                >
                  <div>
                    <img
                      src="/Images/FeaturesPage/d1.svg"
                      width="300px"
                      height="300px"
                      alt="box image"
                    />
                  </div>

                  <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

                  <h4 className=" text-center text-2xl mb-2">
                    Validator Management
                  </h4>

                  <p className=" text-center text-lg text-gray-500">
                    We take care of end-to-end validator requirements
                  </p>
                </div>

                {/* box2 */}
                <div
                  className={`BoxContainerFeatures px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
                >
                  <div>
                    <img
                      src="/Images/FeaturesPage/d2.svg"
                      width="300px"
                      height="300px"
                      alt="box image"
                    />
                  </div>

                  <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

                  <h4 className=" text-center text-2xl mb-2">
                    Non-custodial solution
                  </h4>

                  <p className=" text-center text-lg text-gray-500">
                    Nexus Network never gets access to assets, increasing
                    product security
                  </p>
                </div>
              </div>

              {/* 2 col */}
              <div className="flex flex-col  space-y-5  sm:px-0 px-4  xl:h-[80vh] h-full max-h-[700px] ">
                {/* fullBox */}
                <div className="BoxContainerFeatures px-4  h-full      w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center   ">
                  <div>
                    <img
                      src="/Images/FeaturesPage/d5.svg"
                      width="200px"
                      height="200px"
                      alt="box image"
                    />
                  </div>

                  <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

                  <h4 className=" text-center text-2xl mb-2">
                    Easy Integration
                  </h4>

                  <p className=" text-center text-lg text-gray-500">
                    Rollups can integrate with Nexus Network within minutes
                  </p>
                </div>
              </div>

              {/* 3rd col */}
              <div className="flex flex-col  sm:px-0 px-4  space-y-5">
                {/* box4*/}
                <div
                  className={`BoxContainerFeatures px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
                >
                  <div>
                    <img
                      src="/Images/FeaturesPage/d3.svg"
                      width="250px"
                      height="250px"
                      alt="box image"
                    />
                  </div>

                  <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

                  <h4 className=" text-center text-2xl mb-2">
                    Built-in insurance mechanism
                  </h4>

                  <p className=" text-center text-lg text-gray-500">
                    Slashing insurance enabled from Day 1
                  </p>
                </div>

                {/* box5*/}
                <div
                  className={`BoxContainerFeatures px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
                >
                  <div>
                    <img
                      src="/Images/FeaturesPage/d4.svg"
                      width="250px"
                      height="250px"
                      alt="box image"
                    />
                  </div>

                  <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

                  <h4 className=" text-center text-2xl mb-2">
                    Customised staking limit
                  </h4>

                  <p className=" text-center text-lg text-gray-500">
                    Rollups can stake anywhere between 0-100% of assets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  )
}
