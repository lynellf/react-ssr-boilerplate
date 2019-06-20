const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  output: {
    path: `${__dirname}/public`,
    publicPath: '/public/',
    filename: "bundle.[contenthash].js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          "@babel/preset-react",
          [
            "@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }
        ],
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [ new CleanWebpackPlugin() ],
  devtool: 'source-map'
};