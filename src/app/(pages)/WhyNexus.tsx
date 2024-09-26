import React from "react"
import Container from "@/components/Common/Container"
import { PageHeading, PageSubHeading } from "@/components/Common/Heading"
import ClientPageView from "@/components/Client/ClientPageView"
const WhyNexus = () => {
  return (
    <Container>
      <ClientPageView pageName="Why-Page" />
      <PageHeading text="Why use Nexus?" />
      <PageSubHeading text="Simplifying DeFi yields for everyone." />
    </Container>
  )
}

export default WhyNexus
