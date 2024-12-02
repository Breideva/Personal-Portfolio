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
        bgBox: "rgba(239, 226, 210, 0.3);",
        text: "#130102",
        textLoud: "#F02F34",
        textLoudHover: "#F35359",
      },
    },
  },
  plugins: [],
};
