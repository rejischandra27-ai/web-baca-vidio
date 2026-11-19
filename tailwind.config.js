/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          light: '#f4f9f4',
          paper: '#f2f8f1',
          cream: '#eaf4e8',
          mint: '#c8e6c9',
          sage: '#81c784',
          primary: '#2e7d32',
          'primary-hover': '#1b5e20',
          dark: '#1b4d24',
          deep: '#0f3117',
          night: '#081c10',
          sun: '#e69500',
          'sun-hover': '#cf8300',
          text: '#0e2b17',
          muted: '#406349'
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Lora"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Nunito"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'flutter': 'flutter 3s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'firefly': 'firefly 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        flutter: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(8px, -10px) rotate(8deg)' },
          '50%': { transform: 'translate(0px, -18px) rotate(-4deg)' },
          '75%': { transform: 'translate(-6px, -8px) rotate(6deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        firefly: {
          '0%, 100%': { opacity: '0.2', transform: 'translate(0, 0) scale(0.8)' },
          '50%': { opacity: '1', transform: 'translate(10px, -15px) scale(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
