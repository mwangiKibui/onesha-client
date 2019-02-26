const path = require("path");
// https://oneshaapp.herokuapp.com
module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://onesha.co.ke",
        secure: false
      }
    }
  },
  outputDir: path.resolve(__dirname, "public")
};
