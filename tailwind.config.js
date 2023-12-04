/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0394FF",
        secondary: "#045192",
        inter: "#126BB5",
      },
    },

    screens: {
      xsmall: "300px",
      small: "400px", // green
      medium: "640px",
      tablet: "900px", // red
      // => @media (min-width: 640px) { ... }

      laptop: "1024px", // blue
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
