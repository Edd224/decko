/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1580px',
      // => @media (min-width: 1580px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },



    extend: {
    },
  },
  plugins: [],
}
