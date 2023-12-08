"use client"
import React from "react"
import Image from "next/image"

import diagram from "/public/Image/d1.png"

import vector from "/public/Image/vector.png"
import { StyledButton } from "../Button"

import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
} from "../RevealComponent"
import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef } from "react"

export default function Demo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className=" h-full flex  justify-center items-center      p-16 mx-16 laptop:mb-[10rem]">
      <div className=" flex-col     items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", spaceX: "3", alignItems: "center" }}
        >
          <div>
            <Image src={vector} height={50} width={100} />
          </div>

          <div>
            <h1 className="text-lg font-regular ml-3">05</h1>
          </div>
        </motion.div>

        <div className="flex space-x-3   items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="medium:text-5xl text-4xl font-bold   text-primary  ">
              Demo Video
            </h1>
          </motion.div>
        </div>

        <div className="  flex  flex-col desktop:text-base     tablet:flex-row  tablet:space-y-0 tablet:space-x-5 text-sm  justify-center items-center mt-16   w-[80vw]">
          {isInView && (
            <RevealContainer delay={1.0}>
              <RevealContent>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/K14FRCx6N0U?si=5-kSZ-bs2aJAEA-f&showinfo=0&rel=0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </RevealContent>
              <RevealArtifact />
            </RevealContainer>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[20rem]" />
    </div>
  )
}
