const path = require('path')
const webpack = require('webpack')
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require('customize-cra')

module.exports = override(
  config => {
    const fallback = config.resolve.fallback || {}
    Object.assign(fallback, {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify'),
      url: require.resolve('url'),
    })

    config.resolve.fallback = fallback
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ])
    return config
  },

  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ),

  addWebpackModuleRule({
    test: /\.scss$/,
    include: [path.join(__dirname, './../', 'src')],
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }),
)
