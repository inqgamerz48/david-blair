import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: "rgb(var(--pageBg) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
        brandNavy: "rgb(var(--brandNavy) / <alpha-value>)",
        roseSplit: "rgb(var(--roseSplit) / <alpha-value>)",
        skySplit: "rgb(var(--skySplit) / <alpha-value>)",
        badgeGreen: "#16A34A",
        badgeBlue: "#2563EB",
        badgePink: "#EC4899",
        badgeRed: "#DC2626",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        premium: "0 4px 20px rgba(27, 43, 75, 0.03)",
        premiumHover: "0 10px 40px rgba(27, 43, 75, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
