/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", "serif"],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
