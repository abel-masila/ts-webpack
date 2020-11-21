const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "public",
  },
  devServer: {
    contentBase: "./public",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
};
