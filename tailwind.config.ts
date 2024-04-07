import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7700ff",
          "secondary": "#0000ff",
          "accent": "#00d9ff",
          "neutral": "#302a27",
          "base-100": "#374151",
          "info": "#00e5ff",
          "success": "#01a86e",
          "warning": "#ff9200",
          "error": "#ff606b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
