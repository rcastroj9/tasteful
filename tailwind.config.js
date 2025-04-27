/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      General: ["General Sans", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      Mblack: "#171717",
      Myellow: "#ff9e34",
      MsoftYellow: "#ddc3f0",
      Mgray: "#525252",
      Mbg: "#151D38",
    },
    screens: {
      xxs: "375px",
      xx: "425px",
      ss: "480px",
      xs: "576px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
