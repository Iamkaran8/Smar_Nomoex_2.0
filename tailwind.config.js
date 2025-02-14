/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        "Black": '#000000'  /*  RGB (0, 0, 0) */,
        "White": '#FFFFFF',
        'Bright_Blue': 'rgba(0, 82, 255, 1)'  /* #0052FF  */,
        'Light_Azure': 'rgba(0, 82, 255, 0.2) '/* #0052FF  20% */,
        'Deep_Azure': 'rgba(0, 82, 255, 0.8) '/* #0052FF*  80% */,
        "Soft_Black": 'rgba(0, 0, 0, 0.75)',
        "Slate_Gray": 'rgba(93, 93, 91, 1)'  /*  #5D5D5B  */,
        "Soft_White": 'rgba(255, 255, 255, 0.5)'  /* #FFFFFF 50%*/,
        "Soft_Gray": 'rgba(207, 219, 213, 0.6);' /* #CFDBD560% */,
        "Soft_Gray_20": 'rgba(207, 219, 213, 0.2);' /* #CFDBD5 20% */,
        "Red" : '#CD0000'
      }
    },
  },
  plugins: [],
}