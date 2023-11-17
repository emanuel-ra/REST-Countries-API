/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "nunito-sans":['Nunito Sans', 'sans-serif']
      },
      backgroundColor:{
        'theme-light':'var(--bg-theme-light)' ,
        'theme-very-dark':'var(--bg-theme-very-dark)' ,
        'theme-dark':'var(--bg-theme-dark)' ,
        'theme-dark-gray':'var(--bg-dark-gray)'
      },
      textColor:{
        'theme-light':'var(--text-theme-light)' ,
        'theme-dark':'var(--text-theme-dark)'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

