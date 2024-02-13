import React from "react"
import logo from "/public/Images/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full   w-full lg:p-16 py-16 flex     items-center   relative       ">
        <div className=" w-full    xl:space-x-80   lg:space-x-40   md:space-x-32   sm:space-x-28 space-x-16  px-8 flex justify-center">
          <div className="flex flex-col space-y-4">
            <Image
              src={logo}
              width={120}
              height={120}
              alt="effect"
              className=" "
            />

            <p className=" xl:text-lg text-sm lg:text-md  text-gray-400">
              © 2023 Nexus Network, Inc.
            </p>
          </div>
          <div className="flex flex-col ">
            <p className=" sm:text-lg text-sm text-gray-400 mb-3">Socials</p>

            <Link href={""} target="_blank" className="sm:text-lg text-sm mb-2">
              Twitter
            </Link>

            <Link href={""} target="_blank" className="sm:text-lg text-sm mb-2">
              Linkedin
            </Link>

            <Link href={""} target="_blank" className="sm:text-lg text-sm mb-2">
              Instagram
            </Link>
          </div>

          <div className="flex flex-col ">
            <p className=" sm:text-lg text-sm text-gray-400 mb-2">Links</p>

            <Link href={""} target="_blank" className="sm:text-lg text-sm mb-2">
              Documentation
            </Link>

            <Link href={""} target="_blank" className="sm:text-lg text-sm mb-2">
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
