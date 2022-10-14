import { merge } from 'webpack-merge'
import webpackCommon from './webpack.common';

export default merge(webpackCommon, {
  mode: 'production',
  devtool: 'source-map'
})