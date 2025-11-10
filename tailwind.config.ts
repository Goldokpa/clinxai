import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0096ff",
          dark: "#0077cc",
        },
        secondary: {
          DEFAULT: "#9333ea",
          dark: "#7c3aed",
        },
        dark: {
          DEFAULT: "#0a0e27",
          lighter: "#1a1e37",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0096ff, #9333ea)",
      },
    },
  },
  plugins: [],
};
export default config;

