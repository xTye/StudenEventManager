module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#212121",
      white: "#ffffff",
      grey: "#828487",
    },
    fontFamily: {
      sans: ["Calibri", "sans-serif"],
      serif: ["Calibri", "serif"],
    },
    extend: {
      transitionProperty: {
        but: 300,
      },
      spacing: {
        10: "10px",
        15: "15px",
        25: "25px",
        50: "50px",
        100: "100px",
        400: "400px",
      },
    },
  },
  plugins: [],
};
