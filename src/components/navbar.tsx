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
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
          padding: "8px",
        }}
      >
        <Container maxWidth="xl">
          <nav className="backdrop-blur-xl z-10  w-full">
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
                  }}
                >
                  {pages.map(page => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        width: "45rem",
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{ fontSize: "16px", fontWeight: 400 }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "white",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
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
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "white",
                      display: "block",
                      fontWeight: 300,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button>Schedule a call</Button>
              </Box>
            </Toolbar>
          </nav>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
export default ResponsiveAppBar
