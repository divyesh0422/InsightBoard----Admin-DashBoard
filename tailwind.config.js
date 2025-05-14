// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all components
  ],
  darkMode: "class", // Enables dark mode via 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        secondary: "#10b981", // Emerald
        background: "#f9fafb",
        darkBg: "#1f2937", // Dark gray
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean modern font
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
