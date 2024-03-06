"use client"

import * as React from "react"

import { Box, Toolbar, IconButton, Menu, Button, MenuItem } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import logo from "/public/Images/logo.png"

import gsap, { Power2 } from "gsap"
import { Flip } from "gsap/Flip"
import { Link, animateScroll as scroll } from "react-scroll"

gsap.registerPlugin(Flip)

function ResponsiveAppBar() {
  const openCalendly = () => {
    window.open("https://calendly.com/mnkrj500/30min", "_blank")
    return false
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const navbarRef = useRef<HTMLDivElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const scrollToSection = (targetId: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    })
  }

  const handleLinkClick = (targetId: string) => {
    scrollToSection(targetId)
  }

  const handleScroll = () => {
    const navbar = navbarRef.current

    if (navbar) {
      const scrollY = window.scrollY

      gsap.to(navbar, {
        opacity: scrollY > 100 ? 0 : 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  const handleMouseEnter = () => {
    const navbar = navbarRef.current

    if (navbar) {
      gsap.to(navbar, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = () => {
    const navbar = navbarRef.current

    if (navbar) {
      gsap.to(navbar, {
        opacity: scrollY > 100 ? 0 : 1,
        duration: 1,
        ease: "power2.out",
      })
    }
  }
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navbarRef])

  return (
    <div className="flex justify-center  " ref={ref}>
      <div className=" -z-10 w-[85vw]   blur-2xl  bg-[#091824] h-[4rem] absolute" />

      <nav
        className=" backdrop-blur-lg z-30  sm:px-8 px-0 w-full   rounded-2xl fixed mx-auto  md:max-w-[85vw]     "
        aria-labelledby="menu-button"
        ref={navbarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="web nexus logo"
              className="sm:mr-16"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Links */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                mt: "1px",

                backdropFilter: "blur(5px)",
                "& .MuiMenu-paper": {
                  backgroundColor: "#01080F",
                  borderRadius: "8px",
                },
              }}
            >
              <Link
                to="HomePage"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "#77C3F8",
                    },
                  }}
                >
                  Home
                </MenuItem>
              </Link>
              <Link
                to="WorkPage"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "#77C3F8",
                    },
                  }}
                >
                  About
                </MenuItem>
              </Link>

              <a href="https://docs.nexusnetwork.co.in/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "#77C3F8",
                    },
                  }}
                >
                  Docs
                </MenuItem>
              </a>

              <Link
                to="Footer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "#77C3F8",
                    },
                  }}
                >
                  Contact
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          {/* Mobile menu end */}

          {/* web/mobile button and links */}

          <Box
            sx={{
              display: { xs: "flex", md: "none", flexGrow: 1, mr: 2 },
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="mobile nexus logo"
              className="  "
            />
          </Box>

          {/* Web Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[#77C3F8]  duration-300  transition-all  ease-in-out">
              <Link
                to="HomePage"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </button>

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[#77C3F8]  duration-300  transition-all  ease-in-out">
              <Link
                to="WorkPage"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </button>

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[#77C3F8]  duration-300  transition-all  ease-in-out">
              <a href="https://docs.nexusnetwork.co.in/" target="_blank">
                Docs
              </a>
            </button>

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[#77C3F8]  duration-300  transition-all  ease-in-out">
              <Link
                to="Footer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{
                color: "#77C3F8",
                textTransform: "capitalize",
                fontSize: "16px",
                "@media screen and (max-width: 400px)": {
                  fontSize: "12px",
                },
              }}
              onClick={openCalendly}
            >
              Schedule a call
            </Button>
          </Box>
        </Toolbar>
      </nav>
    </div>
  )
}
export default ResponsiveAppBar
