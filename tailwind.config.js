/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        successAni: {
          '0%': { top: '-300px' }
        },
        successCloseAni: {
          '100%': { top: '-300px' }
        },
      },
      animation: {
        scModal: "successAni .75s ease-in-out 1",
        scModalC: "successCloseAni .75s ease-in-out 1",
      }
    },
  },
  plugins: [],
}
