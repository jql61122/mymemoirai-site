/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // automatically switch based on user system setting
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // From your iOS color palette
        primary: {
          DEFAULT: "#29543D", // light mode
          dark: "#2E6B4F",    // dark mode
        },
        accent: {
          DEFAULT: "#E6C684",
          dark: "#FFFFFF",
        },
        background: {
          DEFAULT: "#FAF8F2",
          dark: "#141414",
        },
        textcolor: {
          DEFAULT: "#1E1E1E",
          dark: "#E1E1E1",
        },
      },
    },
  },
  plugins: [],
};
