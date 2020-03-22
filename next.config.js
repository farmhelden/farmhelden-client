const withCss = require("@zeit/next-css");
require('dotenv').config();

module.exports = withCss({
  publicRuntimeConfig: {
    API_PATH: process.env.REACT_APP_API_PATH
  }
});
