/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "oklch(100% 0 0)",
        black: "oklch(20% 0.08 314)",
        gray: "oklch(20% 0.08 314 / 12%)",
        "pink-100": "oklch(89% 0.08 0)",
        "pink-200": "oklch(89% 0.08 314)",
        orange: "oklch(89% 0.14 84)",
        "green-100": "oklch(89% 0.14 123)",
        "green-200": "oklch(89% 0.13 162)",
        turquoise: "oklch(89% 0.12 197)",
      },
      gridTemplateRows: {
        layout: "1fr auto",
      },
      fontFamily: {
        base: ["Martian Mono", "monospace"],
        display: ["Split Check Font", "sans"],
      },
    },
  },
};
