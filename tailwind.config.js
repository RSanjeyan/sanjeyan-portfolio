/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black for light mode
          dark: '#FFFFFF',    // White for dark mode
          hover: '#333333',
          'dark-hover': '#CCCCCC'
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#000000',
        },
        'bg-secondary': {
          light: '#FAFAFA',
          DEFAULT: '#FAFAFA',
          dark: '#0A0A0A',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
          'primary-dark': '#FFFFFF',
          'secondary-dark': '#A1A1AA'
        },
        border: {
          light: '#E5E5E5',
          DEFAULT: '#E5E5E5',
          dark: '#27272A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 40px rgba(0,0,0,.04)',
        'card-dark': '0 10px 40px rgba(255,255,255,.04)'
      }
    },
  },
  plugins: [],
}
