import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#071015",
        steel: "#6A7681",
        cloud: "#F3F6F4",
        cobalt: "#0B5FFF",
        teal: "#14A06F",
        line: "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        body: ['"Trebuchet MS"', '"Helvetica Neue"', "sans-serif"],
        display: ['"Arial Narrow"', '"Aptos Narrow"', '"Franklin Gothic Medium"', "sans-serif"]
      },
      boxShadow: {
        panel: "0 30px 80px rgba(7, 16, 21, 0.18)",
        glow: "0 18px 40px rgba(20, 160, 111, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "soft-radial":
          "radial-gradient(circle at top left, rgba(11,95,255,0.18), transparent 36%), radial-gradient(circle at bottom right, rgba(20,160,111,0.18), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;

