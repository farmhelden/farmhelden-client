const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./pages/*.tsx",
    "./pages/**/*.tsx",
    "./components/*.tsx",
    "./components/**/*.tsx"
  ],

  // make sure css reset isnt removed on html and body
  whitelist: ["html", "body"],

  whitelistPatterns: [/mgl-map-wrapper.*/, /mapboxgl.*/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
