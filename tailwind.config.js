/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#080c14",
        bg2: "#0d1220",
        bg3: "#111827",
        indigo: "#6366f1",
        "indigo-l": "#818cf8",
        cyan: "#22d3ee",
        rose: "#fb7185",
        amber: "#fbbf24",
      },
    },
  },
  plugins: [],
};
