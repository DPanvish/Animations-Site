/** @type {import('tailwindcss').Config} */

export default {
  purge: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
        fontFamily:{
            zentry: ['zentry', 'sans-serif'],
            general: ['general', 'sans-serif'],
            'circular-web': ['circular-web', 'sans-serif'],
            'robert-medium': ['robert-medium', 'sans-serif'],
            'roboto-regular': ['roboto-regular', 'sans-serif'],
        },
        colors: {}
    },
  },
  variants: {},
  plugins: [],
}