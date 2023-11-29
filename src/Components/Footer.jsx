import React from "react"
import logo from "/public/Image/nexusLogo.svg"
import Image from "next/image"
import Link from "next/link"

const Links = {
  Documentation: "",
  "Nexus Dapp": "",
  Demo: "",
}

const Socials = {
  Twitter: "",
  Linkedin: "",
}
const Footer = () => {
  return (
    <div className="h-[30vh] bg-primary text-white flex justify-evenly  p-10">
      <div className="flex flex-col space-y-2  w-[40vw]">
        <div>
          <Image src={logo} height={170} width={170} />
        </div>

        <div className="text-md">© 2023 Nexus Network, Inc.</div>
      </div>

      <div className="flex flex-col text-base space-y-2 ">
        <div className=" text-lg font-semibold">
          <Link href={""}>Links</Link>
        </div>

        <div className="text-md flex flex-col space-y-2">
          {Object.entries(Links).map(([key, value]) => (
            <Link href={value}>{key}</Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-base space-y-2 ">
        <div className=" text-lg font-semibold">
          <Link href={""}>Social</Link>
        </div>

        <div className="text-md flex flex-col space-y-2">
          {Object.entries(Socials).map(([key, value]) => (
            <Link href={value}>{key}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
