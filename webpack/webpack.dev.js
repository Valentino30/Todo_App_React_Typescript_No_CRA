const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.author': JSON.stringify('Valentino30'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
