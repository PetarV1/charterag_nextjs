/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenVogue950: "var(--greenVogue950)",
        greenVogue900: "var(--greenVogue900)",
        blueVogue400: "var(--blueVogue400)",
        yellow: "var(--yellow)",
        background: "var(--background)",
        darkBlue: "var(--darkBlue)",
        white200: "var(--white200)",
        emerald500: "var(--emerald500)",
        emerald100: "var(--emerald100)",
        gray600: "var(--gray600)",
        gray500: "var(--gray500)",
        white100: "var(--white100)",
        blueVogue200: "var(--blueVogue200)",
      },
    },
  },
  plugins: [],
};

export default config;
