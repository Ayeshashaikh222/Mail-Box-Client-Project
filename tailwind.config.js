/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'brown': '#8B4513', 
      },
      borderColor: {
        'brown-500': '#8B4513'
      },
      backgroundColor: {
        'brown-500': '#8B4513'
      },
      
    },
  },
  plugins: [],
}

