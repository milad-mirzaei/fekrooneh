/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar': "url('../public/images/navbarbg.svg')",
        'buttonPurple': "url('../public/images/buttonBgPurple.svg')",
        'buttonGradient': "url('../public/images/gradientButtonBg.svg')",
        'buttonGold': "url('../public/images/ButtonGoldBg.svg')",
        'canvasBg': "url('../public/images/CanvasBg.svg')",
        'levelCard': "url('../public/images/levelCardBg.svg')",
      },
    },
  },
  plugins: [],
}
