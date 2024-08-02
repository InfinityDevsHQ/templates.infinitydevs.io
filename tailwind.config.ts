import { color } from "framer-motion";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        container: "500px",
      },
      colors: {
        primary: {
          DEFAULT: "#301C4E",
          dark: "#331B58",
          blue: "#3D81DF",
          purple: "#BB41E1",
        },
        "light-velvet": "#834AD8",
        accent: {
          DEFAULT: "#FF3D61",
          light: "#FE7B38",
          foreground: "#F8FAFC",
          purple: "#AF74FF",
        },
      },
      fontSize: {
        "primary-xl": "4rem",
      },
      backgroundImage: (theme: any) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "color.blue"
        )}, ${theme("color.light-velvet")}, ${theme("color.purple")})`,
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
