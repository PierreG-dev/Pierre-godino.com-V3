// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-In-Time mode
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // Purge uniquement ce qui est utilisé
  darkMode: 'class', // ou 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
