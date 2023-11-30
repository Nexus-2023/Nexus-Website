import React from "react"
import logo from "/public/Image/nexusLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { useInView, animate, useAnimate, motion } from "framer-motion"
import { useEffect, useRef } from "react"
const Links = {
  Documentation: "",
  "Nexus Dapp": "",
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
        <div className="h-[30vh] bg-primary text-white flex justify-evenly  p-10">
          <div className="flex flex-col space-y-2  w-[40vw]">
            <div>
              <Image src={logo} height={170} width={170} />
            </div>

            <div className="text-md">© 2023 Nexus Network, Inc.</div>
          </div>

          <div className="flex flex-col text-base space-y-2 ">
            <div className=" text-lg font-semibold">
              <Link href={""}>Links</Link>
            </div>

            <div className="text-md flex flex-col space-y-2">
              {Object.entries(Links).map(([key, value]) => (
                <Link href={value} target="_blank">
                  {key}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-base space-y-2 ">
            <div className=" text-lg font-semibold">
              <Link href={""}>Social</Link>
            </div>

            <div className="text-md flex flex-col space-y-2">
              {Object.entries(Socials).map(([key, value]) => (
                <Link href={value} target="_blank">
                  {key}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={ref} className="-mt-[1rem]" />
    </>
  )
}

export default Footer
