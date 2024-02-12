import React from "react"
import { buttonCss } from "@/css"
import Image from "next/image"

import yeild from "/public/Images/bt_yeild.svg"
import EthIcon from "/public/Images/icon1.svg"
import coinsIcon from "/public/Images/icon2.svg"
import layerIcon from "/public/Images/icon3.svg"
export function YieldPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full  mb-24  w-full p-16 flex  justify-center items-center  relative     flex-col  ">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a5e]  rounded-2xl blur-3xl  -z-20 " />
        <div className="justify-center items-center mb-4">
          <Image
            src={yeild}
            width={90}
            height={90}
            alt="effect"
            className=" "
          />
        </div>

        <div className="">
          <h1 className="md:text-4xl  mb-6   text-3xl  text-wrap text-center ">
            {" "}
            Native yields for rollups
          </h1>
        </div>

        <div className="md:text-lg text-md text-gray-500   xl:max-w-[40vw] max-w-[60vw] text-wrap text-center  mb-16">
          <p>
            Nexus Network provides a suite of native yield products for ETH and
            stablecoins
          </p>
        </div>

        <div className=" h-full w-full   flex  justify-center items-center">
          {/* boxes */}
          <div className="    lg:flex  lg:flex-row flex-col  w-full justify-center  lg:ml-12 lg:space-x-28 items-center    lg:space-y-2   ">
            {/* 1st col */}
            <div className="flex flex-col  justify-center items-center  space-y-4 lg:mb-0 mb-16">
              <Image
                src={EthIcon}
                width={50}
                height={50}
                alt="effect"
                className=" mb-2  "
              />
              <h1 className="md:text-2xl    text-2xl  text-wrap text-center ">
                {" "}
                Eth Staking
              </h1>
              <p className="text-gray-500 ">4-5%</p>
            </div>

            <div className="flex flex-col  justify-center items-center  space-y-4 lg:mb-0 mb-16">
              <Image
                src={coinsIcon}
                width={180}
                height={180}
                alt="effect"
                className="  mb-2  "
              />
              <h1 className="md:text-2xl    text-2xl  text-wrap text-center ">
                {" "}
                Re Staking
              </h1>
              <p className="text-gray-500 ">4-5%</p>
            </div>

            <div className="flex flex-col  justify-center items-center  space-y-4 lg:mb-0 mb-16">
              <Image
                src={layerIcon}
                width={140}
                height={140}
                alt="effect"
                className=" mb-2   "
              />
              <h1 className="md:text-2xl    text-2xl  text-wrap text-center ">
                {" "}
                Stablecoin Yeilds
              </h1>
              <p className="text-gray-500 ">4-5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
