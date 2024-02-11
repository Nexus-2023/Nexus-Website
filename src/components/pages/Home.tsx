import React from "react"
import { buttonCss } from "@/css"

export function HomePage() {
  return (
    <div
      className={`h-[100vh] justify-center items-center    mx-16 flex  z-10 `}
    >
      {/* web */}

      <div className=" ">
        <div className="  justify-center items-center space-y-8 lg:flex lg:flex-col   hidden">
          <div className=" px-4 py-4">
            <h1 className=" text-7xl  font-bold  bg-gradient-to-b text-transparent bg-clip-text  text-center backdrop-blur py-4">
              Economic Layer for Rollups
            </h1>
          </div>

          <div className="">
            <p className=" font-normal text-gray-400  backdrop-blur">
              Implement native yields on your rollup in a secure and
              non-custodial way
            </p>
          </div>

          <div className="">
            <button className={buttonCss}>Launch App</button>
          </div>
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
