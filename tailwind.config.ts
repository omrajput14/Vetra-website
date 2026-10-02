import type { Config } from "tailwindcss";

// Palette is taken from the Vetra logo (forest green) and the yellow livestock ear tag.
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
          DEFAULT: "#F7F8F4",
          alt: "#EDF0E9",
        },
        night: {
          DEFAULT: "#06261A",
          2: "#0B3423",
        },
        leaf: "#8DC63F",
        // Vetra app design system (lib/core/design_system/app_colors.dart)
        parch: { DEFAULT: "#F4EEE5", deep: "#EAE2D6" },
        sage: "#EBF0DD",
        olive: { DEFAULT: "#3F6900", deep: "#2E4D00" },
        lime: "#94E130",
        danger: "#C62828",
        amber: "#F2994A",
        vet: "#2F6FDE",
        hair: "#A1A1A1",
        outline: "#C1CAB0",
        coal: { DEFAULT: "#141414", 2: "#1F1F1F", 3: "#2A2A2A" },
        ink: {
          DEFAULT: "#141414",
          soft: "#4E4D4C",
          muted: "#737373",
        },
        line: {
          DEFAULT: "rgba(15, 31, 23, 0.14)",
          soft: "rgba(15, 31, 23, 0.08)",
        },
        pasture: {
          900: "#0B3D24",
          800: "#0E4B2C",
          700: "#145A35",
          600: "#1B6B3F",
          500: "#2A7D4B",
          400: "#4C9A63",
          300: "#84BC93",
          100: "#D5E8D9",
          50: "#ECF5EE",
        },
        clay: {
          700: "#7A4E2C",
          500: "#9C6438",
        },
        gold: {
          600: "#8F6A00",
          500: "#F2C200",
          400: "#F7D54A",
          100: "#FDF3C4",
        },
        alert: {
          600: "#B32F18",
          500: "#C9381F",
          100: "#F9DCD5",
        },
        card: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F8F4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        deva: ["var(--font-deva)", "var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
        // Older demo components use font-serif for headings; point them at the display face.
        serif: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        tactile: "0 20px 50px -25px rgba(11,61,36,0.30)",
        "tactile-lg": "0 30px 60px -20px rgba(11,61,36,0.40)",
        "tactile-hover": "0 25px 60px -15px rgba(11,61,36,0.35)",
        passport: "0 25px 50px -12px rgba(11, 61, 36, 0.25), 0 0 0 1px rgba(15, 31, 23, 0.12)",
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
