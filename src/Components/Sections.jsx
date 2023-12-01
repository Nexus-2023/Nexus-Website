"use client"
import React from "react"
import Image from "next/image"

import diagram from "/public/Image/d1.png"
import diagram2 from "/public/Image/diagram2.svg"
import diagram3 from "/public/Image/diagram3.svg"
import diagram4 from "/public/Image/diagram5.svg"
import diagram5 from "/public/Image/diagram5a.svg"

import l1 from "/public/Image/plugLogo.png"
import l2 from "/public/Image/lockLogo.png"
import l3 from "/public/Image/manageLogo.png"
import l4 from "/public/Image/settingLogo.png"

import p1 from "/public/Image/p1.png"
import p2 from "/public/Image/p2.png"
import p3 from "/public/Image/p3.png"

import twitter from "/public/Image/TwitterIcon.svg"
import linkedin from "/public/Image/linkden.svg"

import gitIcon from "/public/Image/githubIcon.svg"
import linkedinIcon from "/public/Image/linkIcon.svg"
import mailIcon from "/public/Image/Email.svg"
import twitterIcon from "/public/Image/twitter.svg"
import phone from "/public/Image/phone.svg"
import blueCircle from "/public/Image/circle.svg"

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

import { useRef, useEffect } from "react"
import { Button, FormGroup, Stack, TextField, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

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
                Nexus Network is at the forefront of revolutionizing Ethereum's
                rollup landscape. With a commitment to security,
                decentralization, and innovation, we provide an economic layer
                for rollups through our cutting-edge staking infrastructure.
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
              Addressing Ethereum's challenges, Nexus Network securely stakes
              ETH locked in rollup bridges. Our solution enhances network
              security, optimizes capital efficiency, and fosters the growth of
              rollups, aligning with the long-term vision of a staked Ethereum.
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
      </div>
      <div ref={ref} className="mt-[40rem]" />
    </div>
  )
}

const Oppportunity = () => {
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
                Embark on a lucrative investment journey with Nexus Network. As
                Ethereum's rollup-centric roadmap propels, our staking
                infrastructure becomes a gateway to unparalleled returns. With
                the ETH staked projected to grow from 1.6% to a staggering 20%
                by 2027, the opportunity to reap rewards in the billions has
                never been more compelling
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
                <Image src={diagram5} height={550} width={550} />
              </RevealContent>
              <RevealArtifact />
            </RevealContainer>
          )}
        </div>
      </div>
      <div ref={ref} className="mt-[0rem]" />
    </>
    // <div className=" h-[60vh] flex  justify-between items-center p-16   mb-[3rem]  ">
    //   <div className="flex  justify-center  space-x-24  items-center w-full">
    //     <div className=" flex-col space-y-4 items-center justify-center  ">
    //       <motion.div
    //         initial={{ opacity: 0, x: -20 }}
    //         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
    //         transition={{ duration: 0.5, delay: 1.0 }}
    //         style={{ display: "flex", spaceX: "3", alignItems: "center" }}
    //       >
    //         <div>
    //           <Image src={vector} height={50} width={100} />
    //         </div>

    //         <div>
    //           <h1 className="text-xl font-regular ml-3">03</h1>
    //         </div>
    //       </motion.div>

    //       <div className="flex space-x-3 items-center">
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //           transition={{ duration: 0.5, delay: 1.0 }}
    //         >
    //           <h1 className="text-6xl font-bold  text-primary mb-4">
    //             Opportunity
    //           </h1>
    //         </motion.div>
    //       </div>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //         transition={{ duration: 0.5, delay: 1.0 }}
    //       >
    //         <p className="text-xl font-regular  text-black max-w-xl leading-relaxed mb-4">
    // Embark on a lucrative investment journey with Nexus Network. As
    // Ethereum's rollup-centric roadmap propels, our staking
    // infrastructure becomes a gateway to unparalleled returns. With the
    // ETH staked projected to grow from 1.6% to a staggering 20% by
    // 2027, the opportunity to reap rewards in the billions has never
    // been more compelling
    //         </p>
    //       </motion.div>

    //       <div className="  -ml-[1rem] ">
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //           transition={{ duration: 0.5, delay: 1.0 }}
    //         >
    //           <StyledButton> Get Started</StyledButton>
    //         </motion.div>
    //       </div>
    //     </div>

    //     <div className="  ">
    //       {isInView && (
    //         <RevealContainer delay={1.2}>
    //           <RevealContent>
    //             <Image src={diagram5} height={550} width={550} />
    //           </RevealContent>
    //           <RevealArtifact />
    //         </RevealContainer>
    //       )}
    //     </div>
    //   </div>
    //   <div ref={ref} className="mt-[40rem]" />
    // </div>
  )
}

const Features = () => {
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

        <div className="  flex   justify-center items-center mt-16   w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className=" p-8 mx-4  border-2 min-h-[30vh] border-[#5404FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#5404FF]">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l1} width={50} height={50} />
                </div>

                <h1 className="text-[#5404FF] text-2xl font-medium">
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
            <div className=" p-8 mx-4 border-black  min-h-[30vh] max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-black ">
              <div className="flex space-x-5 items-center  mb-4 ">
                <div>
                  <Image src={l2} width={50} height={50} />
                </div>

                <h1 className="text-black text-2xl font-medium">
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
        <div className="  flex    justify-center items-center mt-16  w-[80vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className=" p-8 mx-4  border-2  min-h-[30vh] border-[#0394FF] max-w-lg flex flex-col w-full shadow-md rounded-md shadow-[#0394FF]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l3} width={50} height={50} />
                </div>

                <h1 className="text-[#0394FF] text-2xl font-medium">
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
            <div className=" p-8 mx-4 border-[#9F00AD]   min-h-[30vh] max-w-lg border-2 flex flex-col w-full shadow-md rounded-md shadow-[#9F00AD]">
              <div className="flex space-x-5  items-center mb-4 ">
                <div>
                  <Image src={l4} width={50} height={50} />
                </div>

                <h1 className="text-[#9F00AD] text-2xl font-medium">
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
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/ashishkumar29/"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image src={linkedin} height={40} width={40} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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
                <Link
                  href={"https://twitter.com/mnkrj500"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/mayank-raj/"}
                  target="_blank"
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
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
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
                >
                  <Image src={twitter} height={40} width={40} />
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/rohit-aggarwal-6045a6b7/"}
                  className="hover:scale-105  scale-100 ease-in-out  duration-150"
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

// const PhoneObject = () => {
//   const ref = null
//   const gltf = useGLTF("./model/scene.gltf")

//   return (
//     <mesh ref={ref}>
//       <hemisphereLight intensity={0.1} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={0.2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <directionalLight intensity={0.2} position={[1, 1, 0]} />
//       <primitive object={gltf.scene} scale={0.012} rotation-y={0} />
//     </mesh>
//   )
// }

// export const PhoneCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <OrbitControls autoRotate enableZoom={false} />
//       <Suspense>
//         <Environment preset="park" />
//         <PhoneObject />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

const mainPrimary = `#04A5FF`
const darkGreen = `#CBCBCB`

const CssTextField = styled(TextField)({
  transition: "all 0.3s ease-in-out",
  backgroundColor: "white",

  "& label": { color: "gray" },
  "& helperText": { color: "white" },
  "& .MuiInputBase-input": { color: "black" },

  "& label.Mui-focused": {
    transition: "all 0.3s ease-in-out",
    color: mainPrimary,
  },
  "& .MuiInput-underline:after": {
    transition: "all 0.3s ease-in-out",
    borderBottomColor: mainPrimary,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: mainPrimary,
    },
    "&:hover fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
    "&.Mui-focused fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
  },
})

const CssMessageField = styled(TextField)({
  transition: "all 0.3s ease-in-out",
  backgroundColor: "white",

  "& label": { color: "gray" },
  "& helperText": { color: "white" },

  "& .MuiInputBase-input": { color: "black", height: "8rem" },

  "& label.Mui-focused": {
    transition: "all 0.3s ease-in-out",
    color: mainPrimary,
  },
  "& .MuiInput-underline:after": {
    transition: "all 0.3s ease-in-out",
    borderBottomColor: mainPrimary,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: mainPrimary,
    },
    "&:hover fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
    "&.Mui-focused fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
  },
})

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className=" h-[100vh] flex  justify-evenly -mt-[10rem] items-center p-16 mx-16 mb-[20rem]">
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
            <div className="flex    text-black  space-x-2 items-center   ">
              <a
                href="https://github.com/Nexus-2023"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out duration-75"
              >
                <Image src={gitIcon} width={42} height={42} />
              </a>
              <a
                href="https://www.linkedin.com/company/nexus-network-staking-infra/"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={linkedinIcon} width={42} height={42} />
              </a>
              <a
                href=""
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={mailIcon} width={42} height={82} />
              </a>
              <a
                href="https://twitter.com/_Nexus_Network"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={twitterIcon} width={42} height={52} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Stack sx={{ mt: 2 }}>
              <FormGroup>
                <CssTextField
                  label="Name"
                  id="username"
                  style={{ marginTop: 8, width: "30rem" }}
                  name="username"
                />
                <Typography
                  className="text-md text-[#111111] mb-8"
                  sx={{ marginTop: 1, fontWeight: "500" }}
                >
                  your full Name
                </Typography>

                <CssTextField
                  label="Email"
                  id="email"
                  type="email"
                  style={{ marginTop: 1, width: "30rem" }}
                  name="email"
                />
                <Typography
                  className="text-md text-[#111111]"
                  sx={{ mb: 2, marginTop: 1, fontWeight: "500" }}
                >
                  your Email
                </Typography>

                <CssMessageField
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                  style={{ marginTop: 1, width: "30rem" }}
                  name="message"
                />
                <Typography
                  className="text-md text-[#111111]"
                  sx={{ mb: 2, marginTop: 1, fontWeight: "500" }}
                >
                  your message
                </Typography>
              </FormGroup>
            </Stack>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ marginLeft: "-1rem" }}
          >
            <StyledButton color="#1A1A1A" round="0px">
              Send
            </StyledButton>
          </motion.div>
        </div>
        <div ref={ref} className="mt-[45rem]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="  h-[70vh] w-[30vw]  flex z-10 relative items-center">
            {/* <PhoneCanvas /> */}
            <Image src={phone} width={400} height={400} />
            <div className="absolute top-20 left-20 -z-10">
              <Image src={blueCircle} width={450} height={450} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export { About, Problems, Oppportunity, Features, RoadMap, Team, Contact }
