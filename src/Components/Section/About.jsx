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

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      {/* web */}
      <div className=" h-[70vh]   medium:flex hidden justify-between items-center p-16 tablet:mx-0 laptop:mx-16 mx-0        ">
        <div className="flex  justify-center  space-x-6  items-center w-full">
          <div className=" flex-col space-y-4 items-center justify-center min-w-[30vw]   ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              style={{ display: "flex", spaceX: "3", alignItems: "center" }}
            >
              <div>
                <Image src={vector} height={50} width={100} />
              </div>

              <div>
                <h1 className="text-xl font-regular ml-3">01</h1>
              </div>
            </motion.div>

            <div className="flex space-x-3 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h1 className=" tablet:text-5xl laptop:text-6xl  text-5xl font-bold  text-primary mb-4">
                  About Us
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="   tablet:text-lg  laptop:text-lg desktop:text-xl font-regular    large:text-base       text-black max-w-xl   laptop:leading-relaxed desktop:leading-relaxed   mb-4      ">
                Nexus Network is at the forefront of revolutionizing Ethereum's
                rollup landscape. With a commitment to security,
                decentralization, and innovation, we provide an economic layer
                for rollups through our cutting-edge staking infrastructure.
              </p>
            </motion.div>
            {/* <StyledButton> Get Started</StyledButton> */}

            <div className="  -ml-[1rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <StyledButton> Get Started</StyledButton>
              </motion.div>
            </div>
          </div>
          {isInView && (
            <div className=" tablet:w-6/12  medium:w-12/12    small:w-8/12 w-full laptop:w-3/12   ">
              <RevealContainer delay={1.2}>
                <RevealContent>
                  <Image src={diagram} height={400} width={400} style={{}} />
                </RevealContent>
                <RevealArtifact />
              </RevealContainer>
            </div>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[0rem]" />

      {/* Mobile */}

      <div className="  h-full   flex  medium:hidden  justify-between items-center p-16      w-full    ">
        <div className="flex  justify-center  flex-col space-x-6  items-center w-full">
          <div className=" flex-col   items-center justify-center min-w-[30vw]   ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              style={{ display: "flex", spaceX: "3", alignItems: "center" }}
            >
              <div>
                <Image src={vector} height={50} width={100} />
              </div>

              <div>
                <h1 className="text-lg font-regular ml-3">01</h1>
              </div>
            </motion.div>

            <div className="flex space-x-3 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h1 className="text-5xl font-bold  text-primary mb-6">
                  About Us
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className=" text-lg    font-normal  text-black max-w-xl leading-relaxed      ">
                Nexus Network is at the forefront of revolutionizing Ethereum's
                rollup landscape. With a commitment to security,
                decentralization, and innovation, we provide an economic layer
                for rollups through our cutting-edge staking infrastructure.
              </p>
            </motion.div>
            {/* <StyledButton> Get Started</StyledButton> */}

            <div className="  -ml-[1rem] flex  justify-start items-center w-full   ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <StyledButton size="14px"> Get Started</StyledButton>
              </motion.div>
            </div>
          </div>
          {isInView && (
            <div className=" flex justify-center  w-full">
              <RevealContainer delay={1.2}>
                <RevealContent>
                  <Image src={diagram} height={300} width={300} />
                </RevealContent>
                <RevealArtifact />
              </RevealContainer>
            </div>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[0rem]" />
    </>
  )
}
