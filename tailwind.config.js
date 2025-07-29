/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2596BE",
          
        },
      },
    ],
  },
};
