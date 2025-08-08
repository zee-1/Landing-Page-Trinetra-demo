/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#1a0033',
        'sacred-saffron': '#FF6B35',
        'ethereal-cyan': '#00D9FF',
        'off-white': '#FAFAF8',
        'charcoal': '#1C1C1E',
      },
      fontFamily: {
        'serif-sacred': ['serif'],
        'sans-clean': ['Inter', 'sans-serif'],
        'mono-data': ['monospace'],
      },
      backgroundImage: {
        'purple-cyan': 'linear-gradient(135deg, #1a0033 0%, #00D9FF 100%)',
        'saffron-fade': 'linear-gradient(45deg, #FF6B35 0%, rgba(255, 107, 53, 0.1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'rotate-sacred': 'rotate-sacred 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        'rotate-sacred': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}