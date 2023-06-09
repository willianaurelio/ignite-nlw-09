/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter','sans-serif']  
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 5.08%, #43E7AD 59.94%, #E1D55D 91.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67%)',
      },
    },
  },
  plugins: [],
}

