var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../client/src/index')
  ],
  devServer: {
    inline: true, // reload on the fly (auto refresh)
    host: "0.0.0.0", // binds to localhost for browser viewing
    port: 8080 // which port to run the server on
  },
  output: {
    path: path.resolve(__dirname, '../client/dist'),
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:8080/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve(__dirname, '../client/src')
    }]
  }
};
