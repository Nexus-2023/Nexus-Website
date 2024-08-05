"use client"
import React, { useState, useEffect } from "react"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
const AnimatedArrow = styled(ArrowForwardIcon)(() => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}))

const AnimatedClose = styled(CloseIcon)(() => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}))

export const TopNotification = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const theme = useTheme()

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div className="sm:h-6 min-[550px]:h-12  max-[512px]:h-16 max-[290px]:h-20  h-12  ">
      <div
        className={`fixed top-0 left-0 bg-[#45ABF1] z-50 text-black flex sm:flex-row flex-col items-center sm:justify-center justify-start  w-full text-center p-1   transition-opacity duration-300 ease-in ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        id="popOver"
      >
        <h1 className="font-medium lg:text-sm text-xs text-wrap lg:ml-0 ml-4 mr-2">
          Nexus Network has closed its preseed round of $1M. Check the
          announcement here
        </h1>

        <a
          href="https://x.com/NexusNetwork_0x/status/1800857459520655441"
          target="_blank"
        >
          <AnimatedArrow sx={{ color: "black", fontSize: 20 }} />
        </a>

        <AnimatedClose
          sx={{
            position: "absolute",
            right: "1rem",
            [theme.breakpoints.down("sm")]: {
              bottom: "1rem",
            },
          }}
          onClick={handleClose}
        />
      </div>
    </div>
  )
}
