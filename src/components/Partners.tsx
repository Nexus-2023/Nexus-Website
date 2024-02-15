import React from "react"

import Image from "next/image"
import ssv from "/public/Images/partnerIcon1.svg"
import nexusMutual from "/public/Images/partnerIcon2.svg"
import chainproof from "/public/Images/partnerIcon3.svg"

export default function Partners() {
  return (
    <div className="flex   lg:flex-row flex-col  justify-center items-center lg:space-x-16  lg:space-y-0 space-y-20  w-full ">
      <div className=" space-y-5 flex flex-col w-full  lg:max-w-[20vw] justify-center items-center">
        <Image src={ssv} width={150} height={150} alt="effect" />
        <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

        <h3 className=" text-gray-400 text-xl ">DVT Partner</h3>
      </div>

      <div className=" space-y-5 flex flex-col w-full  lg:max-w-[20vw]  justify-center items-center">
        <Image src={nexusMutual} width={150} height={150} alt="effect" />
        <div className="  h-[0.1rem]   min-h-max w-full    max-w-60  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

        <h3 className=" text-gray-400 text-xl">INSURANCE Partner</h3>
      </div>

      <div className=" space-y-5 flex flex-col w-full   lg:max-w-[25vw] justify-center items-center">
        <Image
          src={chainproof}
          width={200}
          height={200}
          alt="effect"
          className="mb-2"
        />
        <div className="  h-[0.1rem]   min-h-max w-full    max-w-60  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

        <h3 className=" text-gray-400 text-xl">INSURANCE Partner</h3>
      </div>
    </div>
  )
}
