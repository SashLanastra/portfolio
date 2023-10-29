/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#314641',
        'secondary': '#715C83',
        'color-blocker': '#FF5C00',
        'header-primary': '#8F79A1',
        'black-75': '#000000be',
        'black-25': '#00000041',
        'black-50': '#00000080',
        'bg-primary': '#E1DFDF'
      }
    },
  },
  plugins: [],
}
