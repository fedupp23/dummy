/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./body/src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./body/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./body/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MuseoModerno-SemiBold','sans-serif'],
      },
    },
  },
  plugins: [],
};
