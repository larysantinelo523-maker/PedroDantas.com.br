/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f2940',
        'brand-navy-light': '#183c5e',
        'brand-gold': '#d4af37',
        'brand-gold-light': '#ebd173',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'fade-in-right-delay': 'fade-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
