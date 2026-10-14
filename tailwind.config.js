/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0c',
        panel: '#121216',
        card: '#1a1a20',
        border: '#2a2a32',
        muted: '#8b8b9a',
        crimson: '#e11d48',
        accent: '#a855f7',
        pin: '#18fcff',
      },
    },
  },
  plugins: [],
};
