/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    sm: "370px",
    md: "640px",
    lg: "1056px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
});