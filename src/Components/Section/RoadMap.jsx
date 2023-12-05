"use client"
import React from "react"
import Image from "next/image"

import diagram4 from "/public/Image/diagram5.svg"

import vector from "/public/Image/vector.png"

import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
} from "../RevealComponent"

const RoadMap = () => {
  return (
    <div className="h-full flex  justify-center  p-16 mx-16 mb-[10rem]">
      <div className=" flex-col  items-center">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={vector} height={50} width={100} />
          </div>

          <div>
            <h1 className="text-xl font-regular">05</h1>
          </div>
        </div>

        <div className="flex space-x-3   items-center">
          <div>
            <h1 className="text-5xl font-bold  text-primary mb-4">
              Our RoadMap
            </h1>
          </div>
        </div>

        <div className="  flex   justify-center items-center mt-8   w-[80vw]">
          <RevealContainer>
            <RevealContent>
              <Image src={diagram4} height={1000} width={1000} />
            </RevealContent>
            <RevealArtifact />
          </RevealContainer>
        </div>
      </div>
    </div>
  )
}
