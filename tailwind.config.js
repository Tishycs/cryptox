/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
         flipvertical:{
          '50%': {transform: 'rotateX(180deg)'},          
         },
      },
      animation:{
        vflip:'flipvertical 2s infinite',
      } 
    },
  },
  plugins: [],
}

