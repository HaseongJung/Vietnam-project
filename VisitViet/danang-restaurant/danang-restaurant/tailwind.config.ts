import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
