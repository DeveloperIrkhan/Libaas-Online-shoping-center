/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#4e4d4d",
        secondColor: "#FFD200",
        darkColor: "#808080",
        hoverColor: "#F4F6F8",
        whiteColor: "#ffffff"
      },
      letterSpacing: {
        "extra-spacing": "3.9px", // Custom negative tracking value
      }
    }
  },
  plugins: []
};
