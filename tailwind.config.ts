import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          950: "#060F1A",
          900: "#0A1B2E",
          800: "#0D2740",
          700: "#123454",
          600: "#164067",
          500: "#0B88DD",
        },
        gold: {
          DEFAULT: "#CBA95D",
          light: "#E8CC79",
          dark: "#9C7C3C",
        },
        cream: "#F6F3ED",
        stone: {
          50: "#FAF9F7",
          100: "#F1EFEA",
          200: "#E4E0D8",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(120deg, #E8CC79 0%, #CBA95D 100%)",
        "navy-gradient": "linear-gradient(120deg, #064977 0%, #0B88DD 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
