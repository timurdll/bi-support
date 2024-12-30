const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // точка входа
  output: {
    path: path.resolve(__dirname, "dist"), // папка для сборки
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        // use: {
        //   loader: "ts-loader",
        // //   options: {
        // //     presets: ["@babel/preset-env", "@babel/preset-react"], // для ES6 и React
        // //   },
        // },
      },
      {
        test: /\.css$/, // для файлов .css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // для изображений
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // шаблон HTML файла
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
