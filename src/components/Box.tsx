import React from "react"
import d1 from "/public/Images/d1.svg"
import Image from "next/image"

interface BoxProps {
  src: string
  t1: string
  t2: string
}

function Box({ src, t1, t2 }: BoxProps) {
  return (
    <div className="  h-full  max-h-[40vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[#0F1923]   to-[#1B2630]   border-4 border-[#28333d] rounded-2xl    border-double flex justify-center items-center">
      <div>
        <Image src={src} width={300} height={300} alt="effect" />
      </div>

      <div className="h-[0.15rem] w-full  max-w-64  bg-gradient-to-br  from-[#141b22]   to-[#2776c0]  mb-4  mt-4" />

      <h4 className=" text-center text-2xl mb-2">{t1}</h4>

      <p className=" text-center text-lg text-gray-500">{t2}</p>
    </div>
  )
}

export default Box
