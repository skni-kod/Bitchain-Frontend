/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff5700",
        mainHover: "#e84a00",

        bgWhite: "#f0f0f0", //kolor tła
        bgWhite1: "#f1f5fc", //kolor tla elementu
        bgWhite1Hover: "#f1f5f9", //kolor tla elementu ale hover

        bgDark: "#0a0b0d", //kolor tła
        bgDark1: "#141519", //kolor tla elementu
        bgDark1Hover: "#2b2d35", //kolor tla elementu ale hover

        gray: "#8f8a88"

        //&-rose-600 - to jest czerwony czasem
        //&-slate-300 - taki wyszarzony font

        //&-slate-200 - szary border light mode
        //&-stone-700 - szary border dark mode
        
        //&-green-500 - zielony 
        //&-red-500 - czerwony wszedzie
        //&-yellow-500 - rzułty
      },
      screens: {
        xs: "320px",
      },
      gridTemplateRows: {
        "layout": ' auto'
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
