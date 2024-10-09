/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#5f6FFF" ,
        secondary : "#ed8900" ,
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "1rem",
        }
      }
    },
  },
  plugins: [],
}