import Image from "next/image"
import img from "/public/Images/effect.png"
import img2 from "/public/Images/effect2.png"
import { Button } from "@mui/material"
import { buttonCss } from "@/css"
export default function Home() {
  return (
    <div className=" h-[80vh] justify-center items-center flex ">
      {/* web */}
      <div className="  justify-center items-center space-y-8 lg:flex lg:flex-col  hidden">
        <div className="">
          <h1 className="text-7xl font-bold  bg-gradient-to-b text-transparent bg-clip-text ">
            Economic Layer for Rollups
          </h1>
        </div>

        <div className="">
          <p className=" font-normal text-gray-400">
            Implement native yields on your rollup in a secure and non-custodial
            way
          </p>
        </div>
        {/* hover:from-[#3593ff] hover:to-[#ffffff] */}
        <div className="">
          <button className={buttonCss}>Launch App</button>
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
            Implement native yields on your rollup in a secure and non-custodial
            way
          </p>
        </div>

        <div className="">
          <button className={buttonCss}>Launch App</button>
        </div>
      </div>
    </div>
  )
}
