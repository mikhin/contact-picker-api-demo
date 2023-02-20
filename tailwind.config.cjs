/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "oklch(100% 0 0)",
        black: "oklch(26% 0 0)",
        pink: "oklch(89% 0.08 0)",
        yellow: "oklch(89% 0.14 84)",
        green: "oklch(89% 0.14 123)",
        turquoise: "oklch(89% 0.14 162)",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
};
