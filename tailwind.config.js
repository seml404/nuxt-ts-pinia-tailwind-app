/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "440px": "440px",
        "660px": "660px",
      },
      opacity: {
        "09": "0.9",
      },
      spacing: {
        "3px": "3px",
        "6px": "6px",
        "8px": "8px",
        "10px": "10px",
        "18px": "18px",
        "20px": "20px",
        "30px": "30px",
        "60px": "60px",
      },
      borderRadius: { "50pc": "50%" },
      colors: {
        gray: "#8D8D8D",
      },
      fontSize: {
        "18px": "18px",
      },

      plugins: [],
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "480px",
      // => @media (min-width: 480px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1000px",
    },
  },
};
