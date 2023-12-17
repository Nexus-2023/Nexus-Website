"use client"
import React from "react"
import Image from "next/image"

import partner1 from "/public/Image/ssv.png"

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

export default function Partner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  return (
    <>
      <div className=" h-[75vh]  medium:flex hidden  justify-center items-center p-16 tablet:mx-0 laptop:mx-16 mx-0    ">
        <div className="flex  justify-center   items-center    ">
          <div className="   justify-center  mr-[3rem]  ">
            {isInView && (
              <RevealContainer delay={1.2}>
                <RevealContent>
                  <a href="https://ssv.network/" target="_blank">
                    <Image
                      src={partner1}
                      height={450}
                      width={450}
                      className="hover:scale-105  scale-100 transition-all duration-300  "
                    />
                  </a>
                </RevealContent>
                <RevealArtifact />
              </RevealContainer>
            )}
          </div>
          <div className="flex- flex-col  items-center ">
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
                <h1 className="text-xl font-regular ml-3">04</h1>
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
                <h1 className="  laptop:text-5xl  desktop:text-6xl text-5xl font-bold  text-primary mb-6">
                  Our Partner
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="   tablet:text-lg  laptop:text-lg desktop:text-xl font-regular     text-base       text-black max-w-xl   laptop:leading-relaxed desktop:leading-relaxed   mb-4      ">
                We are proud to present SSV.Network as Nexus Partner!
                SSV.Network, a cornerstone in Ethereum's staking evolution,
                stands alongside Nexus Network in revolutionizing the landscape
                through Distributed Validator Technology (DVT).We are also the
                grant recipients of SSV.Network
              </p>
            </motion.div>
            <div className="  -ml-[1rem] ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <StyledButton size="16px">
                  <a
                    href="https://forum.ssv.network/t/ssv-x-nexus-network-grant-proposal-layer-2-onboarding-and-staking-infrastructure/1142"
                    target="_blank"
                  >
                    Grant
                  </a>
                </StyledButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[0rem]" ref={ref} />
      {/* Mobile */}

      <div className="  h-full  medium:hidden flex   justify-between items-center p-16       ">
        <div className="flex  flex-col  justify-center   items-center w-full  ">
          <div className="   flex  justify-center  mb-10">
            {isInView2 && (
              <RevealContainer delay={1.2}>
                <RevealContent>
                  <a href="https://ssv.network/" target="_blank">
                    <Image
                      src={partner1}
                      height={350}
                      width={350}
                      className="hover:scale-105  scale-100 transition-all duration-300 "
                    />
                  </a>
                </RevealContent>
                <RevealArtifact />
              </RevealContainer>
            )}
          </div>
          <div className="flex- flex-col  items-center mb-8 ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              style={{ display: "flex", spaceX: "3", alignItems: "center" }}
            >
              <div className=" ">
                <Image src={vector} height={50} width={80} />
              </div>

              <div>
                <h1 className="text-base font-regular ml-3">04</h1>
              </div>
            </motion.div>

            <div className="flex space-x-3 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h1 className="text-4xl font-bold  text-primary mb-6">
                  Our Partner
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="text-sm font-regular  text-black max-w-xl leading-relaxed  ">
                We are proud to present SSV.Network as Nexus Partner!
                SSV.Network, a cornerstone in Ethereum's staking evolution,
                stands alongside Nexus Network in revolutionizing the landscape
                through Distributed Validator Technology (DVT).We are also the
                grant recipients of SSV.Network
              </p>
            </motion.div>
            <div className="  -ml-[1rem] ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <StyledButton size="12px">
                  <a
                    href="https://forum.ssv.network/t/ssv-x-nexus-network-grant-proposal-layer-2-onboarding-and-staking-infrastructure/1142"
                    target="_blank"
                  >
                    Grant
                  </a>
                </StyledButton>
              </motion.div>
            </div>
          </div>
        </div>
        <div ref={ref2} className="mt-[40rem]" />
      </div>
    </>
  )
}
