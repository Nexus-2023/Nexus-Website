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
import { logo } from "../../public/Images/images"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <div className="flex justify-center ">
      <nav
        className=" backdrop-blur-lg z-10 py-2 px-4 w-full   fixed mx-auto  md:max-w-[80vw]  "
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
              backdropFilter: "blur(5px)",
            }}
          >
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}

            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* {pages.map(page => (
                <div
                  className=" w-[45rem] px-8 py-2   text-white backdrop-blur-xl"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <h3 className=" font-white text-lg font-medium">{page}</h3>
                </div>
              ))} */}

            {/* <div
              className="absolute top-full inset-x-0 p-2 transition-all duration-300 ease-in-out"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              onClick={handleCloseNavMenu}
            >
              {pages.map(page => (
                <a
                  key={page}
                  href={`#${page}`}
                  className="block px-4 py-2 text-sm text-white bg-slate-500 hover:bg-slate-700 focus:outline-none focus:bg-slate-700"
                >
                  {page}
                </a>
              ))}
            </div> */}
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
