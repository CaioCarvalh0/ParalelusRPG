/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'rosa-choque':'#FF1457',
      'rosa-escuro':'#613C4C',
      'rosa-cinza': '#453745',
      'cinza-claro':'#35313B',
      'cinza-escuro':'#2B2C30',
      
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}