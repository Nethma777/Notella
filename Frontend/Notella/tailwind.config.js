/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      //colors used in the project

      colors:{
        primary: "#2B85FF",
        secondary:"#ef863e"
      }
    },
  },
  plugins: [],
}

