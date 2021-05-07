const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath:'/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    historyApiFallback: true,
    port: 8081
  },
  module: {
      rules: [
          {
              test: /\.(js|tsx?)$/,
              use: ['babel-loader'],
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|jpg|gif|svg)$/i,
              use: [{
                  loader: 'url-loader',
                  options: {
                      limit: true
                  }
              }],
              include: [
                  path.resolve(__dirname, 'node_modules/leaflet/dist/images')
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|svg)$/i,
              use: ['url-loader'],
              include: [
                  path.resolve(__dirname, 'node_modules/font-awesome/fonts')
              ]
          }
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true
    })
  ]
}
