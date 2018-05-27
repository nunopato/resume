/* global module, __dirname */
const Webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const path = require('path')

const IS_DEV = process.env.NODE_ENV === 'development'
const WEBPACK_PORT = 5556

const plugins = [
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]

if (IS_DEV) {
  plugins.push(
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin()
    // new DashboardPlugin()
  )
} else {
  plugins.push(
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  )
}

module.exports = {
  devtool: IS_DEV ? 'cheap-module-source-map' : 'eval',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:' + WEBPACK_PORT + '/assets/',
    path: path.join(__dirname, 'src', 'public')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      // https://github.com/react-boilerplate/react-boilerplate/pull/1599
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true, // to enable local network testing
    port: 3000,
    compress: false,
    contentBase: path.join(__dirname, 'src', 'public'),
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
