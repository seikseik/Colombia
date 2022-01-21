const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.html"
    }),
    new HtmlWebpackPlugin({
      filename: "index-en.html",
      template: "./src/template-en.html"
    }),
    new HtmlWebpackPlugin({
      filename: "index-sp.html",
      template: "./src/template-sp.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
