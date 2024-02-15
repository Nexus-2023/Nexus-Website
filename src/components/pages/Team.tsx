import React from "react"
import { buttonCss } from "@/css"
import Image from "next/image"
import team from "/public/Images/team_btn.svg"

import { TeamData } from "@/constants/data"
import { TeamCard } from "../ui/Card"
export function TeamPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full  w-full  border-2 flex justify-center  py-16 border-[#0D1820]">
        <div className="    items-center   w-full max-w-7xl p-16 flex flex-col">
          <Image
            src={team}
            width={90}
            height={90}
            alt="effect"
            className="mb-4"
          />

          <h1 className=" text-4xl font-medium mb-16">Meet the team</h1>

          <p></p>

          <div className=" lg:p-16  py-4 justify-evenly  space-y-16 lg:space-y-0 w-full lg:max-w-3xl max-w-[60vw] sm:max-w-[50vw]  flex lg:flex-row flex-col rounded-2xl relative">
            <div className="absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#0B141E] via-[#1b3753] to-[#0B141E] opacity-90 pointer-events-none   backdrop-blur-xl  -z-10"></div>

            {TeamData.map((data, index) => (
              <TeamCard
                key={index}
                src={data.src}
                name={data.name}
                title={data.title}
                twitterlink={data.twitterlink}
                linkedinlink={data.linkedinlink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
