/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f3f3f3',
      'gray':'#242424',
      'green':'#4ee1a0',
      'black':'#151414',
      "red":'#ff6f5b'



    },
    screens:{

      'md': {'max': '777px'},
      'sm': {'max': '480px'},
      // => @media (max-width: 767px) { ... }

    },
    extend: {},
  },
  plugins: [],
}