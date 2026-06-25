/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          ivory: "#F7F4EF",
          beige: "#EEE8DE",
          purple: "#6E4BB8",
          black: "#111111",
          charcoal: "#222222",
          "dark-gray": "#1E1E1E",
          gray: "#7A7A7A",
          "light-gray": "#F3F4F6",
          lavender: {
            light: "#FAF9F6",
            DEFAULT: "#C5A880",
            dark: "#B59870",
            hover: "#B59870"
          }
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'chevron-rotate': 'chevronRotate 0.3s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
