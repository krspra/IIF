/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "custom1":"930px",
        "custom2":"1110px"
      }
      ,
      colors:{
        blue:{
          1:"var(--primary-color)",
        },
        black:{
          1:"#524D3F"
        }
      },
      backgroundImage: {
        'custom-gradient':"var(--bg-gradient)",
      },
    },
  },
  plugins: [],
}

