import React from "react"
import { FunderSlider } from "@/components/Common/Partners"
import ClientPageView from "@/components/Client/ClientPageView"
import { SliderContainer } from "@/components/Common/SliderContainer"
export default function BackedByPage() {
  return (
    <>
      <ClientPageView pageName="Backed-By-Page" />
      <SliderContainer heading="Backed By the Best">
        <FunderSlider />
      </SliderContainer>
    </>
  )
}
