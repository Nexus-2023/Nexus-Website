import React from "react"
import { buttonCss } from "@/css"
import diagram from "/public/Images/diagram1.png"
import d1 from "/public/Images/d1.svg"
import d2 from "/public/Images/d2.svg"
import d3 from "/public/Images/d3.svg"
import d4 from "/public/Images/d4.svg"
import d5 from "/public/Images/d5.svg"
// import features from "/public/Images/btFeatures.svg"
import features from "/public/Images/feature_btn.svg"
import Image from "next/image"
import glow from "/public/Images/Glow.png"
import Box from "../ui/Box"
import { FullBox } from "../ui/Box"
export function FeaturePage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full   w-full py-32   flex    items-center  relative    border-x-2  border-t-2  border-[#0D1820]    flex-col  ">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[80%] bg-[#38598a2c] rounded-2xl blur-3xl  -z-20 " />
        <div className="justify-center">
          <Image
            src={features}
            width={110}
            height={110}
            alt="feature button"
            className="mb-6 "
          />
        </div>

        <div className="">
          <h1 className="font-medium  md:text-4xl    sm:text-3xl text-2xl  text-wrap text-center mb-6">
            {" "}
            Why you should use Nexus Network for Rollups
          </h1>
        </div>

        <div className="sm:text-lg text-md text-gray-500 xl:max-w-[40vw]  sm:max-w-[60vw] max-w-[90vw] text-wrap text-center">
          <p>
            Rollups can integrate with Nexus Network within minutes to earn
            yields in a secure and non-custodial way
          </p>
        </div>

        <div className=" h-full w-full  flex  justify-center items-center mt-24  ">
          {/* boxes */}
          <div className=" xl:flex-row xl:space-x-12   xl:space-y-4 flex flex-col justify-center items-center  space-x-0  space-y-4   ">
            {/* 1st col */}
            <div className="flex flex-col  sm:px-0 px-4 space-y-5">
              <Box
                src={d1}
                t1={"Validator Management"}
                t2={"We take care of end-to-end validator requirements"}
                iw={300}
                ih={300}
              />

              <Box
                src={d2}
                t1={"Non-custodial solution"}
                t2={
                  "Nexus Network never gets access to assets, increasing product security"
                }
                iw={300}
                ih={300}
              />
            </div>

            {/* 2 col */}
            <div className="flex flex-col  space-y-5  sm:px-0 px-4  xl:h-[80vh] h-full max-h-[700px] ">
              <FullBox
                src={d5}
                t1={"Easy Integration"}
                t2={"Rollups can integrate with Nexus Network within minutes"}
                iw={200}
                ih={200}
              />
            </div>

            {/* 3rd col */}
            <div className="flex flex-col  sm:px-0 px-4  space-y-5">
              <Box
                src={d3}
                t1={"Built-in insurance mechanism"}
                t2={"Slashing insurance enabled from Day 1"}
                iw={250}
                ih={250}
              />

              <Box
                src={d4}
                t1={"Customised staking limit"}
                t2={"Rollups can stake anywhere between 0-100% of assets"}
                iw={250}
                ih={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
