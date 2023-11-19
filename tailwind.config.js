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
          white: "#cecdc3",
          whitewarm: "#f2efeb",
          red: "#AF3029",
          redlight: "#D14D41",
          orange: "#BC5215",
          orangelight: "#DA702C",
          yellow: "#AD8301",
          yellowlight: "#D0A215",
          green: "#66800B",
          greenlight: "#879A39",
          cyan: "#24837B",
          cyanlight: "#3AA99F",
          blue: "#205EA6",
          bluelight: "#00bbff",
          purple: "#5E409D",
          purplelight: "#8B7EC8",
          magenta: "#A02F6F",
          magentalight: "#CE5D97",
        },
      },
    },
  },
  plugins: [],
};
