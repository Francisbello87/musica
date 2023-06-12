/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "#ffffff",
        bgColor: "#1D2123",
        darkAlt: "#1A1E1F",
        primaryColor: "#03A9F4",
        lightColor: "#EFEEE0",
        secondaryColor: "#FACD66"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

