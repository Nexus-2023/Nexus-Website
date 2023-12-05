"use client"
import React from "react"
import Image from "next/image"

import l1 from "/public/Image/plugLogo.png"
import l2 from "/public/Image/lockLogo.png"
import l3 from "/public/Image/manageLogo.png"
import l4 from "/public/Image/settingLogo.png"

import vector from "/public/Image/vector.png"

import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef } from "react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className=" h-full flex  justify-center items-center      p-16 mx-16 mb-[10rem]">
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
            <h1 className="text-xl font-regular ml-3">04</h1>
          </div>
        </motion.div>

        <div className="flex space-x-3   items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold  text-primary  ">
              Features we provide
            </h1>
          </motion.div>
        </div>

        <div className="  flex  flex-col desktop:text-base  space-y-8 tablet:flex-row  tablet:space-y-0 tablet:space-x-5 text-sm  justify-center items-center mt-16   w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className=" p-4 mx-4  border-2 h-[30vh] border-[#5404FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#5404FF]">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l1} width={50} height={50} />
                </div>

                <h1 className="text-[#5404FF] text-lg  medium:text-lg laptop:text-xl desktop:text-2xl font-medium">
                  pluggable Staking Infrastructure
                </h1>
              </div>

              <div className="ml-2  leading-relaxed font-medium   ">
                <p>
                  Elevate your rollup seamlessly with Nexus Network's pluggable
                  staking infrastructure. Effortlessly integrate within minutes
                  by calling Nexus contracts. Enjoy the flexibility and
                  adaptability that comes with a modular staking solution,
                  tailored to meet the unique needs of your rollup.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className=" p-4 mx-4 border-black   h-[30vh] max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-black ">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l2} width={50} height={50} />
                </div>

                <h1 className="text-black text-lg  medium:text-lg laptop:text-xl desktop:text-2xl font-medium">
                  Non-custodial Solution
                </h1>
              </div>

              <div className="ml-2  leading-relaxed font-medium   ">
                <p>
                  Define your rollup's staking strategy with Nexus Network's
                  customizable staking limits. Tailor the proportion of ETH
                  staked in your bridge, ensuring optimal capital efficiency.
                  From 1% to 100%, set the limits that align with your rollup's
                  growth and financial goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="  flex   desktop:text-base   text-sm  flex-col space-y-8 tablet:flex-row  tablet:space-y-0 tablet:space-x-5  justify-center items-center mt-16  w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className=" p-8 mx-4  border-2  h-[30vh] border-[#0394FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#0394FF]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l3} width={50} height={50} />
                </div>

                <h1 className="text-[#0394FF]  text-lg  medium:text-lg laptop:text-xl desktop:text-2xl font-medium">
                  One Stop Validator Management
                </h1>
              </div>

              <div className="ml-2  leading-relaxed font-medium   ">
                <p>
                  Simplify validator operations with Nexus Network's one-stop
                  validator management. No additional burden on your rollup team
                  , and let Nexus Network seamlessly handle the staking process.
                  Effortless management, maximum efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className=" p-4 mx-4 border-[#9F00AD]  h-[30vh] max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-[#9F00AD]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l4} width={50} height={50} />
                </div>

                <h1 className="text-[#9F00AD] text-lg  medium:text-lg laptop:text-xl desktop:text-2xl font-medium">
                  pluggable Staking Infrastructure
                </h1>
              </div>

              <div className="ml-2  leading-relaxed font-medium   ">
                <p>
                  Trust in Nexus Network's security-first approach. Our
                  non-custodial solution ensures direct transfers from rollups
                  to validators, reducing risk and enhancing reliability. With
                  Distributed Validator Technology (DVT), enjoy redundancy and
                  mitigate slashing risks, securing your rollup's assets and
                  operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="mt-[50rem]" />
    </div>
  )
}
