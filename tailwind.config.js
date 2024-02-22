/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        objektiv: "objektiv-mk2, sans-serif",
      },
      fontWeight: {
        thin: 200,
        normal: 400,
        black: 700,
        heavy: 900,
      },
      colors: {
        house: {
          black: "#100f0f",
          700: "#2b2b2b",
          600: "#1c1b1a",
          500: "#282726",
          400: "#343331",
          300: "#403e3c",
          200: "#575653",
          100: "#878580",
          dim: "#3f3f46",
          white: "#cecdc3",
          whitewarm: "#f2efeb",
          orange: "#DA702C",
          yellow: "#D0A215",
          green: "#b1ff9e",
          bluelight: "#00bbff",
          purplelight: "#8B7EC8",
          magentalight: "#CE5D97",
        },
      },
    },
  },
  plugins: [],
};
