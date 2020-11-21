const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  out: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};
