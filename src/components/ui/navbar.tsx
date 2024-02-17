"use client"

import * as React from "react"

import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

import Image from "next/image"

import { logo } from "../../../public/Images/images"
const pages = ["Home", "About", "Docs", "contact"]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className="flex justify-center     ">
      <div className=" -z-10 w-[85vw]   blur-2xl  bg-[#091824] h-[4rem] absolute" />

      <nav
        className=" backdrop-blur-lg z-30  px-8 w-full   rounded-2xl fixed mx-auto  md:max-w-[85vw]    "
        aria-labelledby="menu-button"
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
              alt="nexus logo"
              className="mr-16"
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
                // width: "100vw",
                backdropFilter: "blur(5px)",
                "& .MuiMenu-paper": {
                  backgroundColor: "#01080F",
                  borderRadius: "8px",
                },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
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
                  <Typography
                    textAlign="center"
                    sx={{
                      px: "8px",
                      fontSize: "16px",
                      fontWeight: 100,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none", flexGrow: 1, mr: 2 },
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="nexus logo"
              className="  "
            />
          </Box>

          {/* Web Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <button
                key={page}
                className="my-2 mx-5 capitalize  font-normal  block   hover:text-[#77C3F8]  duration-300  transition-all  ease-in-out"
              >
                {page}
              </button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ color: "#77C3F8" }}>Schedule a call</Button>
          </Box>
        </Toolbar>
      </nav>
    </div>
  )
}
export default ResponsiveAppBar
