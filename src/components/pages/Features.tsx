import React from "react"
import { buttonCss } from "@/css"
import diagram from "/public/Images/diagram1.png"
import d1 from "/public/Images/d1.svg"
import d2 from "/public/Images/d2.svg"
import d3 from "/public/Images/d3.svg"
import d4 from "/public/Images/d4.svg"
import d5 from "/public/Images/d5.svg"

import Image from "next/image"
import glow from "/public/Images/Glow.png"
import Box from "../Box"
export function FeaturePage() {
  return (
    <div className={`justify-center items-center flex  z-10   px-16  mx-auto`}>
      <div className="h-full   w-full p-16 flex    items-center  relative   space-y-10 flex-col  ">
        {/* <Image
          src={glow}
          width={800}
          height={800}
          alt="effect"
          className="  -z-10   absolute  top-0"
        /> */}
        <div className="justify-center">
          {/*  bg-gradient-to-t from-[#00000018]   to-[#2D3A49]  text-yellow-500  */}
          <button className="   font-regular  bg-slate-700   text-yellow-500   text-lg    shadow-innerB  shadow-black px-4 py-1">
            Features
          </button>
        </div>

        <div className="">
          <h1 className="md:text-4xl    text-3xl  text-wrap text-center ">
            {" "}
            Why you should use Nexus Network for Rollups
          </h1>
        </div>

        <div className="md:text-lg text-md text-gray-500   max-w-[40vw] text-wrap text-center ">
          <p>
            Rollups can integrate with Nexus Network within minutes to earn
            yields in a secure and non-custodial way
          </p>
        </div>

        <div className=" h-full w-full  flex  justify-center items-center">
          {/* boxes */}
          <div className=" lg:flex-row lg:space-x-12   lg:space-y-4 flex flex-col justify-center items-center  space-x-0  space-y-4   ">
            {/* 1st col */}
            <div className="flex flex-col md:space-y-5">
              <Box
                src={d1}
                t1={"Validator Management"}
                t2={"We take care of end-to-end validator requirements"}
              />

              <Box
                src={d2}
                t1={"Non-custodial solution"}
                t2={
                  "Nexus Network never gets access to assets, increasing product security"
                }
              />
            </div>

            {/* 2 col */}
            <div className="flex flex-col md:space-y-5">
              <Box
                src={d5}
                t1={"Easy Integration"}
                t2={"Rollups can integrate with Nexus Network within minutes"}
              />
            </div>

            {/* 3rd col */}
            <div className="flex flex-col md:space-y-5">
              <Box
                src={d3}
                t1={"Built-in insurance mechanism"}
                t2={"Slashing insurance enabled from Day 1"}
              />

              <Box
                src={d4}
                t1={"Customised staking limit"}
                t2={"Rollups can stake anywhere between 0-100% of assets"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
