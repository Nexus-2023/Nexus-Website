import Image from "next/image"
import img from "/public/Images/effect.png"
import img2 from "/public/Images/effect2.png"
import floor from "/public/Images/floor.png"
import { Button } from "@mui/material"
import { buttonCss } from "@/css"

export default function Home() {
  return (
    <div
      className={`h-[100vh] justify-center items-center flex  z-10    mx-auto container`}
    >
      <div className="backImg">
        {/* web */}
        <div className="  justify-center items-center space-y-8 lg:flex lg:flex-col  hidden">
          <div className=" px-4 py-4">
            <h1 className="text-7xl font-bold  bg-gradient-to-b text-transparent bg-clip-text  backdrop-blur py-4">
              Economic Layer for Rollups
            </h1>
          </div>

          <div className="">
            <p className=" font-normal text-gray-400  backdrop-blur">
              Implement native yields on your rollup in a secure and
              non-custodial way
            </p>
          </div>
          {/* hover:from-[#3593ff] hover:to-[#ffffff] */}
          <div className="">
            <button
              className={` backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t  from-[#007CCE] to-[#B4F6FF]  hover:from-[#007CCE] hover:to-white  hover:duration-300 hover:ease-in-out   transition  ease-in-out duration-300  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[#0D1820]  `}
            >
              Launch App
            </button>
          </div>
        </div>

        {/* mobile */}

        <div className="  justify-center items-center space-y-12 lg:hidden  flex flex-col">
          <div className="">
            <h1 className="text-6xl font-bold  bg-gradient-to-b text-transparent bg-clip-text text-wrap text-center ">
              Economic Layer for Rollups
            </h1>
          </div>

          <div className="">
            <p className=" font-normal text-gray-400 text-wrap text-center ">
              Implement native yields on your rollup in a secure and
              non-custodial way
            </p>
          </div>

          <div className="">
            <button className={buttonCss}>Launch App</button>
          </div>
        </div>
      </div>
    </div>
  )
}
