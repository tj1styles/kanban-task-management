/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mds: { max: "900px" },

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        calc: "calc(100 - 225px)",
      },
      backgroundColor: {
        primary: " rgb(100,95,198)",
        lightSecondary: "rgb(44,44,56)",
        DarkSecondary: "rgb(33,33,45)",
        lightGrey: " rgb(224, 224, 231)",
      },
    },
  },
  plugins: [],
};
