/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    `src/**/*.{js,ts,jsx,tsx}`,
    "../../packages/core/src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "system-ui", "sans-serif"],
        default: ["var(--font-default)", "system-ui", "sans-serif"],
      },
      colors: {
        white: "var(--novel-white)",
        stone: {
          50: "var(--novel-stone-50)",
          100: "var(--novel-stone-100)",
          200: "var(--novel-stone-200)",
          300: "var(--novel-stone-300)",
          400: "var(--novel-stone-400)",
          500: "var(--novel-stone-500)",
          600: "var(--novel-stone-600)",
          700: "var(--novel-stone-700)",
          800: "var(--novel-stone-800)",
          900: "var(--novel-stone-900)",
        },
        // custom
        background: "hsl(var(--novel-c-background))",
        foreground: "hsl(var(--novel-c-foreground))",
        border: "hsl(var(--novel-c-border))",
        muted: {
          DEFAULT: "hsl(var(--novel-c-muted))",
          foreground: "hsl(var(--novel-c-muted-foreground))",
        },
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
