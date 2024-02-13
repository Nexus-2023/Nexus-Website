import React from "react"
import { buttonCss } from "@/css"
import glow from "/public/Images/glow.svg"
import diagram from "/public/Images/diagram1.png"

import Image from "next/image"
export function WorkPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10  md:px-16  mx-auto`}
    >
      <div className=" h-full -z-20   bg-[#010305] w-full relative  md:p-8    border-2 border-[#0D1820] ">
        {/* draw circle her  bg-[#010305] */}
        {/* <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[10%] h-full bg-[#0e223f33]  rounded-2xl blur-3xl "></div>   */}
        <Image
          src={glow}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }} // optional
          alt="image effect"
          className="  -z-10   absolute  top-0"
        />

        <div className="  flex items-center justify-center  mt-8 ">
          <h1 className="md:text-4xl   font-medium  text-3xl  text-wrap text-center ">
            {" "}
            How does Nexus Network Work ?
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={diagram}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }} // optional
            alt="image effect"
            className=" aspect-video max-w-screen-xl"
          />
        </div>
      </div>
    </div>
  )
}
