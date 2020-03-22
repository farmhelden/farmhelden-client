require('dotenv').config();
const withCss = require("@zeit/next-css");

module.exports = withCss({
  publicRuntimeConfig: {
    API_PATH: process.env.REACT_APP_API_PATH
  }
});
