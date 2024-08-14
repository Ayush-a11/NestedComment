/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"rgb(61, 61, 240)",
        "secondary":"rgb(17,17,17)"
      }
    },
  },
  plugins: [],
}

