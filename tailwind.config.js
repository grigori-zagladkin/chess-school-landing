/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'burgerContent': '20px 0 rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}