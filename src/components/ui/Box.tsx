import React from "react"
import d1 from "/public/Images/d1.svg"
import Image from "next/image"

interface BoxProps {
  src: string
  t1: string
  t2: string
  iw: number
  ih: number
}

export function Box({ src, t1, t2, iw, ih }: BoxProps) {
  return (
    <div
      className={`px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[#0F1923]   to-[#1B2630]    border-8 border-[#28333d] rounded-2xl    border-double flex justify-center items-center  `}
    >
      <div>
        <Image src={src} width={iw} height={ih} alt="box image" />
      </div>

      <div className="  h-[0.2rem]   min-h-max w-full  max-w-64  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h4 className=" text-center text-2xl mb-2">{t1}</h4>

      <p className=" text-center text-lg text-gray-500">{t2}</p>
    </div>
  )
}

export function FullBox({ src, t1, t2, iw, ih }: BoxProps) {
  return (
    <div
      className=" px-4  h-full      w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[#0F1923]   to-[#1B2630]  border-8 border-[#28333d] rounded-2xl    border-double flex justify-center items-center   "
      id="box"
    >
      <div>
        <Image src={src} width={iw} height={ih} alt="box image" />
      </div>

      <div className="h-[0.2rem]  min-h-max w-full  max-w-64  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h4 className=" text-center text-2xl mb-2">{t1}</h4>

      <p className=" text-center text-lg text-gray-500">{t2}</p>
    </div>
  )
}

export default Box
