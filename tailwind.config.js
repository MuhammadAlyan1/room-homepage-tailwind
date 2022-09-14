/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        desktopHero1: "url('../src/assets/images/desktop-image-hero-1.jpg')",
        desktopHero2: "url('../src/assets/images/desktop-image-hero-2.jpg')",
        desktopHero3: "url('../src/assets/images/desktop-image-hero-3.jpg')",
      },
      fontSize: {
        heading: 'clamp(2rem, 3.5vw, 3rem)',
      },
    },
  },
  plugins: [],
};
