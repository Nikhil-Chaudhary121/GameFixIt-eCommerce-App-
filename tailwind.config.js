/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 🚫 no dark theme at all
  content: [
    "./App/**/*.{js,ts,tsx}",
    "./app/**/*.{js,ts,tsx ,jsx}",
    "./app.{js,ts,tsx ,jsx}",
    "./components/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./components.{js,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#8E6CEF",
        white: {
          DEFAULT: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5", // softer white shade
        },
        orange: {
          200: "#FE8C00", // separate from white
        },
        dark: {
          100: "#1D182A",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        "quicksand": ["quicksand-r", "sans-serif"],
        "quicksand-medium": ["quicksand-m", "sans-serif"],
        "quicksand-bold": ["quicksand-b", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
      },
      fontSize: {
        "3xl": 30,
        "4xl": 36,
        "5xl": 42, // ✅ now usable with text-5xl
      },
    },
  },
  plugins: [],
};
