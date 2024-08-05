import daisyui from "daisyui";
import type { Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a0ff",
          secondary: "#96da00",
          accent: "#00aeff",
          neutral: "#1e1100",
          "base-100": "#fdfeff",
          info: "#00aef5",
          success: "#008500",
          warning: "#ba4f00",
          error: "#ffa0b5",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
