"use client"
import Image from "next/image"
import React from "react"
import logo from "/public/Image/Logo.png"
// import styles from "../styles/button.module.css"
import { StyledButton } from "./Button"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between fixed   p-4 mx-auto w-[80vw] items-center backdrop-blur rounded-lg z-30">
        <div className="flex">
          <Image src={logo} alt="Nexus Logo" width={150} height={150} />
        </div>

        <div className="  ">
          <ul className="flex space-x-8 text-lg font-semibold items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Docs</li>
            <li>Contact</li>
            <StyledButton color="#1A1A1A" round="0px">
              Schedule call
            </StyledButton>
          </ul>
        </div>
      </div>
    </>
  )
}

export { Navbar }
