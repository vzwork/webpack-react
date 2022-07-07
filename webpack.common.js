const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  plugins: [htmlPlugin],
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: [__dirname + '/src'],
        use: [{loader: 'style-loader'},{ loader: 'css-loader'}]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: [__dirname + '/src'],
        use: [{loader: 'file-loader'}]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};