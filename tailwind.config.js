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
    keyframes: {
      enterScreen: {
        '0%': { transform: 'scale(0)' },
        '75%': {transform: 'scale(1.2)'},
        '100%': { transform: 'scale(1)' },
      }
    },
    animation: {
      enterScreen: 'enterScreen 0.5s ease-in-out'
    }
  },
  plugins: [],
}

