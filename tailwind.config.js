/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '12px',
      },
      fontFamily:{
        spaceGrotesk: 'Space Grotesk',
      },
      boxShadow: {
        'green-glow': '0 4px 8px rgba(0, 255, 0, 0.5)', 
      },
    },
  },
  plugins: [],
}