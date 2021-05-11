const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require("zlib")
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
    port: 3000
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
    new CompressionPlugin({
      filename: '[path][name].js',
      test: /\.js$/,
      algorithm: "brotliCompress",
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      deleteOriginalAssets: true
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true
    })
  ]
}
