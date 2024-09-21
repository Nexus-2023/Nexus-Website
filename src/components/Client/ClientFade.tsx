"use client"
import React from "react"
import { Fade } from "react-awesome-reveal"

const ClientFade = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => {
  return (
    <Fade cascade triggerOnce delay={delay} duration={400}>
      {children}
    </Fade>
  )
}

export default ClientFade
