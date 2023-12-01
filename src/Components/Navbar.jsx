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
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Documentation", "Contact", "Schedule call"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
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
          duration: 0.5, // Adjust the duration for the fade-in effect
          delay: 2.6,
        }}
      >
        <div className="laptop:flex  px-[10rem]   justify-between   fixed  mx-auto w-full items-center backdrop-blur rounded-lg z-30   hidden    ">
          <div className="flex">
            <Image src={logo} alt="Nexus Logo" width={150} height={150} />
          </div>

          <div className="  ">
            <ul className="flex space-x-8 text-lg text-black font-semibold items-center ">
              <li className="">
                <StyledLink>
                  {" "}
                  <span> Home </span>{" "}
                </StyledLink>
              </li>
              <li className="">
                {" "}
                <StyledLink> About </StyledLink>
              </li>
              <li className="">
                {" "}
                <StyledLink> Docs </StyledLink>
              </li>
              <li className="">
                {" "}
                <StyledLink> Demo </StyledLink>
              </li>
              <StyledButton color="#1A1A1A" round="0px">
                Contact us
              </StyledButton>
            </ul>
          </div>
        </div>

        {/* mobile nav */}

        <div className="  justify-between fixed  flex    p-4 mx-auto w-full items-center backdrop-blur rounded-lg z-30  laptop:hidden  ">
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
