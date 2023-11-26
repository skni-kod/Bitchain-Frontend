/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff5700",
        mainHover: "#e84f00",

        bgWhite: "#f0f0f0", //kolor tła
        bgWhite1: "#f1f5fc", //kolor tla elementu
        bgWhite1Hover: "#f1f5f9", //kolor tla elementu ale hover

        bgDark: "#0a0b0d", //kolor tła
        bgDark1: "#141519", //kolor tla elementu
        bgDark1Hover: "#2b2d35", //kolor tla elementu ale hover

        //&-rose-600 - to jest czerwony wszedzie
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
