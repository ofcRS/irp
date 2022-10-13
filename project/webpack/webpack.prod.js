import path from 'path';
import baseConfig from './webpack.dev';

export default {
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map'
}