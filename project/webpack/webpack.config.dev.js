import path from 'path';

export default {
  mode: "development",
  entry: "./src/index.tsx",
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
  stats: 'errors-warnings',
  output: {
    path: path.resolve('dist'),
    filename: 'output.js'
  }
}