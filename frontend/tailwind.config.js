/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'tratop-red': '#FF0000', // Red
        'tratop-white': '#FFFFFF', // White
        'tratop-black': '#000000', // Black
      },
    },
  },
  plugins: [],
}

