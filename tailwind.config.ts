import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F1EEE1",
          alt: "#EAE5D4",
        },
        ink: {
          DEFAULT: "#211F16",
          soft: "#4B4939",
          muted: "#7A7865",
        },
        pasture: {
          900: "#1E3324",
          800: "#243E2C",
          700: "#2C4A34",
          600: "#35593E",
          500: "#3F6B49",
          400: "#52845D",
          300: "#7CA584",
          100: "#D3E2D6",
          50: "#EAF2EC",
        },
        clay: {
          700: "#7A4E2C",
          500: "#9C6438",
        },
        gold: {
          600: "#B98726",
          500: "#D2A23A",
          400: "#E3B95B",
          100: "#F6ECD2",
        },
        alert: {
          600: "#AE402C",
          500: "#C64C36",
          100: "#F9DDD7",
        },
        card: {
          DEFAULT: "#FBF8EF",
          alt: "#F4F0E4",
        },
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        tactile: "0 20px 50px -25px rgba(30,51,36,0.35)",
        "tactile-lg": "0 30px 60px -20px rgba(30,51,36,0.45)",
        "tactile-hover": "0 25px 60px -15px rgba(30,51,36,0.4)",
        passport: "0 25px 50px -12px rgba(30, 51, 36, 0.28), 0 0 0 1px rgba(33, 31, 22, 0.14)",
      },
      animation: {
        scan: "scan 4.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        radar: "radarSweep 4s linear infinite",
        pulseRing: "pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        stampIn: "stampIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        scan: {
          "0%": { top: "-40%" },
          "55%": { top: "100%" },
          "100%": { top: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        radarSweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.9" },
          "50%": { transform: "scale(1.8)", opacity: "0.2" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        stampIn: {
          "0%": { transform: "scale(2.5) rotate(-25deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(-14deg)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
