const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9001/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 9001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'list',
      filename: 'remoteEntry.js',
      exposes: {
        './ListClientApp': path.resolve(__dirname, 'src', 'pages', 'List'),
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.1.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.1.0',
        },
        'styled-components': {
          singleton: true,
          requiredVersion: '^5.3.5',
        },
      },
    }),
    new htmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
