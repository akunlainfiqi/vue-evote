const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'main': '#13004A',
        'gradient-1a': '#F7620E',
        'gradient-1b': '#FBD104',
        'gradient-2a': '#42A642',
        'gradient-2b': '#9ADF6D',
        'text-main': '#3C3568',
        'text-secondary': '#797395',
        'text-tertiary': '#C6C6DE',
        'accent': '#D8DCFE'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
