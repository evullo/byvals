/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: "#dd0f88",
        secondary: "#edcedc",
        ternary: "#FEF6F7"
      },
    },
  },
  plugins: [],
}

