import React from "react"
import Image, { StaticImageData } from "next/image"

interface BoxProps {
  src: StaticImageData
  title: string
  paragraph: string
  size: number
}

export function Box({ src, title, paragraph, size }: BoxProps) {
  return (
    <div
      className={`px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[#0F1923]   to-[#1B2630]    border-8 border-[#28333d] rounded-2xl    border-double flex justify-center items-center  `}
    >
      <div>
        <Image src={src} width={size} height={size} alt="box image" />
      </div>

      <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h4 className=" text-center text-xl mb-2">{title}</h4>

      <p className=" text-center  text-gray-500">{paragraph}</p>
    </div>
  )
}

export function FullBox({ src, title, paragraph, size }: BoxProps) {
  return (
    <div className="px-4  h-full w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[#0F1923]   to-[#1B2630]  border-8 border-[#28333d] rounded-2xl    border-double flex justify-center items-center   ">
      <div>
        <Image src={src} width={size} height={size} alt="box image" />
      </div>

      <div className="h-[0.2rem]  min-h-max w-full  max-w-64  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h4 className=" text-center text-2xl mb-2">{title}</h4>

      <p className=" text-center text-lg text-gray-500">{paragraph}</p>
    </div>
  )
}

export default Box
