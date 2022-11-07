/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'primary': ['Roboto'],
      'secondary': ['"Roboto Slab"'],
    },
    extend: {
      colors: {
        accent: "#DFEB95",
      }
    },
  },
  plugins: [],
}
