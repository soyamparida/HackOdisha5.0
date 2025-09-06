/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInLeft: 'slideInLeft 0.7s ease-out',
        popText: 'popText 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease forwards',
        fadeInSlow: 'fadeInSlow 1.5s ease-in-out forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        popText: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInSlow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
