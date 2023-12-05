import React from "react"
import logo from "/public/Image/nexusLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { useInView, animate, useAnimate, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { StyledLink } from "./Links"
const Links = {
  Documentation: "https://docs.nexusnetwork.co.in/",
  "Nexus Dapp": "https://nexus-dashboard-omega.vercel.app/",
  Demo: "",
}

const Socials = {
  Twitter: "https://twitter.com/_Nexus_Network",
  Linkedin:
    "https://www.linkedin.com/company/nexus-network-staking-infra/about/",
}
const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="h-[30vh] bg-primary hidden medium:flex text-white  justify-evenly  p-10  rounded-xl m-0   ">
          <div className="flex flex-col    w-[40vw]">
            <div>
              <Image src={logo} height={170} width={170} />
            </div>

            <div className="text-md mt-2">office@nexusnetwork.co.in</div>
            <div className="text-sm mt-9  opacity-70">
              © 2023 Nexus Network, Inc.
            </div>
          </div>

          <div className="flex flex-col text-base space-y-2  mb-16">
            <div className=" text-lg font-semibold">
              <Link href={""}>Links</Link>
            </div>

            <div className="text-md flex flex-col space-y-2">
              {Object.entries(Links).map(([key, value]) => (
                <StyledLink hoverColor="white" Col="white">
                  <a href={value} target="_blank">
                    {" "}
                    {key}{" "}
                  </a>
                </StyledLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-base space-y-2  mb-16">
            <div className=" text-lg font-semibold">
              <Link href={""}>Social</Link>
            </div>

            <div className="text-md flex flex-col space-y-2">
              {Object.entries(Socials).map(([key, value]) => (
                <StyledLink
                  hoverColor="white"
                  Col="white"
                  href={value}
                  target="_blank"
                >
                  <a href={value} target="_blank">
                    {" "}
                    {key}{" "}
                  </a>
                </StyledLink>
              ))}
            </div>
          </div>
        </div>

        {/* mobile*/}

        <div className="h-[50vh] bg-primary flex-col flex medium:hidden medium:h-[30vh] text-white  justify-center items-center p-10 rounded-xl m-0  ">
          <div className="flex flex-col   justify-center items-center  mb-[3rem] w-[40vw]">
            <div>
              <Image src={logo} height={170} width={170} />
            </div>

            <div className="text-sm  opacity-70">
              © 2023 Nexus Network, Inc.
            </div>
          </div>

          <div className="flex space-x-24 justify-evenly  mb-16">
            <div className="flex flex-col text-base space-y-2 ">
              <div className=" text-lg font-semibold">
                <Link href={""}>Links</Link>
              </div>

              <div className="text-md flex flex-col space-y-2">
                {Object.entries(Links).map(([key, value]) => (
                  <StyledLink
                    hoverColor="white"
                    Col="white"
                    href={value}
                    target="_blank"
                  >
                    <a href={value} target="_blank">
                      {" "}
                      {key}{" "}
                    </a>
                  </StyledLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col text-base space-y-2 ">
              <div className=" text-lg font-semibold">
                <Link href={""}>Social</Link>
              </div>

              <div className="text-md flex flex-col space-y-2">
                {Object.entries(Socials).map(([key, value]) => (
                  <StyledLink
                    hoverColor="white"
                    Col="white"
                    href={value}
                    target="_blank"
                  >
                    <a href={value} target="_blank">
                      {" "}
                      {key}{" "}
                    </a>
                  </StyledLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={ref} className="-mt-[1rem]" />
    </>
  )
}

export default Footer
