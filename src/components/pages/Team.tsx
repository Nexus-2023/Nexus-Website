import React from "react"
import { buttonCss } from "@/css"
import Image from "next/image"
import team from "/public/Images/team_btn.svg"
import linkedin from "/public/Images/linkedinIcon.svg"
import twitter from "/public/Images/twitterIcon.svg"
import p1 from "/public/Images/mayank_profile.svg"
import p2 from "/public/Images/rohit_profile.svg"
import p3 from "/public/Images/ashish_profile.svg"
import { link } from "fs"
import Link from "next/link"

export function TeamPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10   md:px-16 px-0  mx-auto`}
    >
      <div className="h-full  w-full  border-2 flex justify-center  py-16 border-[#0D1820]">
        <div className="    items-center   w-full max-w-7xl p-16 flex flex-col">
          <Image
            src={team}
            width={90}
            height={90}
            alt="effect"
            className="mb-4"
          />

          <h1 className=" text-4xl font-medium mb-16">Meet the team</h1>

          <p></p>

          {/* card */}
          <div className=" lg:p-16  py-4 justify-evenly  space-y-16 lg:space-y-0 w-full lg:max-w-3xl max-w-[60vw] sm:max-w-[50vw]  flex lg:flex-row flex-col rounded-2xl relative">
            <div className="absolute top-0 left-0 rounded-2xl w-full h-full bg-gradient-to-r from-[#0B141E] via-[#1b3753] to-[#0B141E] opacity-90 pointer-events-none   backdrop-blur-xl  -z-10"></div>
            {/* 1st col */}

            <div className="flex flex-col items-center">
              <Image
                src={p1}
                width={150}
                height={150}
                alt="effect"
                className=" "
              />

              <h1 className="text-xl font-semibold text-blue-50 mb-2">
                Mayank Raj
              </h1>
              <h1 className=" text-xl text-gray-400 mb-2">CEO</h1>

              <div className="flex space-x-2">
                <Link href={""} target="_blank">
                  <Image
                    src={twitter}
                    width={40}
                    height={40}
                    alt="effect"
                    className=" "
                  />
                </Link>

                <Link href={""} target="_blank">
                  <Image
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="effect"
                    className=" "
                  />
                </Link>
              </div>
            </div>

            {/* 2 col */}

            <div className="flex flex-col items-center">
              <Image
                src={p2}
                width={150}
                height={150}
                alt="effect"
                className=" "
              />

              <h1 className="text-xl font-semibold text-blue-50 mb-2">
                Rohit Aggarwal
              </h1>
              <h1 className=" text-xl text-gray-400 mb-2">CTO</h1>

              <div className="flex space-x-2">
                <Image
                  src={twitter}
                  width={40}
                  height={40}
                  alt="effect"
                  className=" "
                />

                <Image
                  src={linkedin}
                  width={40}
                  height={40}
                  alt="effect"
                  className=" "
                />
              </div>
            </div>

            {/* 3 col */}

            <div className="flex flex-col items-center">
              <Image
                src={p3}
                width={150}
                height={150}
                alt="effect"
                className=" "
              />

              <h1 className="text-xl font-semibold text-blue-50 mb-2">
                Ashish Gupta
              </h1>
              <h1 className=" text-xl text-gray-400 mb-2">COO</h1>

              <div className="flex space-x-2">
                <Image
                  src={twitter}
                  width={40}
                  height={40}
                  alt="effect"
                  className=" "
                />

                <Image
                  src={linkedin}
                  width={40}
                  height={40}
                  alt="effect"
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
