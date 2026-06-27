/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93b4fd',
          400: '#608bfa',
          500: '#3b66f6',
          600: '#2548eb',
          700: '#1d37d8',
          800: '#1e30af',
          900: '#1e2e8a',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(30, 46, 138, 0.12)',
        card: '0 2px 12px -2px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
