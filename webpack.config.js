const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const source = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: source,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "generateUnique",
  },
  plugins: [new CleanWebpackPlugin()],
};
