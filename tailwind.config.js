/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          dark: "hsl(var(--brand-dark))",
          soft: "hsl(var(--brand-soft))",
        },
        sand: {
          DEFAULT: "hsl(var(--sand))",
          soft: "hsl(var(--sand-soft))",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)",
        card: "0 12px 40px rgba(0,0,0,.07)",
      },
    },
  },
  plugins: [],
};
