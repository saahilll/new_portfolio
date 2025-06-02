const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        tech: ['Tech', 'sans-serif'],
        code: ['Code', 'monospace'],
      },
      colors: {
        // New cyberpunk-inspired color scheme based on the hero image
        background: {
          dark: '#0A0B12',  // Deep space black with slight blue tint
          DEFAULT: '#12141C', // Slightly lighter space black
        },
        primary: {
          dark: '#CC0033',   // Deep lightsaber red
          DEFAULT: '#FF0044', // Intense lightsaber red
          light: '#FF3366',   // Light lightsaber red with glow
        },
        accent: {
          dark: '#003666',   // Deep cyber blue
          DEFAULT: '#0066FF', // Bright cyber blue
          light: '#339DFF',   // Light cyber blue
        },
        secondary: {
          dark: '#800033',   // Deep red-magenta
          DEFAULT: '#FF0055', // Bright red-magenta
          light: '#FF3377',   // Light red-magenta
        },
        surface: {
          dark: '#16181F',   // Dark surface
          DEFAULT: '#1E2029', // Default surface
          light: '#2A2C37',   // Light surface
        },
        text: {
          primary: '#FFFFFF',    // Pure white
          secondary: '#B0B6C4',  // Muted blue-gray
          accent: '#FF0044',     // Lightsaber red accent
        }
      },
      boxShadow: {
        'neon-red': '0 0 15px rgba(255, 0, 68, 0.6), 0 0 30px rgba(255, 0, 68, 0.4), 0 0 45px rgba(255, 0, 68, 0.2)',
        'neon-blue': '0 0 10px rgba(0, 102, 255, 0.5), 0 0 20px rgba(0, 102, 255, 0.3), 0 0 30px rgba(0, 102, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, rgba(99, 102, 241, 0.05), rgba(236, 72, 153, 0.05))',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};