import Image from "next/image"
import React from "react"
import logo from "/public/Image/Logo.png"

const Navbar = () => {
  return (
    <div className="flex justify-between  mx-auto items-center">
      <div className="flex   ">
        <Image src={logo} alt="Nexus Logo" width={150} height={150} />
      </div>

      <div className=" mr-8">
        <ul className="flex space-x-8 text-lg font-semibold ">
          <li>Home</li>
          <li>About</li>
          <li>Docs</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export { Navbar }
