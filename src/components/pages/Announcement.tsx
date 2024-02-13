import React from "react"
import { buttonCss } from "@/css"

import Image from "next/image"
import ssv from "/public/Images/partnerIcon1.svg"
import nexusMutual from "/public/Images/partnerIcon2.svg"
import chainproof from "/public/Images/partnerIcon3.svg"
export function AnnouncementPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10  my-24   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full w-full relative ">
        <div className="flex justify-center items-center   ">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[80%] bg-[#38598a2c] rounded-2xl blur-3xl  -z-20 " />
          <div className="flex flex-col space-y-10  justify-center items-center w-full">
            <h1 className=" text-5xl   font-semibold text-gray-50 mb-12 lg:-ml-16">
              Our Partners
            </h1>

            <div className="flex   lg:flex-row flex-col  justify-center items-center lg:space-x-24  lg:space-y-0 space-y-20  w-full ">
              <div className=" space-y-5 flex flex-col w-full  lg:max-w-[20vw] justify-center items-center">
                <Image src={ssv} width={200} height={200} alt="effect" />
                <div className="  h-[0.1rem]   min-h-max w-full   max-w-80  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

                <h3 className=" text-gray-400 text-xl ">DVT Partner</h3>
              </div>

              <div className=" space-y-5 flex flex-col w-full  lg:max-w-[20vw]  justify-center items-center">
                <Image
                  src={nexusMutual}
                  width={200}
                  height={200}
                  alt="effect"
                />
                <div className="  h-[0.1rem]   min-h-max w-full   max-w-80  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

                <h3 className=" text-gray-400 text-xl">INSURANCE Partner</h3>
              </div>

              <div className=" space-y-5 flex flex-col w-full   lg:max-w-[25vw] justify-center items-center">
                <Image
                  src={chainproof}
                  width={350}
                  height={350}
                  alt="effect"
                  className="mb-2"
                />
                <div className="  h-[0.1rem]   min-h-max w-full   max-w-80  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

                <h3 className=" text-gray-400 text-xl">INSURANCE Partner</h3>
              </div>
            </div>

            {/* <div className="flex justify-evenly items-center ">
              <div className=" space-y-5 flex flex-col w-full  justify-center items-center">
                <Image src={chainproof} width={200} height={200} alt="effect" />
                <div className="  h-[0.1rem]   min-h-max w-full   max-w-96  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

                <h3 className=" text-gray-400 text-xl">DVT PARTNER</h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
