import { merge } from 'webpack-merge'
import webpackCommon from './webpack.common.js';

export default merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: 'out',
    port: 3000,
    host: '0.0.0.0'
  },
  stats: 'errors-warnings'
})