/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cardGrey: "#f8f8f8",
        iconGrey: "#e2e2e2",
        textBlack: "#030303",
        textGrey: "#7a7a7a",
        outlineGrey: "#f2f2f2",
      },
      fontFamily: {
        work: ["var(--font-work)"],
        syne: ["var(--font-syne)"],
      },
      boxShadow: {
        shadows: "0px 11px 25px 5px rgba(160, 174, 192, .6)",
      },
    },
  },
  plugins: [],
};
