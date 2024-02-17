import React from "react"
import { buttonCss } from "@/css"
import Image from "next/image"

import yeild from "/public/Images/yeild_btn.svg"
import { yeildData } from "@/constants/data"
import { YieldCard } from "../ui/Card"

export function YieldPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full   w-full  py-40 flex  justify-center items-center  relative    border-x-2  border-t-2 border-[#0D1820]    flex-col  ">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a2c]  rounded-2xl blur-3xl  -z-20 " />
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
          <h1 className="md:text-4xl  mb-6  font-medium   text-3xl  text-wrap text-center ">
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
          <div className="    lg:flex  lg:flex-row flex-col  w-full justify-center  lg:ml-12 lg:space-x-28 items-center    lg:space-y-2   ">
            {yeildData.map((data, index) => (
              <YieldCard
                key={index}
                src={data.src}
                heading={data.heading}
                range={data.range}
                width={data.width}
                height={data.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
