const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  devServer: {
    proxy: {
      '/j': {
        target: 'https://movie.douban.com'
      }
    }
  }

}
