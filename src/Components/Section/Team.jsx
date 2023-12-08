"use client"
import React from "react"
import Image from "next/image"

import p1 from "/public/Image/p1.png"
import p2 from "/public/Image/p2.png"
import p3 from "/public/Image/p3.png"

import twitter from "/public/Image/TwitterIcon.svg"
import linkedin from "/public/Image/linkden.svg"

import vector from "/public/Image/vector.png"

import Link from "next/link"

import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef } from "react"

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className="  h-full  flex  desktop:mx-16 mx-4   justify-center  p-16   "
      id="team"
    >
      <div className=" flex-col  items-center">
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
            <h1 className="text-xl font-regular ml-3">05</h1>
          </div>
        </motion.div>

        <div className="flex space-x-3  items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="medium:text-5xl  text-4xl font-bold  text-primary mb-4">
              Meet our Team
            </h1>
          </motion.div>
        </div>

        <div className="flex  laptop:flex-row flex-col    mt-8  space-y-8  laptop:space-y-0 laptop:space-x-12  w-[80vw] items-center  justify-center   ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-4 flex-col     w-fit    min-w-min   border-2 border-primary shadow-md shadow-primary    rounded-3xl">
              <div className="flex justify-center items-center">
                <Image
                  src={p1}
                  height={150}
                  width={150}
                  className="desktop:w-[150px] desktop:h-[150px] laptop:w-[130px] laptop:h-[130px] h-[100px] w-[100px] "
                />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className="desktop:text-xl text-lg font-bold text-black">
                  Ashish Gupta
                </h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className=" text-sm desktop:text-base font-regular text-gray-700">
                  IIT Bombay (B. Tech + M.Tech)
                </p>
              </div>

              <div className="flex justify-start items-center max-w-[15rem]  laptop:max-w-[20rem] mt-1 ">
                <p className="text-sm desktop:text-base  font-medium  text-gray-800">
                  BD lead @Starship | ex- Meesho | ex - Strategy& (Booz &
                  Company)
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link
                  href={"https://twitter.com/ashishkumar_19"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image
                    src={twitter}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/ashishkumar29/"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image
                    src={linkedin}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="p-4 flex-col border-2 min-w-min border-primary shadow-md shadow-primary  rounded-3xl">
              <div className="flex justify-center items-center">
                <Image
                  src={p2}
                  height={150}
                  width={150}
                  className="desktop:w-[150px] desktop:h-[150px] laptop:w-[130px] laptop:h-[130px] h-[100px] w-[100px] "
                />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className=" font-bold text-black desktop:text-xl text-lg">
                  Mayank Raj
                </h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className="  text-xs desktop:text-base  font-regular text-gray-700">
                  IIM Ahmedabad (MBA) IIT Bombay (B. Tech)
                </p>
              </div>

              <div className="flex justify-start items-center  max-w-[15rem]  laptop:max-w-[20rem] mt-1 ">
                <p className=" text-sm desktop:text-base   font-medium  text-gray-800">
                  ex - EVM Product Lead | pSTAKE Finance | ex - KPMG
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link
                  href={"https://twitter.com/mnkrj500"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image
                    src={twitter}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/mayank-raj/"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image
                    src={linkedin}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="p-4 flex-col border-2 min-w-min border-primary shadow-md shadow-primary   rounded-3xl">
              <div className="flex justify-center items-center">
                <Image
                  src={p3}
                  height={130}
                  width={130}
                  className="desktop:w-[150px] desktop:h-[150px] laptop:w-[130px] laptop:h-[130px] h-[100px] w-[100px] "
                />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className="desktop:text-xl text-lg font-bold text-black">
                  Rohit Aggarwal
                </h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className=" text-sm desktop:text-base  font-regular text-gray-700">
                  IIT Bombay (B. Tech)
                </p>
              </div>

              <div className="flex justify-start items-center  max-w-[15rem]  laptop:max-w-[20rem] mt-1 ">
                <p className=" text-sm desktop:text-base   font-medium  text-gray-800">
                  SSV DAO contributor | ex- EVM development Lead| pSTAKE Finance
                  | ex Capgemini
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link
                  href={"https://twitter.com/RohitZoro_eth"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image
                    src={twitter}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/rohit-aggarwal-6045a6b7/"}
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    height={40}
                    width={40}
                    className="laptop:w-[40px] laptop:h-[40px] h-[30px] w-[30px] "
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        ref={ref}
        className=" laptop:mt-[40rem] mt-[30rem] medium:mt-[15rem] "
      />
    </div>
  )
}
