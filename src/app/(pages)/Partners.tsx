import React from "react"
import { PartnerSlider } from "@/components/Common/Partners"
import ClientPageView from "@/components/Client/ClientPageView"
import { SliderContainer } from "@/components/Common/SliderContainer"
export default function PartnersPage() {
  return (
    <>
      <ClientPageView pageName="Partners-Page" />
      <SliderContainer heading="Our Partners">
        <PartnerSlider />
      </SliderContainer>
    </>
  )
}
