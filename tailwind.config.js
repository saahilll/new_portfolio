/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Chakra Petch"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: { dark: '#0A0B12', DEFAULT: '#12141C' },
        primary: { dark: '#CC0033', DEFAULT: '#FF0044', light: '#FF3366' },
        accent: { dark: '#003666', DEFAULT: '#0066FF', light: '#339DFF' },
        surface: { dark: '#16181F', DEFAULT: '#1E2029', light: '#2A2C37' },
        text: { primary: '#FFFFFF', secondary: '#B0B6C4' },
      },
      boxShadow: {
        'neon-red':
          '0 0 15px rgba(255, 0, 68, 0.6), 0 0 30px rgba(255, 0, 68, 0.4), 0 0 45px rgba(255, 0, 68, 0.2)',
      },
      borderRadius: { xl: '1rem', '2xl': '1.5rem', '3xl': '2rem' },
    },
  },
};
