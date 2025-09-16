/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', ...fontFamily.sans],
        audiowide: ['var(--font-audiowide)', ...fontFamily.sans],
        exo2: ['var(--font-exo2)', ...fontFamily.sans],
        geist: ['var(--font-geist-sans)', ...fontFamily.sans],
        geistMono: ['var(--font-geist-mono)', ...fontFamily.mono],
        russo: ['var(--font-russo)', ...fontFamily.sans],

      },
    },
  },
  plugins: [],
}
