import { merge } from 'webpack-merge'
import webpackCommon from './webpack.common';

export default merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: 'out'
  }
})