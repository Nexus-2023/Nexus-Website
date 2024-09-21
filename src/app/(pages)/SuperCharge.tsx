import React from "react"
import Container from "@/components/Common/Container"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import { SuperChargeCard } from "@/components/Common/Card"
import Image from "next/image"
import diagram from "/public/Images/SuperCharge/diagram.svg"

const SuperCharge = () => {
  return (
    <Container>
      <PageHeading text="Supercharge your ecosystem with yields" />
      <PageSubHeading text="Boost your ecosystem by integrating Nexus yields" />

      <div className="flex w-full justify-center items-center space-x-16 mt-[4rem]">
        <SuperChargeCard
          heading="Get yields to your rollup"
          paragragh="Seamlessly integrate Nexus yield strategies into your rollup, driving value directly to your chain"
        />

        <SuperChargeCard
          heading="Distribute yields in a manner that works for you"
          paragragh="Customize the distribution of yields across your ecosystem, ensuring it aligns with your unique needs"
        />
      </div>

      <Image
        src={diagram}
        width={400}
        height={400}
        alt="diagram"
        className="mt-12"
      />
    </Container>
  )
}

export default SuperCharge
