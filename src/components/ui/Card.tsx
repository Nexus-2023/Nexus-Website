import React from "react"

import { Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

import linkedin from "/public/Images/linkedinIcon.svg"
import twitter from "/public/Images/twitterIcon.svg"

interface AnnounceCardProps {
  h1: string
  p: string
  link: string
}

interface TeamCardProps {
  src: string
  name: string
  title: string
  twitterlink: string
  linkedinlink: string
}

interface YeildCardProps {
  src: string
  heading: string
  range: string
  width: number
  height: number
}

interface PartnerCardProps {
  src: string
  text: string

  width: number
  height: number
}

export function AnnounceCard({ h1, p, link }: AnnounceCardProps) {
  return (
    <div className=" space-y-5 flex   space-x-4    h-full     lg:min-w-[20vw] min-w-[45vw] flex-col justify-start items-start  ">
      <div className="flex flex-col justify-between  min-h-64  px-4 py-4">
        <h1 className="  font-medium text-blue-100 text-xl     ">{h1}</h1>

        <p className=" text-gray-400    leading-relaxed  w-full max-w-96">
          {p}
        </p>

        <Link href={link} target="_blank">
          <Button sx={{ color: "#77C3F8" }}> Read More</Button>
        </Link>
      </div>
    </div>
  )
}

export function YieldCard({
  src,
  heading,
  range,
  width,
  height,
}: YeildCardProps) {
  return (
    <div className="flex flex-col  justify-center items-center  space-y-4 lg:mb-0 mb-16">
      <Image
        src={src}
        width={width}
        height={height}
        alt="yeild icons"
        className=" mb-2  "
      />
      <h1 className="md:text-2xl    text-2xl  text-wrap text-center ">
        {" "}
        {heading}
      </h1>
      <p className="text-gray-500  text-lg font-medium">{range}</p>
    </div>
  )
}

export function PartnersCard({ src, text, width, height }: PartnerCardProps) {
  return (
    <div className=" space-y-5 flex flex-col w-full  lg:max-w-[20vw] justify-center items-center">
      <Image src={src} width={width} height={height} alt="partner icon" />
      <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h3 className=" text-gray-400 text-xl ">{text}</h3>
    </div>
  )
}

export function TeamCard({
  src,
  name,
  title,
  twitterlink,
  linkedinlink,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src}
        width={150}
        height={150}
        alt="profile pic"
        className=" "
      />

      <h1 className="text-xl font-semibold text-blue-50 mb-2">{name}</h1>
      <h1 className=" text-xl text-gray-400 mb-2">{title}</h1>

      <div className="flex space-x-2   ">
        <Link
          href={twitterlink}
          target="_blank"
          className="hover:scale-125    transition-transform d duration-500 ease-in-out"
        >
          <Image
            src={twitter}
            width={40}
            height={40}
            alt="twitter icon"
            className=" "
          />
        </Link>

        <Link
          href={linkedinlink}
          target="_blank"
          className="hover:scale-125    transition-transform d duration-500 ease-in-out"
        >
          <Image
            src={linkedin}
            width={40}
            height={40}
            alt="linkedin icon"
            className=" "
          />
        </Link>
      </div>
    </div>
  )
}
