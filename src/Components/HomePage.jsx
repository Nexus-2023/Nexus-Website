"use client"

import Image from "next/image"
import React from "react"

import logo from "/public/Image/bigLogo.png"
import text from "/public/Image/textGradient.png"
import { motion } from "framer-motion"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { Transition } from "./Transition"

import { useInterval, usePrevious } from "@/hooks"
import dynamic from "next/dynamic"
import { Fragment, useEffect, useState } from "react"

const introSentences = [
  "An Economic Layer for Rollups",
  "A plugable Staking Solution",
]

const HomePage = () => {
  const [disciplineIndex, setDisciplineIndex] = useState(0)

  const currentSentence = introSentences.find(
    (item, index) => index === disciplineIndex
  )

  useInterval(() => {
    const index = (disciplineIndex + 1) % introSentences.length
    setDisciplineIndex(index)
  }, 5000)
  return (
    <div className="h-[88vh] space-x-8 flex justify-center items-center  -mt-[3rem]">
      <LazyMotion features={domAnimation}>
        {/* Logo */}
        <motion.div
          animate={{ y: [0, 0, 0], rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image src={logo} height={200} width={200} alt="Nexus Logo" />
        </motion.div>

        {/* Text */}

        <div className="flex  flex-col   space-y-6">
          <div className="flex text-3xl font-semibold text-gray-700 items-center space-x-4">
            <div>
              <h1>Welcome To,</h1>
            </div>

            <div className=" h-2 w-[20rem] bg-primary"></div>
          </div>

          <div className="flex  ">
            <Image src={text} height={580} width={580} alt="Nexus Network" />
          </div>

          <div className="flex items-center space-x-4">
            <Transition in timeout={3000}>
              {(visible, status) => (
                <Fragment>
                  <header>
                    <div component="span">
                      <AnimatePresence>
                        {introSentences.map(item => (
                          <Transition
                            unmount
                            in={item === currentSentence}
                            timeout={{ enter: 3000, exit: 2000 }}
                            key={item}
                          >
                            {(visible, status) => (
                              <span
                                aria-hidden
                                data-status={status}
                                data-plus={true}
                                // style={cssProps({
                                //   delay: tokens.base.durationS,
                                // })}
                              >
                                {item}
                              </span>
                            )}
                          </Transition>
                        ))}
                      </AnimatePresence>
                    </div>
                  </header>
                </Fragment>
              )}
            </Transition>
            {/* <div className=" h-2 w-[4rem] bg-primary"></div>
            <div>
              <h1 className="text-4xl  font-semibold text-gray-700">
                An Economic Layer for Rollups
              </h1>
            </div> */}
          </div>
        </div>
      </LazyMotion>
    </div>
  )
}

export { HomePage }
