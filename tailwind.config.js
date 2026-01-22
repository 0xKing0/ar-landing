/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'military-green': '#8fbc5a',
        'military-green-light': '#9fcc6a',
        'military-black': '#0a0a0a',
      },
      fontFamily: {
        rajdhani: ['"Rajdhani"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        orbitron: ['"Orbitron"', 'ui-monospace', 'monospace'],
      },
      backgroundColor: {
        'main': '#0a0e0d',
        'dark-main': '#0a110f',
      },
    },
  },
  plugins: [],
}
