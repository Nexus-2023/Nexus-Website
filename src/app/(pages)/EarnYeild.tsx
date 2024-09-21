import React from "react"
import Container from "@/components/Common/Container"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import icon1 from "/public/Images/EarnYeild/i1.svg"
import icon2 from "/public/Images/EarnYeild/i2.svg"
import icon3 from "/public/Images/EarnYeild/i3.svg"

import { EarnYieldCard } from "@/components/Common/Card"
const EarnYeild = () => {
  return (
    <Container>
      <PageHeading text="How does Nexus Network earn yields?" />
      <PageSubHeading text="Your NexusETH is always working for you, thanks to our dynamic yield strategies" />

      <div className="flex w-full justify-evenly items-center mt-[4rem]">
        <EarnYieldCard
          heading="Staking and restaking returns"
          paragragh="We participate in ETH staking and restaking across various platforms to ensure consistent yield generation."
          src={icon1}
          size={70}
        />

        <EarnYieldCard
          heading="Lending ETH"
          paragragh="Your assets are lent securely in the DeFi ecosystem, allowing you to benefit from lending interest without any action needed"
          src={icon2}
          size={70}
        />

        <EarnYieldCard
          heading="Intents"
          paragragh="We optimize by executing specific strategies based on market conditions and yield opportunities."
          src={icon3}
          size={70}
        />
      </div>
    </Container>
  )
}

export default EarnYeild
