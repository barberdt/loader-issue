const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  devServer: {
    port: '9000',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'index.js'),
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'index.js'),
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
}
