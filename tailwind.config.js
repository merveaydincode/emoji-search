/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        dark: "#141414",
        "gray-dark": "#3f3f3f",
        gray: "#333333",
        white: "#ffffff",
        lime: "#cce772",
      },
    },
  },
  plugins: [],
};
