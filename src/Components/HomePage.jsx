"use client"

import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import logo from "/public/Image/bigLogo.png"
import text from "/public/Image/textGradient.png"
import { motion } from "framer-motion"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { Transition } from "./Transition"
// import styles from "../styles/reveal.module.css"

import dynamic from "next/dynamic"
import { Fragment, useEffect, useState } from "react"

import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
  RevealImage,
} from "./RevealComponent"

const introSentences = [
  "An Economic Layer for Rollups",
  "A plugable Staking Solution",
]

const HomePage = () => {
  return (
    <div className="h-[88vh] space-x-8 flex justify-center items-center  -mt-[3rem]">
      {/* <RevealContainer delay={0}>
        <h1>
          <RevealContent>Reveal Text and Images</RevealContent>
          <RevealArtifact />
        </h1>
      </RevealContainer>

      <RevealContainer delay={1}>
        <p>
          <RevealContent>Using CSS animations</RevealContent>
          <RevealArtifact />
        </p>
      </RevealContainer> */}

      <LazyMotion features={domAnimation}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2, // Adjust the duration for the fade-in effect
          }}
        >
          {/* initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, rotate: [0, 0, 360] }}
      transition={{
        duration: 1, // Adjust the duration for the fade-in effect
        repeat: Infinity,
        repeatType: 'loop',
      }} */}
          <motion.div
            animate={{ y: [0, 0, 0], rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image src={logo} height={200} width={200} alt="Nexus Logo" />
          </motion.div>
        </motion.div>

        {/* Text */}

        <div className="flex  flex-col   space-y-6">
          <div className="flex text-3xl font-semibold text-gray-700 items-center space-x-4">
            <RevealContainer delay={1.2}>
              <h1>
                <RevealContent>
                  <div className="flex items-center">
                    <div>Welcome To, </div>
                    <div className=" h-2 w-[20rem] bg-primary ml-4" />
                  </div>
                </RevealContent>
                <RevealArtifact />
              </h1>
            </RevealContainer>
            <div>
              <h1></h1>
            </div>

            {/* <div className=" h-2 w-[20rem] bg-primary"/>  */}
            {/* <div className="reveal">
              <h1 className="reveal__content">Welcome To,</h1>
              <span className="reveal__artifact"></span>
            </div> */}
          </div>

          <div className="flex  ">
            <ReversedRevealContainer delay={4}>
              <ReversedRevealContent>
                <Image
                  src={text}
                  height={580}
                  width={580}
                  alt="Nexus Network"
                  className=" "
                />
              </ReversedRevealContent>
              <ReversedRevealArtifact />
            </ReversedRevealContainer>
          </div>

          <div className="flex items-center space-x-4">
            <RevealContainer delay={2.3}>
              <h1>
                <RevealContent>
                  <div className="flex items-center">
                    <div className=" h-2 w-[4rem] bg-primary mr-3" />
                    <div>
                      <h1 className="text-4xl  font-semibold text-gray-700">
                        An Economic Layer for Rollups
                      </h1>
                    </div>
                  </div>
                </RevealContent>
                <RevealArtifact />
              </h1>
            </RevealContainer>
          </div>
        </div>
      </LazyMotion>
    </div>
  )
}

export { HomePage }
