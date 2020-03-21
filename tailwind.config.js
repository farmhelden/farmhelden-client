module.exports = {
  important: true,
  theme: {
    fontFamily: {
      title: ["Roboto Slab, sans-serif"],
      body: ["Roboto, sans-serif"]
    },
    extend: {
      colors: {
        "primary-light": "#91B169",
        "primary-dark": "#325802",
        "secondary-light": "#CEEECE",
        "secondary-dark": "#749A60",
        "accent-light": "#F5E5D4",
        "accent-dark": "#F5E5D4"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "even", "odd"]
  }
};