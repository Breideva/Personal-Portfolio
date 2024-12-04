/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        narrow: ["Archivo Narrow", "sans-serif"],
      },
      colors: {
        bg: "#E7D3BB",
        bgBox: "rgba(223, 197, 164, 0.3)",
        bgSkillBox: "rgba(213, 177, 134, 0.3)",
        text: "#130102",
        // textHover: "#6C5858",
        textLoud: "#F02F34",
        textLoudHover: "#F6797E",
      },
    },
  },
  plugins: [],
};
