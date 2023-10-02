/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hover': '0 0 2em 0.5em var(--purple-900)',
      },
    },
  },
  plugins: [],
}

