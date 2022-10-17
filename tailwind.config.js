/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-peach': '#fedece',
        'tea-green': '#b0ccc0',
        'rosy-cheeks': '#fd9f96',
        'tangerine': '#f58d4e',
        'sequin': '#fedad6',
      },
    },
  },
  plugins: [],
}
