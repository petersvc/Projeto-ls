const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: "css/bundle.css"
      })
  ]
}

