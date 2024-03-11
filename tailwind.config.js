/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flipvertical: {
          "50%": { transform: "rotateX(180deg)" },
          // "50%": { transform: "rotateY(180deg)" },
        },
        fliphr: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        vflip: "flipvertical 10s infinite",
        hflip: "fliphr 1s infinite",
      },
    },
  },
  plugins: [],
};

