import React from "react"
import { buttonCss } from "@/css"
import d5 from "/public/Images/d5.svg"
import features from "/public/Images/btFeatures.svg"
import demo from "/public/Images/demo_btn.svg"
import Image from "next/image"

export function DemoPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full   w-full p-16 flex  justify-center items-center  relative  border-2 border-[#0D1820]   flex-col  ">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100%] bg-[#38598a2c]  rounded-2xl blur-3xl  -z-20 " />
        <div className="justify-center items-center mb-4">
          <Image src={demo} width={90} height={90} alt="effect" className=" " />
        </div>

        <div className="">
          <h1 className="md:text-4xl  mb-6  font-medium   text-3xl  text-wrap text-center ">
            {" "}
            See Nexus Network in action
          </h1>
        </div>

        <div className=" h-full w-full   flex  justify-center items-center relative aspect-video max-w-screen-lg  ">
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/IJHJCleMu-o?si=7Pl-LFXZbZLvMWzE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video max-w-screen-lg rounded-2xl   shadow-lg shadow-slate-700 opacity-100 absolute top-0 left-0 transition-opacity duration-500 ease-in-out  "
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0016389a] to-transparent opacity-90 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
