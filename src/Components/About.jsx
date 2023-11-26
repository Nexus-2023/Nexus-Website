import React from "react"
import Image from "next/image"

import diagram from "/public/Image/d1.png"
import diagram2 from "/public/Image/d2.png"
import diagram3 from "/public/Image/d3.png"
import vector from "/public/Image/vector.png"
import { StyledButton } from "./Button"

const About = () => {
  return (
    <div className=" h-[70vh] flex  justify-evenly items-center p-16 mx-16 mb-[10rem]">
      <div className="flex- flex-col space-y-4 items-center">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={vector} height={50} width={100} />
          </div>

          <div>
            <h1 className="text-xl font-regular">01</h1>
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <div>
            <h1 className="text-6xl font-bold  text-primary">About Us</h1>
          </div>
        </div>

        <div>
          <p className="text-xl font-regular  text-black max-w-xl leading-relaxed">
            Nexus Network envisions to become the economic layer for rollups.
            Using our staking infrastructure, Rollups can stake the ETH locked
            in their bridges and earn continuous stable staking returns.
          </p>
        </div>

        <div>
          <button>Get Started</button>
        </div>
      </div>

      <div>
        <Image src={diagram} height={400} width={400} />
      </div>
    </div>
  )
}

const Problems = () => {
  return (
    <div className=" h-[70vh] flex  justify-evenly items-center p-16 mx-16 mb-[10rem]">
      <div>
        <Image src={diagram2} height={500} width={500} />
      </div>

      <div className="flex- flex-col space-y-4 items-center">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={vector} height={50} width={100} />
          </div>

          <div>
            <h1 className="text-xl font-regular">02</h1>
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <div>
            <h1 className="text-6xl font-bold  text-primary">
              Problems we Solve
            </h1>
          </div>
        </div>

        <div>
          <p className="text-xl font-regular  text-black max-w-xl leading-relaxed">
            Nexus Network envisions to become the economic layer for rollups.
            Using our staking infrastructure, Rollups can stake the ETH locked
            in their bridges and earn continuous stable staking returns.
          </p>
        </div>

        <div>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

const Oppportunity = () => {
  return (
    <div className=" h-[70vh] flex justify-center   items-center ml-6       mb-[10rem]">
      <div className="flex- flex-col space-y-4 items-center justify-center">
        <div className="flex space-x-3 items-center justify-center">
          <div className="flex space-x-3  items-center  ">
            <div>
              <Image src={vector} height={50} width={100} />
            </div>

            <div>
              <h1 className="text-xl font-regular">03</h1>
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-bold  text-primary">Oppportunity</h1>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-xl font-regular  text-black max-w-2xl leading-relaxed">
            Nexus Network envisions to become the economic layer for rollups.
            Using our staking infrastructure, Rollups can stake the ETH locked
            in their bridges and earn continuous stable staking returns.
          </p>
        </div>

        <div>
          <Image src={diagram3} height={500} width={800} />
        </div>
      </div>
    </div>
  )
}
export { About, Problems, Oppportunity }
