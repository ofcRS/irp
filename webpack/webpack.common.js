import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /.[jt]sx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: false,
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  }
}