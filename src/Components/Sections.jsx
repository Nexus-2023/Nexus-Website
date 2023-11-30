"use client"
import React from "react"
import Image from "next/image"

import diagram from "/public/Image/d1.png"
import diagram2 from "/public/Image/diagram2.svg"
import diagram3 from "/public/Image/diagram3.svg"
import diagram4 from "/public/Image/diagram5.svg"

import l1 from "/public/Image/plugLogo.png"
import l2 from "/public/Image/lockLogo.png"
import l3 from "/public/Image/manageLogo.png"
import l4 from "/public/Image/settingLogo.png"

import p1 from "/public/Image/p1.png"
import p2 from "/public/Image/p2.png"
import p3 from "/public/Image/p3.png"

import twitter from "/public/Image/TwitterIcon.svg"
import linkedin from "/public/Image/linkden.svg"

import vector from "/public/Image/vector.png"
import { StyledButton, StyledButton2 } from "./Button"
import { Button2 } from "./Button"
import Link from "next/link"
import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
  RevealImage,
} from "./RevealComponent"
import { motion } from "framer-motion"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { useInView, animate, useAnimate } from "framer-motion"
import { useEffect, useRef, Suspense } from "react"

import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei"

import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"

// const About = () => {

//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   if (isInView) {
//     console.log("inview")
//   }
//   return (
//     <div className="h-[100vh] flex justify-between items-center p-16 mx-16">
//       <div className="flex justify-center space-x-6 items-center w-full">
//         <div className="flex-col space-y-4 items-center justify-center w-5/12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <div>
//               <Image src={vector} height={50} width={100} />
//             </div>

//             <div>
//               <h1 className="text-xl font-regular ml-3">01</h1>
//             </div>
//           </motion.div>

//           <div className="flex space-x-3 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-6xl font-bold text-primary mb-4">About Us</h1>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div>
//               <p className="text-xl font-regular text-black max-w-xl leading-relaxed mb-4">
//                 Nexus Network envisions to become the economic layer for
//                 rollups. Using our staking infrastructure, Rollups can stake the
//                 ETH locked in their bridges and earn continuous stable staking
//                 returns.
//               </p>
//             </div>
//           </motion.div>

//           <div className="-ml-[1rem]">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <StyledButton>Get Started</StyledButton>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div ref={ref} className="mt-[40rem]"></div>
//     </div>
//   )
// }

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className=" h-[70vh] flex  justify-between items-center p-16 mx-16     ">
        <div className="flex  justify-center  space-x-6  items-center w-full">
          <div className=" flex-col space-y-4 items-center justify-center w-5/12">
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
                <h1 className="text-6xl font-bold  text-primary mb-4">
                  About Us
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="text-xl font-regular  text-black max-w-xl leading-relaxed mb-4">
                Nexus Network envisions to become the economic layer for
                rollups. Using our staking infrastructure, Rollups can stake the
                ETH locked in their bridges and earn continuous stable staking
                returns.
              </p>
            </motion.div>
            {/* <StyledButton> Get Started</StyledButton> */}
            <div className="  -ml-[1rem] ">
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
            <RevealContainer delay={1.2}>
              <RevealContent>
                <Image src={diagram} height={450} width={450} />
              </RevealContent>
              <RevealArtifact />
            </RevealContainer>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[0rem]" />
    </>
  )
}

const Problems = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className=" h-[75vh] flex  justify-between items-center p-16 mx-16     ">
      <div className="flex  justify-center   items-center w-full  ">
        <div className=" w-8/12 flex  justify-center ">
          {isInView && (
            <RevealContainer delay={1.2}>
              <RevealContent>
                <Image src={diagram2} height={500} width={500} />
              </RevealContent>
              <RevealArtifact />
            </RevealContainer>
          )}
        </div>
        <div className="flex- flex-col space-y-4 items-center w-1/2">
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
              <h1 className="text-xl font-regular ml-3">02</h1>
            </div>
          </motion.div>

          <div className="flex space-x-3 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h1 className="text-6xl font-bold  text-primary mb-4">
                Problems we Solve
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <p className="text-xl font-regular  text-black max-w-xl leading-relaxed mb-4">
              Nexus Network envisions to become the economic layer for rollups.
              Using our staking infrastructure, Rollups can stake the ETH locked
              in their bridges and earn continuous stable staking returns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <StyledButton> Get Started</StyledButton>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="mt-[40rem]" />
    </div>
  )
}

const Oppportunity = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className=" h-[60vh] flex  justify-between items-center p-16   mb-[3rem]  ">
      <div className="flex  justify-center  space-x-16  items-center w-full">
        <div className=" flex-col space-y-4 items-center justify-center  ">
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
              <h1 className="text-xl font-regular ml-3">03</h1>
            </div>
          </motion.div>

          <div className="flex space-x-3 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h1 className="text-6xl font-bold  text-primary mb-4">
                Opportunity
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <p className="text-xl font-regular  text-black max-w-xl leading-relaxed mb-4">
              Nexus Network envisions to become the economic layer for rollups.
              Using our staking infrastructure, Rollups can stake the ETH locked
              in their bridges and earn continuous stable staking returns.
            </p>
          </motion.div>

          <div className="  -ml-[1rem] ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <StyledButton> Get Started</StyledButton>
            </motion.div>
          </div>
        </div>

        <div className="  ">
          {isInView && (
            <RevealContainer delay={1.2}>
              <RevealContent>
                <Image src={diagram3} height={800} width={700} />
              </RevealContent>
              <RevealArtifact />
            </RevealContainer>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[40rem]" />
    </div>
    // <div className=" h-[100vh]  flex justify-center   items-center ml-6   ">
    //   <div className="flex- flex-col space-y-4 items-center justify-center  ml-4 ">
    //     <div className="flex space-x-3 items-center justify-start ">
    //       <div className=" justify-start flex">
    //         <h1 className="text-5xl font-bold  text-primary mb-4">
    //           Oppportunity
    //         </h1>
    //       </div>

    //       <div className="flex space-x-3  items-center  ">
    //         <div>
    //           <Image src={vector} height={50} width={100} />
    //         </div>

    //         <div>
    //           <h1 className="text-xl font-regular">03</h1>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-start">
    //       <p className="text-xl font-regular   text-black max-w-2xl leading-relaxed mb-4">
    //         Nexus Network envisions to become the economic layer for rollups.
    //         Using our staking infrastructure, Rollups can stake the ETH locked
    //         in their bridges and earn continuous stable staking returns.
    //       </p>
    //     </div>

    //     <RevealContainer>
    //       <RevealContent>
    //         <Image src={diagram3} height={500} width={800} />
    //       </RevealContent>
    //       <RevealArtifact />
    //     </RevealContainer>
    //   </div>
    // </div>
  )
}

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className=" h-full flex  justify-center  p-16 mx-16 mb-[10rem]">
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
            <h1 className="text-xl font-regular ml-3">04</h1>
          </div>
        </motion.div>

        <div className="flex space-x-3   items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold  text-primary mb-4">
              Features we provide
            </h1>
          </motion.div>
        </div>

        <div className="  flex   justify-center items-center mt-16   w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className=" p-8 mx-4  border-2 border-[#5404FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#5404FF]">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l1} width={50} height={50} />
                </div>

                <h1 className="text-[#5404FF] text-2xl font-medium">
                  pluggable Staking Infrastructure
                </h1>
              </div>

              <div className="ml-2  leading-relaxed   ">
                <p>
                  We provide an easy pluggable Staking Infrastructure.Rollups
                  can integrate with Nexus Network within a few minutes by
                  calling Nexus contracts
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className=" p-8 mx-4 border-black max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-black ">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l2} width={50} height={50} />
                </div>

                <h1 className="text-black text-2xl font-medium">
                  Non-custodial Solution
                </h1>
              </div>

              <div className="ml-2  leading-relaxed   ">
                <p>
                  We provide an easy pluggable Staking Infrastructure.Rollups
                  can integrate with Nexus Network within a few minutes by
                  calling Nexus contracts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="  flex    justify-center items-center mt-16  w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className=" p-8 mx-4  border-2 border-[#0394FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#0394FF]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l3} width={50} height={50} />
                </div>

                <h1 className="text-[#0394FF] text-2xl font-medium">
                  One Stop Validator Management
                </h1>
              </div>

              <div className="ml-2  leading-relaxed   ">
                <p>
                  We provide an easy pluggable Staking Infrastructure.Rollups
                  can integrate with Nexus Network within a few minutes by
                  calling Nexus contracts
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className=" p-8 mx-4 border-[#9F00AD] max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-[#9F00AD]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l4} width={50} height={50} />
                </div>

                <h1 className="text-[#9F00AD] text-2xl font-medium">
                  pluggable Staking Infrastructure
                </h1>
              </div>

              <div className="ml-2  leading-relaxed   ">
                <p>
                  We provide an easy pluggable Staking Infrastructure.Rollups
                  can integrate with Nexus Network within a few minutes by
                  calling Nexus contracts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="mt-[40rem]" />
    </div>
  )
}

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

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="  h-full flex   justify-center  p-16 mx-16  ">
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
            <h1 className="text-5xl font-bold  text-primary mb-4">
              Meet our Team
            </h1>
          </motion.div>
        </div>

        <div className="flex    mt-8   space-x-12  w-[80vw] items-center  justify-center   ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-4 flex-col border-2 border-primary shadow-md shadow-primary    rounded-3xl">
              <div className="flex justify-center items-center">
                <Image src={p1} height={150} width={150} />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className="text-xl font-bold text-black">Ashish Gupta</h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className="text-md font-regular text-gray-700">
                  IIT Bombay (B. Tech + M.Tech)
                </p>
              </div>

              <div className="flex justify-start items-center  max-w-[20rem] mt-1 ">
                <p className="text-md  font-medium  text-gray-800">
                  BD lead @Starship | ex- Meesho | ex - Strategy& (Booz &
                  Company)
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link
                  href={"https://twitter.com/ashishkumar_19"}
                  target="_blank"
                >
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/ashishkumar29/"}
                  target="_blank"
                >
                  <Image src={linkedin} height={40} width={40} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="p-4 flex-col border-2 border-primary shadow-md shadow-primary  rounded-3xl">
              <div className="flex justify-center items-center">
                <Image src={p2} height={150} width={150} />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className="text-xl font-bold text-black">Mayank Raj</h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className="text-md font-regular text-gray-700">
                  IIM Ahmedabad (MBA) IIT Bombay (B. Tech)
                </p>
              </div>

              <div className="flex justify-start items-center  max-w-[20rem] mt-1 ">
                <p className="text-md  font-medium  text-gray-800">
                  ex - EVM Product Lead | pSTAKE Finance | ex - KPMG
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link href={"https://twitter.com/mnkrj500"} target="_blank">
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/mayank-raj/"}
                  target="_blank"
                >
                  <Image src={linkedin} height={40} width={40} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="p-4 flex-col border-2 border-primary shadow-md shadow-primary   rounded-3xl">
              <div className="flex justify-center items-center">
                <Image src={p3} height={130} width={130} />
              </div>

              <div className="flex justify-start items-center mt-4">
                <h1 className="text-xl font-bold text-black">Rohit Aggarwal</h1>
              </div>

              <div className="flex justify-start items-center mt-1 ">
                <p className="text-md font-regular text-gray-700">
                  IIT Bombay (B. Tech)
                </p>
              </div>

              <div className="flex justify-start items-center  max-w-[20rem] mt-1 ">
                <p className="text-md  font-medium  text-gray-800">
                  SSV DAO contributor | ex- EVM development Lead| pSTAKE Finance
                  | ex Capgemini
                </p>
              </div>

              <div className="flex  justify-center items-center space-x-5  max-w-[20rem] mt-6 ">
                <Link
                  href={"https://twitter.com/RohitZoro_eth"}
                  target="_blank"
                >
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/rohit-aggarwal-6045a6b7/"}
                  target="_blank"
                >
                  <Image src={linkedin} height={40} width={40} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="mt-[40rem]" />
    </div>
  )
}

const PhoneObject = () => {
  const ref = null
  const gltf = useGLTF("./model/scene.gltf")

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight intensity={0.2} position={[1, 1, 0]} />
      <primitive object={gltf.scene} scale={0.012} rotation-y={0} />
    </mesh>
  )
}

export const PhoneCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls autoRotate enableZoom={false} />
      <Suspense>
        <Environment preset="park" />
        <PhoneObject />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className=" h-[100vh] flex  justify-center   items-center p-16 mx-16 mb-[20rem]">
        <div className=" flex-col space-y-4 items-center">
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
              <h1 className="text-xl font-regular ml-3">06</h1>
            </div>
          </motion.div>

          <div className="flex space-x-3 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold  text-primary mb-4">
                Contact Us
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-regular  text-black max-w-xl leading-relaxed mb-4">
              Nexus Network envisions to become the economic layer for rollups.
              Using our staking infrastructure, Rollups can stake the ETH locked
              in their bridges and earn continuous stable staking returns.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <StyledButton color="#1A1A1A" round="0px">
              Book a call
            </StyledButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="  h-[70vh] w-[30vw] items-center">
            <PhoneCanvas />
          </div>
        </motion.div>
      </div>
      <div ref={ref} className="-mt-[25rem]" />
    </>
  )
}

export { About, Problems, Oppportunity, Features, RoadMap, Team, Contact }
