import React from "react"
import { buttonCss } from "@/css"
import glow from "/public/Images/glow.svg"
// import diagram from "/public/Images/diagram1.png"
import diagram from "/public/Images/working.jpg"
import Image from "next/image"
export function WorkPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10  md:px-16  mx-auto`}
    >
      <div className=" h-full -z-20   bg-[#010305] w-full relative  md:py-24    md:border-x-2 md:border-t-2 border-[#0D1820]   ">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a2c] rounded-2xl blur-3xl  -z-20 " />
        <div className="  flex items-center justify-center  mt-8 ">
          <h1 className="lg:text-4xl   font-medium  sm:text-2xl text-xl  text-wrap text-center  z-10">
            {" "}
            How does Nexus Network Work?
          </h1>
        </div>

        <div className="flex items-center justify-center md:-mt-16 lg:-mt-24 -mt-8 -z-10">
          <Image
            src={diagram}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Nexus design diagram"
            className=" aspect-video  "
          />
        </div>
      </div>
    </div>
  )
}
