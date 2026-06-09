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
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 4px 24px rgba(124, 58, 237, 0.08)",
        premiumHover: "0 12px 30px rgba(124, 58, 237, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
