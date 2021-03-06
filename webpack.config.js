var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './demo'
  ],
  output: {
    path: path.join(__dirname, '/src/'),
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.js/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded'}
    ]
  }
};
