import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050508",
        panel: "#0c0d14",
        violet: "#875cff",
        cyan: "#57e6ff",
      },
      boxShadow: {
        glow: "0 0 80px rgba(110, 82, 255, .18)",
      },
    },
  },
  plugins: [],
};

export default config;
