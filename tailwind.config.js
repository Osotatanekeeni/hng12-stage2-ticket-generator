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
        container3: "#052930",

      },
      backgroundImage: {
        'background-gradient': "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D;"
      },
    },
  },
  plugins: [flowbite.plugin()],
};
