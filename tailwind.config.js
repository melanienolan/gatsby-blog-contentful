module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      spacing: {
        "2/3": "66.6666667%",
      },
      fontFamily: {
        suez: ["Suez One", "sans-serif"],
      },
    },
  },
  variants: {
    borderWidth: ["hover"],
  },
  plugins: [],
}
