import React from "react"
import { buttonCss } from "@/css"

import Partners from "../ui/Partners"
import { Button } from "@mui/material"
import Card from "@mui/material"
import { AnnounceCard } from "../ui/Card"
import { announcementData } from "@/constants/data"
export function AnnouncementPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10     md:px-16       mx-auto`}
    >
      <div className="h-full w-full relative border-2 border-[#0D1820] py-16  ">
        <div className="flex justify-center items-center   ">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[80%] bg-[#38598a2c] rounded-2xl blur-3xl  -z-20 " />
          <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
            <h1 className=" text-5xl   font-semibold text-gray-50 mb-12 lg:-ml-16">
              Our Partners
            </h1>

            <Partners />

            <div className=" w-full h-full  px-16  flex flex-col    py-16    max-w-screen-xl   ">
              <h1 className=" text-yellow-500 text-lg mb-3">Announcements</h1>
              <h1 className="  font-medium text-2xl mb-4">
                Stay in the Loop: Latest News and Announcements
              </h1>

              <div className="    snap-mandatory    py-16     justify-center   items-center    overflow-auto">
                <div className="flex      min-w-max  space-x-8   justify-between items-center   ">
                  {announcementData.map((data, index) => (
                    <>
                      <AnnounceCard
                        key={index}
                        h1={data.heading}
                        p={data.paragraph}
                        link={data.link}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
