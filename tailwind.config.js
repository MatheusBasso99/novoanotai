/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: '#F54B06',    // Fiery Orange
          secondary: '#222222',  // Charcoal Black
          accent: '#FFC107',     // Bright Yellow
          dark: '#111111',       // Deep Black
          background: '#F9F9F9', // Light Gray
        },
        fontFamily: {
          display: ['Montserrat', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          'flame': '0 0 10px 2px rgba(245, 75, 6, 0.5)',
        },
        animation: {
          'flame': 'flame 2s infinite',
          'sizzle': 'sizzle 1.5s infinite',
        },
        keyframes: {
          flame: {
            '0%, 100%': { boxShadow: '0 0 10px 2px rgba(245, 75, 6, 0.5)' },
            '50%': { boxShadow: '0 0 15px 3px rgba(245, 75, 6, 0.8)' },
          },
          sizzle: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
          },
        },
      },
    },
    plugins: [],
  }