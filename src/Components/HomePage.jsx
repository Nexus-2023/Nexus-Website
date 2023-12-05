"use client"

import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import logo from "/public/Image/bigLogo.png"
import text from "/public/Image/textGradient.png"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
// import styles from "../styles/reveal.module.css"

import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
} from "./RevealComponent"

const HomePage = () => {
  return (
    <>
      {/*  web */}
      <div
        className="h-[93vh]   tablet:flex hidden   space-x-8  justify-center items-center    "
        id="home"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 2.2,
          }}
        >
          <motion.div
            animate={{ y: [0, 0, 0], rotate: 360 }}
            transition={{
              duration: 4,
            }}
          >
            <Image
              src={logo}
              height={200}
              width={200}
              alt="Nexus Logo"
              style={{
                width: "auto",
                height: "auto",

                maxHeight: "30vh",

                minWidth: "13vw",
                maxWidth: "200px",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          {/* Web */}
          <div className="  flex   flex-col   space-y-6">
            <div className="flex small:text-2xl  laptop:text-3xl font-semibold text-gray-700 items-center space-x-4">
              <RevealContainer delay={1.2}>
                <RevealContent>
                  <div className="flex  items-center">
                    <div>Welcome To, </div>
                    <div className=" h-2 w-[20rem] bg-primary ml-4 mt-2" />
                  </div>
                </RevealContent>
                <RevealArtifact />
              </RevealContainer>
            </div>

            <div className="flex  ">
              <ReversedRevealContainer delay={4}>
                <ReversedRevealContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1,
                    }}
                  >
                    <Image
                      src={text}
                      height={580}
                      width={580}
                      alt="Nexus Network"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "100%",
                        "@media (max-width: 900px)": {
                          width: "50%",
                        },
                      }}
                    />
                  </motion.div>
                </ReversedRevealContent>
                <ReversedRevealArtifact />
              </ReversedRevealContainer>
            </div>

            <div className="flex items-center space-x-4">
              <RevealContainer delay={2.3}>
                <h1>
                  <RevealContent>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 2,
                      }}
                    >
                      <div className="flex  small:text-3xl    laptop:text-4xl h-[8vh] items-center -mt-2 ">
                        <div className=" h-2 w-[4rem] bg-primary mr-3" />
                        <div>
                          <h1 className=" -mt-3 font-semibold text-gray-700">
                            An Economic Layer for Rollups
                          </h1>
                        </div>
                      </div>
                    </motion.div>
                  </RevealContent>
                  <RevealArtifact />
                </h1>
              </RevealContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* mobile */}

      <div
        className="h-[93vh]    flex tablet:hidden  flex-col space-x-8  justify-center items-center "
        id="home2"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 2.2,
          }}
        >
          <motion.div
            animate={{ y: [0, 0, 0], rotate: 360 }}
            transition={{
              duration: 4,
            }}
          >
            <Image
              src={logo}
              height={200}
              width={200}
              alt="Nexus Logo"
              style={{
                width: "auto",
                height: "auto",

                maxHeight: "30vh",

                minWidth: "13vw",
                maxWidth: "200px",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="  flex   flex-col    ">
            <div className="flex small:text-2xl  laptop:text-3xl font-semibold text-gray-700 items-center space-x-4">
              <div>
                <h1></h1>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <ReversedRevealContainer delay={4}>
                <ReversedRevealContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1,
                    }}
                  >
                    <Image
                      src={text}
                      height={380}
                      width={380}
                      alt="Nexus Network"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "100%",
                        "@media (max-width: 900px)": {
                          width: "50%",
                        },
                      }}
                    />
                  </motion.div>
                </ReversedRevealContent>
                <ReversedRevealArtifact />
              </ReversedRevealContainer>
            </div>

            <div className="flex items-center space-x-4 ">
              <RevealContainer delay={2.3}>
                <h1>
                  <RevealContent>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 2,
                      }}
                    >
                      <div className="flex justify-center   text-2xl  h-[8vh] items-center -mt-2 ">
                        <div>
                          <h1 className=" -mt-3 font-semibold text-gray-700">
                            An Economic Layer for Rollups
                          </h1>
                        </div>
                      </div>
                    </motion.div>
                  </RevealContent>
                  <RevealArtifact />
                </h1>
              </RevealContainer>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute medium:flex hidden xs:bottom-10 bottom-32 w-full   justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
        >
          <Link to="about" smooth duration={1000} easing="easeInOutCubic">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="absolute medium:hidden flex xs:bottom-10 bottom-32 w-full   justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
        >
          <Link to="about2" smooth duration={1000} easing="easeInOutCubic">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  )
}

export { HomePage }
