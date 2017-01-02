const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const curPath = path.resolve(__dirname, 'wmh');
console.log(`Current woking path is: ${curPath}`);

module.exports = {
  context: curPath,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './index.js',
  output: {
    path: curPath,
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

