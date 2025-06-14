/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui']
      },

      container:{

        center:true,
        padding:{

         DEFAULT: "1rem",
         sm:"2rem",
         lg:"4rem",
         xl:"5rem",
         "2xl":"6rem"

        },

      }
    },
  },
  plugins: [],

  varinats: {
   extend: { 
     display:["focus-group"]
   },
  }
}

