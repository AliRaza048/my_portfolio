/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    colors: {
      textPrimary: "#FFFFFF",
      accent: "#ed8936",
      gradientStart: "#3A6073",
      gradientEnd: "#16222A",

      dimWhite: "#B1C9D8",
      gray: "#E5E7EB",
      lightgray: "#38373F",
      eerieBlack: "#111827",
      blue: "#3a86ff",
      "gray-light": "#B0B0C0",
    },
    extend: {
      backgroundImage: {
        "gradient-bg": "linear-gradient(to right, #0f2027 , #203a43, #2c5364)",
        "text-gradient":
          "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #B1C9D8 0%, #5A8296 50%, #1E3542 100%)",
        "gradient-btn":
          "linear-gradient(to right, #A770EF 0%, #CF8BF3 51%, #A770EF 100%)",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
