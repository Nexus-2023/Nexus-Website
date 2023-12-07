"use client"
import Image from "next/image"
import React from "react"
import logo from "/public/Image/Logo.png"
// import styles from "../styles/button.module.css"
import { StyledButton } from "./Button"
import { Links, StyledLink } from "./Links"
import { motion } from "framer-motion"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import MenuIcon from "@mui/icons-material/Menu"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { useState, Fragment } from "react"
import { Link } from "react-scroll"
export function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div className="flex justify-center    flex-col  items-center">
      <div className="flex  justify-center  items-center flex-col  text-base text-black font-semibold  ">
        <Link to="home2" smooth duration={1000} easing="easeInOutCubic">
          <div className="justify-center items-center">
            {" "}
            <StyledLink> Home</StyledLink>
          </div>
        </Link>
        <div className="justify-center items-center">
          <Link to="about2" smooth duration={1000} easing="easeInOutCubic">
            <StyledLink> About </StyledLink>
          </Link>
        </div>
        <div className="justify-center items-center">
          <StyledLink>
            <a href="https://docs.nexusnetwork.co.in/" target="_blank">
              Docs
            </a>
          </StyledLink>
        </div>
        <div className="">
          <Link to="demo" smooth duration={1000} easing="easeInOutCubic">
            <StyledLink> Demo </StyledLink>
          </Link>
        </div>

        <Link to="contact" smooth duration={1000} easing="easeInOutCubic">
          <StyledButton color="#1A1A1A" round="0px" size="14px">
            Contact us
          </StyledButton>
        </Link>
      </div>
    </div>
  )

  return (
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ fontSize: 40 }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2.6,
        }}
      >
        <div className="laptop:flex  px-[10rem]   justify-between   fixed  mx-auto w-full items-center backdrop-blur rounded-lg z-30   hidden      ">
          <div className="flex">
            <Image src={logo} alt="Nexus Logo" width={150} height={150} />
          </div>

          <div className="  ">
            <ul className="flex space-x-8 text-lg text-black font-semibold items-center ">
              <StyledLink>
                <Link to="home" smooth duration={1000} easing="easeInOutCubic">
                  Home
                </Link>
              </StyledLink>

              <Link to="about" smooth duration={1000} easing="easeInOutCubic">
                <StyledLink> About </StyledLink>
              </Link>

              <StyledLink>
                <a href="https://docs.nexusnetwork.co.in/" target="_blank">
                  {" "}
                  Docs
                </a>
              </StyledLink>

              <StyledLink> Demo</StyledLink>
              <Link to="contact" smooth duration={1000} easing="easeInOutCubic">
                <StyledButton color="#1A1A1A" round="0px">
                  Contact us
                </StyledButton>
              </Link>
            </ul>
          </div>
        </div>

        {/* mobile nav */}

        <div className="  justify-between fixed  flex   px-4  mx-auto w-full items-center backdrop-blur rounded-lg z-30  laptop:hidden  ">
          <div className=" flex   w-full">
            <div className="flex">
              <Image src={logo} alt="Nexus Logo" width={150} height={150} />
            </div>

            <div className="  "></div>
          </div>
          <TemporaryDrawer />
        </div>
      </motion.div>
    </>
  )
}

export { Navbar }
