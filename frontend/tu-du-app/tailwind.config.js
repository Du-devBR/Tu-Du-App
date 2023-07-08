/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      h1: 24,
      h2: 20,
      h3: 16,
      p16: 16,
      p14: 14,
      p12: 12,
      span: 12,
      button: 14
    },
    fontWeight: {
      sm: 300,
      md: 500,
      lg: 700
    },
    colors: {
      black: {
        800: "#333333"
      },
      white: "#FFF",
      gray: {
        300: "#BDBDBD",
        100: "#F2F2F2"
      },
      purple: {
        1000: "#9B51E0",
        100: "#E8D5FA"
      },
      red: {
        1000: "#FA3333",
        100: "#FFBFBF"
      },
      green: {
        1000: "#27AE60",
        100: "#D1F5E0"
      },
      yellow: {
        1000: "#F2C94C",
        100: "#F9EECF"
      }
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [],
}
