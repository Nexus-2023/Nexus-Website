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
      small: "400px", // green
      medium: "640px",
      large: "740px",
      tablet: "900px", // red

      laptop: "1024px", // blue

      desktop: "1280px",
    },
  },
  plugins: [],
}
