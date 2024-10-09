const flowbite = require("flowbite-react");
const tailwind = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 2s linear infinite",
      },
    },
    colors: {
      pink_dark:"#99154b",
      pink_light:"#e74694",
      text_dark:"#1f2937",
      text_light:"#4b5563",
      text_medium:"#374151"
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
