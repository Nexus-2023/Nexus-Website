import Container from "@/components/Common/Container"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import React from "react"
import Eth from "/public/Images/GetStarted/Ethereum.svg"
import NexusEth from "/public/Images/GetStarted/NexusEth.svg"
import Yields from "/public/Images/GetStarted/Yeilds.svg"
import { GetStartedCard } from "@/components/Common/Card"
import ClientPageView from "@/components/Client/ClientPageView"
const GetStarted = () => {
  return (
    <Container>
      <ClientPageView pageName="Get-started-Page" />
      <PageHeading text="Get Started with Nexus" />
      <PageSubHeading text="Bridge ETH, get NexusETH, and start earning yields effortlessly" />

      <div className="flex w-full justify-evenly items-center my-12 max-w-[80rem]">
        <GetStartedCard src={Eth} size={70} text="Bridge Eth" />
        <div className=" h-5 w-full   bg-gradient-to-r from-[var(--scedule-call-from-gradient)]  to-white  -mt-8 flex items-center" />
        <GetStartedCard src={NexusEth} size={50} text="Get NexusETH" />
        <div className=" h-5 w-full  bg-gradient-to-r from-[var(--scedule-call-from-gradient)]  to-white  -mt-8 flex items-center " />
        <GetStartedCard src={Yields} size={70} text="Earn Yeilds" />
      </div>
    </Container>
  )
}

export default GetStarted
