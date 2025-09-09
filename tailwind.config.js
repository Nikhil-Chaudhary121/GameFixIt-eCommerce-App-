// tailwind.config.js
module.exports = {
  darkMode: false,
  content: [
    "./App/**/*.{js,ts,tsx}",
    "./app/**/*.{js,ts,tsx,jsx}",
    "./app.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#8E6CEF",
        white: {
          DEFAULT: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
        },
        orange: {
          200: "#FE8C00",
        },
        dark: {
          100: "#1D182A",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        // ✅ Quicksand
        quicksand: ["quicksand-r", "sans-serif"],
        "quicksand-medium": ["quicksand-m", "sans-serif"],
        "quicksand-bold": ["quicksand-b", "sans-serif"],

        // ✅ Nunito
        nunito: ["nunito-r", "sans-serif"],
        "nunito-semibold": ["nunito-sb", "sans-serif"],
        "nunito-bold": ["nunito-b", "sans-serif"],

        // ✅ Righteous
        righteous: ["righteous", "sans-serif"],

        // ✅ Jaro
        jaro: ["jaro", "sans-serif"],
      },
      fontSize: {
        "3xl": 30,
        "4xl": 36,
        "5xl": 42,
      },
    },
  },
  plugins: [],
};
