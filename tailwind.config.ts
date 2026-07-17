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
        cream: "#FDF3D0",
        "cream-deep": "#FBEAB0",
        teal: {
          DEFAULT: "#3B8EA5",
          dark: "#256B7F",
          light: "#6FB4C6",
        },
        coral: {
          DEFAULT: "#E8823C",
          dark: "#C96A28",
          light: "#F2A868",
        },
        ink: "#1F3A4D",
        seafoam: "#DCEEF0",
        peach: "#F7E3CB",
        gold: "#F4B942",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out infinite 1.5s",
        bob: "bob 4s ease-in-out infinite",
        "wave-drift": "waveDrift 18s linear infinite",
        "drift-slow": "drift 40s linear infinite",
        "drift-slower": "drift 60s linear infinite reverse",
        wiggle: "wiggle 1.2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        waveDrift: {
          "0%": { backgroundPositionX: "0" },
          "100%": { backgroundPositionX: "1000px" },
        },
        drift: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
