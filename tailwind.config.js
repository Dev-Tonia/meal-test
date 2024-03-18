/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC6F19",
        secondary: "#165049",
        "secondary-900": "#09221F",
        "primary-50": "#FCF1E8",
        "secondary-50": "#E8EEED",
        "text-1": "#808080",
      },
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
