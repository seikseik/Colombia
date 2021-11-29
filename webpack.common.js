const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(ico|jpg|jpeg|JPG|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit:false,
          outputPath: "assets/",
          name: '[name].[ext]'
        }
      },
    }
   ]
  }
};
