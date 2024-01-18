/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-900": "#090808",
        "whiter-900": "#f8f8f8",
        "orange-900": "#F98613",
        "green-600": "#02AE28",
        "green-500": "#27AE60"
      },
      fontFamily: {
        titles: "Galindo, sans-serif",
      },
      backgroundImage: {
        'splash-mobile': "url('./public/capa_mobile.jpg')",
        'splash-desktop': "url('./public/capa_descktop.jpg')",
      },
      animation: {
        fadeOut: 'fadeOut 2s linear forwards ',
        fadeIn: 'fadeIn 3s linear forwards ',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  }
}

