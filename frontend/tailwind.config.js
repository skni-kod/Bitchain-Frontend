/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff5700",
        bgWhite: '#f0f0f0',
        bgDark: '#333',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
