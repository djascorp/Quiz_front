module.exports = {
  content: [
    './index.html',                  // Fichier HTML principal
    './src/**/*.{vue,js,ts,jsx,tsx}' // Tous les fichiers Vue, JS, TS, JSX, et TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
};