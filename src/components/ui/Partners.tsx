import React from "react"

import Image from "next/image"
import { partnerData } from "@/constants/data"
import { PartnersCard } from "./Card"
export default function Partners() {
  return (
    <div className="flex   lg:flex-row flex-col  justify-center items-center lg:space-x-16  lg:space-y-0 space-y-20  w-full ">
      {partnerData.map((data, index) => (
        <PartnersCard
          key={index}
          text={data.text}
          width={data.width}
          height={data.height}
          src={data.src}
        />
      ))}
    </div>
  )
}
