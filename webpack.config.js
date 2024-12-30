const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.svg$/,
      //   oneOf: [
      //     {
      //       issuer: /\.[jt]sx?$/,
      //       use: ["@svgr/webpack"],
      //     },
      //     {
      //       type: "asset/resource",
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
};
