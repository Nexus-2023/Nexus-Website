import { createTheme } from "@mui/material/styles"
import { PaletteColorOptions } from "@mui/material/styles/createPalette"

declare module "@mui/material/styles" {
  interface Palette {
    customScheme: PaletteColorOptions
    chatBackground: PaletteColorOptions
    border: PaletteColorOptions
  }
  interface PaletteOptions {
    customScheme?: PaletteColorOptions
    chatBackground?: PaletteColorOptions
    border?: PaletteColorOptions
  }
}

const colorSchemes = [
  {
    name: "Default",
    primary: "#77C3F8",
    secondary: "#070204",
    background: "#01080F",
    chatBackground: "#0D0609",
    border: "#92294C",
  },
]

const theme = createTheme({
  palette: {
    // Set the default color scheme
    primary: {
      main: colorSchemes[0].primary,
    },
    secondary: {
      main: colorSchemes[0].secondary,
    },
    background: {
      default: colorSchemes[0].background,
    },
    chatBackground: {
      main: colorSchemes[0].chatBackground,
    },

    border: {
      main: colorSchemes[0].border,
    },
  },
})
export default theme
