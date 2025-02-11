import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        borderColor: "#0E464F",
        teal: "#24A0B5",
        borderColor2: "#07373F",
        container: "#08252B",
        container2: "#052228",
        accessColor: "#197686",
        strokeColor: "#2BA4B9",
        container3: "#052930"

      },
      backgroundImage: {
        'background-gradient': 'linear-gradient(to bottom, #02191D, white), radial-gradient(circle at bottom, #24A085 20%, #24A085 0%)',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
