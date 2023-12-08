"use client"
import React from "react"
import Image from "next/image"

import diagram5 from "/public/Image/diagram5a.svg"

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
export default function Oppportunity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <>
        {/* web */}
        <div className=" h-[70vh]   medium:flex hidden justify-between items-center p-16    tablet:mx-0 laptop:mx-16 mx-0    ">
          <div className="flex  justify-center  items-center w-full">
            <div className=" flex-col   items-center justify-center min-w-[30vw]   ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                style={{ display: "flex", spaceX: "3", alignItems: "center" }}
              >
                <div>
                  <Image src={vector} height={50} width={100} />
                </div>

                <div>
                  <h1 className="text-xl font-regular ml-3">03</h1>
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
                  <h1 className=" tablet:text-5xl laptop:text-6xl  text-5xl font-bold  text-primary mb-6">
                    Opportunity
                  </h1>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="   tablet:text-lg  laptop:text-lg desktop:text-xl font-regular     large:text-base       text-black max-w-xl   laptop:leading-relaxed desktop:leading-relaxed     ">
                  Embark on a lucrative investment journey with Nexus Network.
                  As Ethereum's rollup-centric roadmap propels, our staking
                  infrastructure becomes a gateway to unparalleled returns. With
                  the ETH staked projected to grow from 1.6% to a staggering 20%
                  by 2027, the opportunity to reap rewards in the billions has
                  never been more compelling
                </p>
              </motion.div>
            </div>
            {/* <div className=" tablet:w-6/12  medium:w-12/12    small:w-8/12 w-full laptop:w-6/12  border-2"> */}
            {isInView && (
              <div className="  laptop:ml-[3rem]  min-w-min    ">
                <RevealContainer delay={1.2}>
                  <RevealContent>
                    <Image
                      src={diagram5}
                      height={550}
                      width={550}
                      style={{
                        minWidth: "40%",
                        minHeight: "40%",
                        maxHeight: "50vh",
                        maxWidth: "100%",
                      }}
                    />
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
          <div className="flex  justify-center  flex-col-reverse space-x-6  items-center w-full">
            <div className=" flex-col   items-center justify-center min-w-[30vw]  mb-8 ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
                style={{ display: "flex", spaceX: "3", alignItems: "center" }}
              >
                <div>
                  <Image src={vector} height={50} width={80} />
                </div>

                <div>
                  <h1 className="text-base font-regular ml-3">03</h1>
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
                  <h1 className="text-4xl font-bold  text-primary mb-6">
                    Opportunity
                  </h1>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className=" text-sm    font-normal  text-black max-w-xl leading-relaxed      ">
                  Embark on a lucrative investment journey with Nexus Network.
                  As Ethereum's rollup-centric roadmap propels, our staking
                  infrastructure becomes a gateway to unparalleled returns. With
                  the ETH staked projected to grow from 1.6% to a staggering 20%
                  by 2027, the opportunity to reap rewards in the billions has
                  never been more compelling
                </p>
              </motion.div>
            </div>
            {isInView && (
              <div className=" flex justify-center  w-full mb-10">
                <RevealContainer delay={1.2}>
                  <RevealContent>
                    <Image src={diagram5} height={500} width={500} />
                  </RevealContent>
                  <RevealArtifact />
                </RevealContainer>
              </div>
            )}
          </div>
        </div>
        <div ref={ref} className="mt-[0rem]" />
      </>
    </>
  )
}
