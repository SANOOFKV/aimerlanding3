/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./v2.html",
    "./thank-you.html",
    "./v2-thank-you.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // From index.html
        'thank-you-bg': '#0E3339', // Renamed from thank-you to prevent conflict
        primary: '#008BA5',
        accent: '#CEF3E4',
        'text-dark': '#101A23',
        'card-bg': '#F8FAFC',
        'dark-teal': '#004D5B',
        'dark-navy': '#101A23',
        'light-grey': '#F1F5F9', // Merged: F1F5F9 from index, F6F6F6 from thank you
        'light-teal': '#E6F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
