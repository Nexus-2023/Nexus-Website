import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#01080F",
      },
      backgroundImage: {
        // "gradient-to-b": `linear-gradient(to bottom, var(--text-gradient-from) 70%, var(--text-gradient-to) 30%)`,
        "gradient-to-b": `linear-gradient(to bottom, white 55%, #85caf8 80%)`,
      },
    },
  },
  corePlugins: {
    // ...other Tailwind core plugins
    backgroundImage: true,
  },
  plugins: [],
}
export default config
