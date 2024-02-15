"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import Image from "next/image"
import { ThemeProvider } from "@mui/material"
import theme from "@/theme/theme"
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
    <div className="flex justify-center    ">
      <div className=" -z-10 w-[85vw]   blur-2xl  bg-[#091824] h-[4rem] absolute" />
      {/* border-2  */}
      <nav
        className=" backdrop-blur-lg z-10  px-8 w-full   rounded-2xl fixed mx-auto  md:max-w-[85vw]    "
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

                  border: "1px solid #77C3F8",
                },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: "45rem",
                    color: "#77C3F8",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    ":hover": {
                      background: "white",
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
              className=" "
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <button
                key={page}
                className="my-2 mx-5 capitalize  font-normal  block   hover:text-blue-300 duration-300  transition-all  ease-in-out"
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
