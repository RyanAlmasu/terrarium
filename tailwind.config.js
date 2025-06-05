/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8A9A5B',
          dark: '#6e7c47',
          light: '#a3b076',
        },
        beige: {
          DEFAULT: '#E8DCCA',
          dark: '#d9c9b0',
          light: '#f2e9de',
        },
        charcoal: {
          DEFAULT: '#36454F',
          dark: '#2a363e',
          light: '#4c5f6d',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      transitionTimingFunction: {
        'zen-ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};